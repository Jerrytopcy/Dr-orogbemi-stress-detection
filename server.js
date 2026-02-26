const express = require('express');
const path = require('path');
const { Pool } = require('pg');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' })); // Increase limit for large assessment objects
app.use(express.static(path.join(__dirname, 'public')));


// Add this helper function near the top of server.js, after pool initialization
const validateAdminAccess = (req, res, next) => {
  const adminToken = req.headers['x-admin-token'] || req.query.admin_token;
  const validToken = process.env.ADMIN_SECRET_KEY;
  
  if (!validToken) {
    return res.status(500).json({ success: false, message: 'Admin key not configured' });
  }
  
  if (adminToken !== validToken) {
    return res.status(403).json({ success: false, message: 'Unauthorized' });
  }
  
  next();
};


// Database Connection
// Railway automatically provides DATABASE_URL environment variable
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

// --- API ROUTES ---

// 1. Submit Assessment
app.post('/api/assessments', async (req, res) => {
  console.log("DEBUG: POST /api/assessments received"); // <-- ADD THIS LINE
  console.log("DEBUG: Request body (first 100 chars):", JSON.stringify(req.body).substring(0, 100)); // Optional: log part of the body

  const {
    userId, sessionId, score, maxScore, level, class: stressClass,
    description, sectionScores, sectionLevels, highestSection,
    personalRecommendations, organizationalRecommendations, answers
  } = req.body;

  try {
    console.log("DEBUG: Attempting to insert into DB..."); // <-- Optional: Log before DB call
    const result = await pool.query(
      `INSERT INTO assessments 
      (user_id, session_id, score, max_score, level, class, description, 
       section_scores, section_levels, highest_section, 
       personal_recommendations, organizational_recommendations, answers)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
       RETURNING *`,
      [
        userId, sessionId, score, maxScore, level, stressClass, description,
        JSON.stringify(sectionScores), JSON.stringify(sectionLevels), highestSection,
        JSON.stringify(personalRecommendations), JSON.stringify(organizationalRecommendations), JSON.stringify(answers)
      ]
    );
    console.log("DEBUG: Insert successful, sending response."); // <-- Optional: Log after DB call
    res.status(201).json({ success: true, data: result.rows[0] });
  } catch (err) {
    console.error('Error saving assessment:', err);
    res.status(500).json({ success: false, message: 'Failed to save assessment' });
  }
});

// 2. Get User History (for the specific anonymous session)
app.get('/api/assessments/user/:sessionId', async (req, res) => {
  const { sessionId } = req.params;
  try {
    const result = await pool.query(
      `SELECT * FROM assessments WHERE session_id = $1 ORDER BY created_at DESC`,
      [sessionId]
    );
    res.json({ success: true, data: result.rows });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to fetch history' });
  }
});

