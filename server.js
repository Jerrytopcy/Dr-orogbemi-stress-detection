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

// Database Connection
// Railway automatically provides DATABASE_URL environment variable
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

// Initialize Database Table
const initDB = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS assessments (
        id SERIAL PRIMARY KEY,
        user_id VARCHAR(255) NOT NULL,
        session_id VARCHAR(255) NOT NULL,
        score INTEGER NOT NULL,
        max_score INTEGER DEFAULT 100,
        level VARCHAR(50) NOT NULL,
        class VARCHAR(50) NOT NULL,
        description TEXT,
        section_scores JSONB,
        section_levels JSONB,
        highest_section VARCHAR(255),
        personal_recommendations JSONB,
        organizational_recommendations JSONB,
        answers JSONB,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('✅ Database table initialized');
  } catch (err) {
    console.error('❌ Database initialization error:', err);
  }
};

initDB();

// --- API ROUTES ---

// 1. Submit Assessment
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

// Default Route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🔗 Connected to Railway Postgres`);
});