// 3. Get Aggregate Data (For Admin/Overall Insights - e.g., "Is workload the biggest issue?")
app.get('/api/assessments/aggregate', async (req, res) => {
  try {
    // Get total count
    const countRes = await pool.query('SELECT COUNT(*) FROM assessments');
    
    // Get average scores by section (to find the most challenging part)
    // We need to extract JSONB values. This is a simplified aggregation.
    // For complex JSONB aggregation in Postgres, we often do this in JS after fetching raw data 
    // or use jsonb_each_text. Here we fetch recent 1000 for calculation to keep SQL simple.
    const dataRes = await pool.query(
      `SELECT section_scores, highest_section, class FROM assessments ORDER BY created_at DESC LIMIT 1000`
    );

    let sectionTotals = {
      "Workforce and Workload": 0,
      "Skills and Task Management": 0,
      "Facilities and Infrastructure": 0,
      "Mental and Physical Health": 0,
      "Organizational Culture and Leadership": 0
    };
    let sectionCounts = { ...sectionTotals };
    let highestSectionCounts = {};

    dataRes.rows.forEach(row => {
      const scores = row.section_scores;
      if (scores) {
        for (const [section, score] of Object.entries(scores)) {
          if (sectionTotals[section] !== undefined) {
            sectionTotals[section] += score;
            sectionCounts[section] += 1;
          }
        }
      }
      if (row.highest_section) {
        highestSectionCounts[row.highest_section] = (highestSectionCounts[row.highest_section] || 0) + 1;
      }
    });

    // Calculate averages
    const sectionAverages = {};
    for (const section in sectionTotals) {
      sectionAverages[section] = sectionCounts[section] > 0 
        ? (sectionTotals[section] / sectionCounts[section]).toFixed(2) 
        : 0;
    }

    // Find the most challenging section overall
    let mostChallenging = Object.keys(highestSectionCounts).reduce((a, b) => 
      highestSectionCounts[a] > highestSectionCounts[b] ? a : b, "None");

    res.json({
      success: true,
      totalAssessments: countRes.rows[0].count,
      sectionAverages,
      mostChallengingSection: mostChallenging,
      highestSectionDistribution: highestSectionCounts
    });

  } catch (err) {
    console.error('Aggregate error:', err);
    res.status(500).json({ success: false, message: 'Failed to fetch aggregate data' });
  }
});

// Validate invitation token
app.get('/api/validate-token/:token', async (req, res) => {
  const { token } = req.params;
  try {
    const result = await pool.query(
      'SELECT * FROM invitation_tokens WHERE token = $1',
      [token]
    );
    
    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Invalid token' });
    }
    
    const tokenData = result.rows[0];
    
    if (tokenData.is_used) {
      return res.status(410).json({ 
        success: false, 
        message: 'This assessment link has already been used',
        used_at: tokenData.used_at 
      });
    }
    
    res.json({ 
      success: true, 
      data: { 
        token: tokenData.token,
        user_role: tokenData.user_role 
      } 
    });
  } catch (err) {
    console.error('Token validation error:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Updated POST /api/assessments endpoint
app.post('/api/assessments', async (req, res) => {
  const {
    userId, sessionId, score, maxScore, level, class: stressClass,
    description, sectionScores, sectionLevels, highestSection,
    personalRecommendations, organizationalRecommendations, answers,
    invitationToken // NEW: token from client
  } = req.body;

  try {
    // Validate token if provided
    if (invitationToken) {
      const tokenCheck = await pool.query(
        'SELECT * FROM invitation_tokens WHERE token = $1',
        [invitationToken]
      );
      
      if (tokenCheck.rows.length === 0) {
        return res.status(400).json({ success: false, message: 'Invalid invitation token' });
      }
      
      if (tokenCheck.rows[0].is_used) {
        return res.status(410).json({ success: false, message: 'This link has already been used' });
      }
      
      // Mark token as used
      await pool.query(
        'UPDATE invitation_tokens SET is_used = TRUE, used_at = CURRENT_TIMESTAMP WHERE token = $1',
        [invitationToken]
      );
    }

    const result = await pool.query(
      `INSERT INTO assessments 
      (user_id, session_id, score, max_score, level, class, description, 
       section_scores, section_levels, highest_section, 
       personal_recommendations, organizational_recommendations, answers)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
       RETURNING *`,
      [
        userId, sessionId, score, maxScore, level, stressClass, description,
        JSON.stringify(sectionScores), JSON.stringify(sectionLevels), highestSection,
        JSON.stringify(personalRecommendations), JSON.stringify(organizationalRecommendations), JSON.stringify(answers)
      ]
    );
    
    res.status(201).json({ success: true, data: result.rows[0] });
  } catch (err) {
    console.error('Error saving assessment:', err);
    res.status(500).json({ success: false, message: 'Failed to save assessment' });
  }
});

// Generate new invitation tokens (protect this endpoint in production)
app.post('/api/admin/generate-tokens', async (req, res) => {
  const { count = 1, role = 'participant' } = req.body;
  
  // Simple auth check - replace with proper authentication
  const adminKey = req.headers['x-admin-key'];
  if (adminKey !== process.env.ADMIN_SECRET_KEY) {
    return res.status(403).json({ success: false, message: 'Unauthorized' });
  }
  
  try {
    const tokens = [];
    for (let i = 0; i < count; i++) {
      const token = 'tok_' + Math.random().toString(36).substr(2, 16) + Date.now().toString(36);
      const result = await pool.query(
        `INSERT INTO invitation_tokens (token, user_role) VALUES ($1, $2) RETURNING *`,
        [token, role]
      );
      tokens.push(result.rows[0]);
    }
    
    res.json({ success: true, data: tokens });
  } catch (err) {
    console.error('Token generation error:', err);
    res.status(500).json({ success: false, message: 'Failed to generate tokens' });
  }
});

// Add after your existing routes, before app.listen()

// Generate one-time assessment tokens (Admin only)
app.post('/api/admin/generate-token', validateAdminAccess, async (req, res) => {
  const { role = 'participant', count = 1, expires_hours = 168 } = req.body; // default: 7 days
  
  try {
    const tokens = [];
    
    for (let i = 0; i < count; i++) {
      // Generate cryptographically secure token
      const crypto = require('crypto');
      const token = 'tok_' + crypto.randomBytes(16).toString('hex');
      const expiresAt = new Date(Date.now() + expires_hours * 60 * 60 * 1000);
      
      const result = await pool.query(
        `INSERT INTO invitation_tokens (token, user_role, expires_at) 
         VALUES ($1, $2, $3) RETURNING *`,
        [token, role, expiresAt]
      );
      
      tokens.push(result.rows[0]);
    }
    
    res.json({ 
      success: true, 
      message: `Generated ${count} token(s)`,
      data: tokens.map(t => ({
        token: t.token,
        role: t.user_role,
        expires_at: t.expires_at,
        link: `${process.env.APP_URL || 'https://dr-orogbemi-stress-detection-production.up.railway.app'}/?token=${t.token}`
      }))
    });
    
  } catch (err) {
    console.error('Token generation error:', err);
    res.status(500).json({ success: false, message: 'Failed to generate tokens' });
  }
});

// List generated tokens (Admin only - for management)
app.get('/api/admin/tokens', validateAdminAccess, async (req, res) => {
  const { limit = 50, include_used = false } = req.query;
  
  try {
    const query = include_used === 'true' 
      ? 'SELECT * FROM invitation_tokens ORDER BY created_at DESC LIMIT $1'
      : 'SELECT * FROM invitation_tokens WHERE is_used = FALSE AND (expires_at IS NULL OR expires_at > NOW()) ORDER BY created_at DESC LIMIT $1';
    
    const result = await pool.query(query, [parseInt(limit)]);
    
    res.json({ 
      success: true, 
      data: result.rows.map(t => ({
        id: t.id,
        token: t.token,
        role: t.user_role,
        is_used: t.is_used,
        used_at: t.used_at,
        created_at: t.created_at,
        expires_at: t.expires_at,
        link: `${process.env.APP_URL || 'https://dr-orogbemi-stress-detection-production.up.railway.app'}/?token=${t.token}`
      }))
    });
  } catch (err) {
    console.error('Token list error:', err);
    res.status(500).json({ success: false, message: 'Failed to fetch tokens' });
  }
});

// Revoke a token (Admin only)
app.delete('/api/admin/tokens/:token', validateAdminAccess, async (req, res) => {
  const { token } = req.params;
  
  try {
    const result = await pool.query(
      'DELETE FROM invitation_tokens WHERE token = $1 RETURNING *',
      [token]
    );
    
    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Token not found' });
    }
    
    res.json({ success: true, message: 'Token revoked successfully' });
  } catch (err) {
    console.error('Token revoke error:', err);
    res.status(500).json({ success: false, message: 'Failed to revoke token' });
  }
});

// Default Route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🔗 Connected to Railway Postgres`);
});