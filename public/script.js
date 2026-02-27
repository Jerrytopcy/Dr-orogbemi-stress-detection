
// global variables section
let currentInvitationToken = null;
let currentUserRole = 'participant'; // 'participant' or 'admin'
let isTokenValidated = false;
let tokenValidationStatus = 'pending';


// Academic Stress Survey Questions
// Total questions: 50 - distributed across 5 sections of 10 questions each.
const academicStressQuestions = [
// === SECTION 1: Workforce and Workload ===
{ id: 1, question: "I feel that the number of staff in my department is insufficient for the workload.", category: "Workforce and Workload", options: [{ value: 0, text: "Never" }, { value: 1, text: "Fairly often" }, { value: 2, text: "Very often" }] },
{ id: 2, question: "I frequently handle more responsibilities than I can comfortably manage.", category: "Workforce and Workload", options: [{ value: 0, text: "Never" }, { value: 1, text: "Fairly often" }, { value: 2, text: "Very often" }] },
{ id: 3, question: "I often work beyond official hours to complete tasks.", category: "Workforce and Workload", options: [{ value: 0, text: "Never" }, { value: 1, text: "Fairly often" }, { value: 2, text: "Very often" }] },
{ id: 4, question: "I feel pressured to meet unrealistic deadlines.", category: "Workforce and Workload", options: [{ value: 0, text: "Never" }, { value: 1, text: "Fairly often" }, { value: 2, text: "Very often" }] },
{ id: 5, question: "I experience work overload during most weeks.", category: "Workforce and Workload", options: [{ value: 0, text: "Never" }, { value: 1, text: "Fairly often" }, { value: 2, text: "Very often" }] },
{ id: 6, question: "I struggle to balance teaching, research and administrative duties.", category: "Workforce and Workload", options: [{ value: 0, text: "Never" }, { value: 1, text: "Fairly often" }, { value: 2, text: "Very often" }] },
{ id: 7, question: "I feel that my workload affects my personal life.", category: "Workforce and Workload", options: [{ value: 0, text: "Never" }, { value: 1, text: "Fairly often" }, { value: 2, text: "Very often" }] },
{ id: 8, question: "I am assigned urgent tasks without adequate notice.", category: "Workforce and Workload", options: [{ value: 0, text: "Never" }, { value: 1, text: "Fairly often" }, { value: 2, text: "Very often" }] },
{ id: 9, question: "I feel that task distribution in my department is unfair.", category: "Workforce and Workload", options: [{ value: 0, text: "Never" }, { value: 1, text: "Fairly often" }, { value: 2, text: "Very often" }] },
{ id: 10, question: "I feel exhausted due to the volume of work assigned to me.", category: "Workforce and Workload", options: [{ value: 0, text: "Never" }, { value: 1, text: "Fairly often" }, { value: 2, text: "Very often" }] },
// === SECTION 2: Skills and Task Management ===
{ id: 11, question: "I feel adequately prepared for the tasks assigned to me.", category: "Skills and Task Management", options: [{ value: 2, text: "Never" }, { value: 1, text: "Fairly often" }, { value: 0, text: "Very often" }] },
{ id: 12, question: "I experience stress when handling unfamiliar responsibilities.", category: "Skills and Task Management", options: [{ value: 0, text: "Never" }, { value: 1, text: "Fairly often" }, { value: 2, text: "Very often" }] },
{ id: 13, question: "I receive unclear instructions regarding assigned duties.", category: "Skills and Task Management", options: [{ value: 0, text: "Never" }, { value: 1, text: "Fairly often" }, { value: 2, text: "Very often" }] },
{ id: 14, question: "I am expected to perform tasks outside my area of expertise.", category: "Skills and Task Management", options: [{ value: 0, text: "Never" }, { value: 1, text: "Fairly often" }, { value: 2, text: "Very often" }] },
{ id: 15, question: "I lack sufficient professional development opportunities.", category: "Skills and Task Management", options: [{ value: 0, text: "Never" }, { value: 1, text: "Fairly often" }, { value: 2, text: "Very often" }] },
{ id: 16, question: "I feel uncertain about performance expectations.", category: "Skills and Task Management", options: [{ value: 0, text: "Never" }, { value: 1, text: "Fairly often" }, { value: 2, text: "Very often" }] },
{ id: 17, question: "I experience difficulty prioritizing assigned duties.", category: "Skills and Task Management", options: [{ value: 0, text: "Never" }, { value: 1, text: "Fairly often" }, { value: 2, text: "Very often" }] },
{ id: 18, question: "I receive conflicting instructions from supervisors.", category: "Skills and Task Management", options: [{ value: 0, text: "Never" }, { value: 1, text: "Fairly often" }, { value: 2, text: "Very often" }] },
{ id: 19, question: "I feel unsupported when facing technical challenges.", category: "Skills and Task Management", options: [{ value: 0, text: "Never" }, { value: 1, text: "Fairly often" }, { value: 2, text: "Very often" }] },
{ id: 20, question: "I worry about making mistakes due to insufficient guidance.", category: "Skills and Task Management", options: [{ value: 0, text: "Never" }, { value: 1, text: "Fairly often" }, { value: 2, text: "Very often" }] },
// === SECTION 3: Facilities and Infrastructure ===
{ id: 21, question: "Inadequate office space affects my productivity.", category: "Facilities and Infrastructure", options: [{ value: 0, text: "Never" }, { value: 1, text: "Fairly often" }, { value: 2, text: "Very often" }] },
{ id: 22, question: "Lack of functional equipment increases my stress.", category: "Facilities and Infrastructure", options: [{ value: 0, text: "Never" }, { value: 1, text: "Fairly often" }, { value: 2, text: "Very often" }] },
{ id: 23, question: "Poor internet connectivity disrupts my work.", category: "Facilities and Infrastructure", options: [{ value: 0, text: "Never" }, { value: 1, text: "Fairly often" }, { value: 2, text: "Very often" }] },
{ id: 24, question: "I experience delays due to insufficient laboratory or teaching facilities.", category: "Facilities and Infrastructure", options: [{ value: 0, text: "Never" }, { value: 1, text: "Fairly often" }, { value: 2, text: "Very often" }] },
{ id: 25, question: "Administrative processes slow down my work.", category: "Facilities and Infrastructure", options: [{ value: 0, text: "Never" }, { value: 1, text: "Fairly often" }, { value: 2, text: "Very often" }] },
{ id: 26, question: "I lack access to necessary teaching materials.", category: "Facilities and Infrastructure", options: [{ value: 0, text: "Never" }, { value: 1, text: "Fairly often" }, { value: 2, text: "Very often" }] },
{ id: 27, question: "I experience stress due to unreliable power supply.", category: "Facilities and Infrastructure", options: [{ value: 0, text: "Never" }, { value: 1, text: "Fairly often" }, { value: 2, text: "Very often" }] },
{ id: 28, question: "I feel that institutional systems are inefficient.", category: "Facilities and Infrastructure", options: [{ value: 0, text: "Never" }, { value: 1, text: "Fairly often" }, { value: 2, text: "Very often" }] },
{ id: 29, question: "I struggle with outdated work tools or software.", category: "Facilities and Infrastructure", options: [{ value: 0, text: "Never" }, { value: 1, text: "Fairly often" }, { value: 2, text: "Very often" }] },
{ id: 30, question: "Infrastructure limitations affect my job performance.", category: "Facilities and Infrastructure", options: [{ value: 0, text: "Never" }, { value: 1, text: "Fairly often" }, { value: 2, text: "Very often" }] },
// === SECTION 4: Mental and Physical Health ===
{ id: 31, question: "I feel emotionally exhausted because of my job.", category: "Mental and Physical Health", options: [{ value: 0, text: "Never" }, { value: 1, text: "Fairly often" }, { value: 2, text: "Very often" }] },
{ id: 32, question: "I feel anxious about work-related responsibilities.", category: "Mental and Physical Health", options: [{ value: 0, text: "Never" }, { value: 1, text: "Fairly often" }, { value: 2, text: "Very often" }] },
{ id: 33, question: "I have difficulty sleeping due to work stress.", category: "Mental and Physical Health", options: [{ value: 0, text: "Never" }, { value: 1, text: "Fairly often" }, { value: 2, text: "Very often" }] },
{ id: 34, question: "I experience frequent headaches related to work.", category: "Mental and Physical Health", options: [{ value: 0, text: "Never" }, { value: 1, text: "Fairly often" }, { value: 2, text: "Very often" }] },
{ id: 35, question: "I feel mentally drained at the end of most days.", category: "Mental and Physical Health", options: [{ value: 0, text: "Never" }, { value: 1, text: "Fairly often" }, { value: 2, text: "Very often" }] },
{ id: 36, question: "I experience physical fatigue because of my workload.", category: "Mental and Physical Health", options: [{ value: 0, text: "Never" }, { value: 1, text: "Fairly often" }, { value: 2, text: "Very often" }] },
{ id: 37, question: "I have difficulty concentrating due to stress.", category: "Mental and Physical Health", options: [{ value: 0, text: "Never" }, { value: 1, text: "Fairly often" }, { value: 2, text: "Very often" }] },
{ id: 38, question: "I feel irritable at work.", category: "Mental and Physical Health", options: [{ value: 0, text: "Never" }, { value: 1, text: "Fairly often" }, { value: 2, text: "Very often" }] },
{ id: 39, question: "I feel overwhelmed by my responsibilities.", category: "Mental and Physical Health", options: [{ value: 0, text: "Never" }, { value: 1, text: "Fairly often" }, { value: 2, text: "Very often" }] },
{ id: 40, question: "My job negatively affects my overall wellbeing.", category: "Mental and Physical Health", options: [{ value: 0, text: "Never" }, { value: 1, text: "Fairly often" }, { value: 2, text: "Very often" }] },
// === SECTION 5: Organizational Culture and Leadership ===
{ id: 41, question: "Leadership communicates expectations clearly.", category: "Organizational Culture and Leadership", options: [{ value: 2, text: "Never" }, { value: 1, text: "Fairly often" }, { value: 0, text: "Very often" }] },
{ id: 42, question: "I feel supported by management.", category: "Organizational Culture and Leadership", options: [{ value: 2, text: "Never" }, { value: 1, text: "Fairly often" }, { value: 0, text: "Very often" }] },
{ id: 43, question: "I feel valued for my contributions.", category: "Organizational Culture and Leadership", options: [{ value: 2, text: "Never" }, { value: 1, text: "Fairly often" }, { value: 0, text: "Very often" }] },
{ id: 44, question: "I fear negative consequences for expressing concerns.", category: "Organizational Culture and Leadership", options: [{ value: 0, text: "Never" }, { value: 1, text: "Fairly often" }, { value: 2, text: "Very often" }] },
{ id: 45, question: "I feel excluded from important decisions.", category: "Organizational Culture and Leadership", options: [{ value: 0, text: "Never" }, { value: 1, text: "Fairly often" }, { value: 2, text: "Very often" }] },
{ id: 46, question: "I experience stress due to poor communication from leadership.", category: "Organizational Culture and Leadership", options: [{ value: 0, text: "Never" }, { value: 1, text: "Fairly often" }, { value: 2, text: "Very often" }] },
{ id: 47, question: "I feel that policies are inconsistently applied.", category: "Organizational Culture and Leadership", options: [{ value: 0, text: "Never" }, { value: 1, text: "Fairly often" }, { value: 2, text: "Very often" }] },
{ id: 48, question: "I feel that leadership decisions increase staff stress.", category: "Organizational Culture and Leadership", options: [{ value: 0, text: "Never" }, { value: 1, text: "Fairly often" }, { value: 2, text: "Very often" }] },
{ id: 49, question: "I lack trust in institutional leadership.", category: "Organizational Culture and Leadership", options: [{ value: 0, text: "Never" }, { value: 1, text: "Fairly often" }, { value: 2, text: "Very often" }] },
{ id: 50, question: "I feel that the work environment lacks transparency.", category: "Organizational Culture and Leadership", options: [{ value: 0, text: "Never" }, { value: 1, text: "Fairly often" }, { value: 2, text: "Very often" }] }
];
// Global variables
let currentUser = null;
let currentPage = "home";
let currentQuestionIndex = 0;
let assessmentAnswers = {};
let assessmentInProgress = false;
let stressTrendChart = null;
let stressDistributionChart = null;
let monthlyOverviewChart = null;
let resultTrendChartInstance = null;

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
  showLoadingScreen("Initializing StressDetect System...");
  setTimeout(() => {
    initializeApp();
    setupEventListeners();
    loadTheme();
    setTimeout(() => {
      initializeCharts();
      hideLoadingScreen();
    }, 500);
  }, 1500);
});

function initializeApp() {
  // Generate or retrieve session ID
  let sessionId = localStorage.getItem('stressDetectSessionId');
  if (!sessionId) {
    sessionId = 'sess_' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem('stressDetectSessionId', sessionId);
  }
  
  currentUser = {
    id: "session_user",
    sessionId: sessionId,  // Add sessionId to currentUser
    name: "Participant",
    email: "participant@stressdetect.local",
    avatar: null,
    createdAt: new Date().toISOString()
  };
  showPage("home");
  setTimeout(() => {
    checkAdminAccess();
    validateInvitationToken();
  }, 300);
}

function setupEventListeners() {
  const navToggle = document.getElementById("nav-toggle");
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      document.getElementById("nav-menu").classList.toggle("active");
    });
  }
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("change", toggleTheme);
  }
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const submitBtn = document.getElementById("submit-btn");
  if (prevBtn) prevBtn.addEventListener("click", previousQuestion);
  if (nextBtn) nextBtn.addEventListener("click", nextQuestion);
  if (submitBtn) submitBtn.addEventListener("click", submitAssessment);
}
function navigateToAssessment() {
    if (!isTokenValidated) {
        showModal(
    'Access Required <i class="fas fa-info-circle" style="color:var(--primary-color);margin-left:6px;"></i>',
    `<div style="line-height:1.7;">
        <div style="background:var(--surface-color);padding:12px 16px;border-radius:6px;border-left:4px solid var(--primary-color);margin:12px 0;">
            <p style="margin:0;font-weight:500;">One-Time Assessment Link</p>
            <p style="margin:4px 0 0 0;color:var(--text-secondary);font-size:0.95rem;">
                This assessment requires a valid invitation link. Each link can only be used once.
            </p>
        </div>
        <p style="margin:16px 0 8px 0;"><strong>Next steps:</strong></p>
        <ul style="margin:0;padding-left:20px;color:var(--text-secondary);">
            <li style="margin-bottom:6px;">Contact your administrator to request an assessment link</li>
            <li>Use the unique URL provided to begin your assessment</li>
        </ul>
        <div style="background:#f0f9ff;padding:10px 12px;border-radius:6px;border:1px solid #bae6fd;margin-top:16px;">
            <p style="margin:0;font-size:0.9rem;color:#0369a1;">
                <i class="fas fa-shield-alt" style="margin-right:6px;"></i>
                <strong>Note:</strong> Admin users can generate new links from the History section.
            </p>
        </div>
    </div>`,
    null
);
        return;
    }
    showPage('dashboard');
}

// Page Navigation
function showPage(pageId) {
    // Block history and settings for participants without valid token
    if (!isTokenValidated && currentUserRole === 'participant') {
        if (pageId === 'dashboard' || pageId === 'history' || pageId === 'settings') {
            if (pageId === 'dashboard') {
                blockAssessmentAccess('Please validate your assessment token to begin.');
            } else {
                showToast('A valid assessment token is required to access this section.', 'warning');
                showPage('home');
                return;
            }
        }
    }

    // Block history page for participants with invitation token only
    if (currentInvitationToken && currentUserRole === 'participant') {
        if (pageId === 'history' || pageId === 'settings') {
            showToast('This section is not available for assessment participants', 'warning');
            return;
        }
    }

    // Admins can access all pages
    if (currentUserRole === 'admin') {
        if (["dashboard", "history", "results"].includes(pageId)) {
            showLoadingScreen(`Loading ${pageId}...`);
            setTimeout(() => {
                showPageContent(pageId);
            }, 600);
            return;
        }
    }

    // Standard page loading for other cases
    if (["dashboard", "history", "results"].includes(pageId)) {
        showLoadingScreen(`Loading ${pageId}...`);
        setTimeout(() => {
            showPageContent(pageId);
        }, 600);
    } else {
        showPageContent(pageId);
    }
}
function showPageContent(pageId) {
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => {
    page.style.display = page.id === pageId + "-page" ? "block" : "none";
  });
  currentPage = pageId;
  switch (pageId) {
    case "dashboard":
      loadUserData();
      loadDashboardStats();
      setTimeout(() => {
        updateCharts();
        showEthicalModal(); // Show privacy modal on dashboard load
      }, 100);
      break;
    case "history":
      loadHistory();
      break;
    case "settings":
      loadUserData();
      break;
    case "results":
      break;
  }
  const navMenu = document.getElementById("nav-menu");
  if (navMenu) navMenu.classList.remove("active");
  window.scrollTo(0, 0);
}

// Ethical & Privacy Modal
function showEthicalModal() {
  // Check if already completed before showing modal
  hasCompletedAssessment().then(alreadyCompleted => {
    if (alreadyCompleted) {
      showToast('You have already completed your assessment for this session.', 'info');
      return;
    }
    
    const modalHtml = `
    <div class="modal-content">
      <div class="modal-header">
        <h3><i class="fas fa-shield-alt"></i> Privacy & Ethical Notice</h3>
        <button class="modal-close" onclick="closeModal()">&times;</button>
      </div>
      <div class="modal-body">
        <p><strong>Welcome to the Stress Detection System.</strong></p>
        <p>Before you begin, please note the following ethical guidelines:</p>
        <ul style="margin-bottom: 15px;">
          <li><strong>Anonymity:</strong> No personal identity is collected. You are participating anonymously.</li>
          <li><strong>Data Usage:</strong> Your responses are aggregated to identify organizational stress trends. Individual data is never shared.</li>
          <li><strong>Voluntary Participation:</strong> You may stop the assessment at any time.</li>
          <li><strong>Wellbeing First:</strong> If any question causes distress, please take a break.</li>
        </ul>
        <p style="background: #f0fdf4; padding: 10px; border-left: 4px solid #16a34a; border-radius: 4px; color: black;">
          <i class="fas fa-info-circle"></i>
          <strong>Instruction:</strong>
          Please relax and answer honestly. When you click "Start Assessment" below, the page will scroll to the questions automatically.
        </p>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
        <button class="btn btn-primary" onclick="startAssessmentFromModal()">
          <i class="fas fa-check-circle"></i> I Understand, Start Assessment
        </button>
      </div>
    </div>
    `;
    
    const modal = document.getElementById('modal');
    modal.innerHTML = modalHtml;
    modal.classList.add('active');
  });
}

async function startAssessmentFromModal() {
  const alreadyCompleted = await hasCompletedAssessment();

  if (alreadyCompleted) {
    closeModal();
    showToast('You have already completed your assessment for this session.', 'info');
    return;
  }

  closeModal();

  startAssessment();

  // Wait for assessment to render before scrolling
  setTimeout(() => {
    const assessmentSection = document.getElementById('assessment-section');

    if (assessmentSection) {
      assessmentSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      console.log('assessment-section not found');
    }
  }, 600);
}

function closeModal() {
  document.getElementById("modal").classList.remove("active");
}



// Loading Screen
function showLoadingScreen(text = "Loading...") {
  const loadingScreen = document.getElementById("loading-screen");
  const loadingText = document.getElementById("loading-text");
  const loadingBar = document.getElementById("loading-bar");
  if (!loadingScreen) return;
  loadingText.textContent = text;
  loadingScreen.classList.remove("hidden");
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 20 + 10;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      setTimeout(() => { hideLoadingScreen(); }, 300);
    }
    loadingBar.style.width = progress + "%";
  }, 50);
}

function hideLoadingScreen() {
  const loadingScreen = document.getElementById("loading-screen");
  if (loadingScreen) {
    loadingScreen.classList.add("hidden");
  }
}

// Assessment Functions
async function startAssessment() {
      // Enforce token requirement
    if (!isTokenValidated || tokenValidationStatus !== 'valid') {
        showModal(
    'Access Required <i class="fas fa-info-circle" style="color:var(--primary-color);margin-left:6px;"></i>',
    `<div style="line-height:1.7;">
        <div style="background:var(--surface-color);padding:12px 16px;border-radius:6px;border-left:4px solid var(--primary-color);margin:12px 0;">
            <p style="margin:0;font-weight:500;">One-Time Assessment Link</p>
            <p style="margin:4px 0 0 0;color:var(--text-secondary);font-size:0.95rem;">
                This assessment requires a valid invitation link. Each link can only be used once.
            </p>
        </div>
        <p style="margin:16px 0 8px 0;"><strong>Next steps:</strong></p>
        <ul style="margin:0;padding-left:20px;color:var(--text-secondary);">
            <li style="margin-bottom:6px;">Contact your administrator to request an assessment link</li>
            <li>Use the unique URL provided to begin your assessment</li>
        </ul>
        <div style="background:#f0f9ff;padding:10px 12px;border-radius:6px;border:1px solid #bae6fd;margin-top:16px;">
            <p style="margin:0;font-size:0.9rem;color:#0369a1;">
                <i class="fas fa-shield-alt" style="margin-right:6px;"></i>
                <strong>Note:</strong> Admin users can generate new links from the History section.
            </p>
        </div>
    </div>`,
    null
);
        return;
    }
  // Check if user has already completed an assessment
  const alreadyCompleted = await hasCompletedAssessment();
  
  if (alreadyCompleted) {
    showToast('You have already completed your assessment for this session. Each participant may submit only one response.', 'info', 5000);
    
    // Optional: Show a modal with more detail
    showModal(
      'Assessment Already Completed',
      'Thank you for your contribution. You have already submitted your stress assessment for this session. Your response has been securely recorded and will contribute to organizational insights while maintaining your anonymity.',
      null
    );
    
    return; // Exit early - do not start a new assessment
  }
  
  // Proceed with normal assessment flow
  currentQuestionIndex = 0;
  assessmentAnswers = {};
  assessmentInProgress = true;
  
  const assessmentSection = document.getElementById('assessment-section');
  if (assessmentSection) {
    assessmentSection.style.display = 'block';
    document.getElementById('total-questions').textContent = academicStressQuestions.length;
    showQuestion(0);
    updateAssessmentProgress();
  }
}

function hideAssessment() {
  const assessmentSection = document.getElementById("assessment-section");
  if (assessmentSection) assessmentSection.style.display = "none";
  assessmentInProgress = false;
  currentQuestionIndex = 0;
  assessmentAnswers = {};
}

function showQuestion(index) {
  const question = academicStressQuestions[index];
  const questionContent = document.getElementById("question-content");
  if (!questionContent) return;
  
  const categoryDisplay = {
    "Workforce and Workload": "Workforce & Workload",
    "Skills and Task Management": "Skills & Task Management",
    "Facilities and Infrastructure": "Facilities & Infrastructure",
    "Mental and Physical Health": "Mental & Physical Health",
    "Organizational Culture and Leadership": "Culture & Leadership"
  };
  const categoryLabel = categoryDisplay[question.category] || question.category;
  
  questionContent.innerHTML = `
    <div style="font-size:0.9rem; color:#059669; font-weight:500; margin-bottom:10px;">
      Section: ${categoryLabel}
    </div>
    <h4>Question ${index + 1}</h4>
    <p>${question.question}</p>
    <div class="question-options" id="question-options">
      ${question.options.map((option, optionIndex) => `
        <label class="question-option" onclick="selectOption(${option.value}, ${optionIndex})">
          <input type="radio" name="current-question" value="${option.value}">
          <span>${option.text}</span>
        </label>
      `).join("")}
    </div>
  `;
  
  if (assessmentAnswers[question.id]) {
    const savedValue = assessmentAnswers[question.id].value;
    const radioButton = questionContent.querySelector(`input[value="${savedValue}"]`);
    const optionLabel = radioButton ? radioButton.closest(".question-option") : null;
    if (radioButton && optionLabel) {
      radioButton.checked = true;
      optionLabel.classList.add("selected");
    }
  }
  
  updateNavigationButtons();
}

function selectOption(value, optionIndex) {
  const question = academicStressQuestions[currentQuestionIndex];
  const options = document.querySelectorAll(".question-option");
  options.forEach((option) => option.classList.remove("selected"));
  if (options[optionIndex]) options[optionIndex].classList.add("selected");
  assessmentAnswers[question.id] = {
    question: question.question,
    answer: question.options[optionIndex].text,
    value: value,
  };
  updateNavigationButtons();
}

function nextQuestion() {
  const currentCategory = academicStressQuestions[currentQuestionIndex].category;
  const nextIndex = currentQuestionIndex + 1;
  if (nextIndex < academicStressQuestions.length) {
    const nextCategory = academicStressQuestions[nextIndex].category;
    if (currentCategory !== nextCategory) {
      showToast(`Now moving to: ${nextCategory}`, "info", 3000);
      setTimeout(() => {
        const assessmentSection = document.getElementById("assessment-section");
        if (assessmentSection) {
          assessmentSection.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 100);
    }
    currentQuestionIndex++;
    showQuestion(currentQuestionIndex);
    updateAssessmentProgress();
  }
}

function previousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuestion(currentQuestionIndex);
    updateAssessmentProgress();
  }
}

function updateNavigationButtons() {
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const submitBtn = document.getElementById("submit-btn");
  if (!prevBtn || !nextBtn || !submitBtn) return;
  
  prevBtn.disabled = currentQuestionIndex === 0;
  
  const isLastQuestion = currentQuestionIndex === academicStressQuestions.length - 1;
  const hasAnswer = assessmentAnswers[academicStressQuestions[currentQuestionIndex].id];
  
  if (isLastQuestion) {
    nextBtn.style.display = "none";
    submitBtn.style.display = hasAnswer ? "inline-block" : "none";
  } else {
    nextBtn.style.display = hasAnswer ? "inline-block" : "none";
    submitBtn.style.display = "none";
  }
}

function updateAssessmentProgress() {
  const progress = ((currentQuestionIndex + 1) / academicStressQuestions.length) * 100;
  const fill = document.getElementById("assessment-progress-fill");
  const currentQ = document.getElementById("current-question");
  if (fill) fill.style.width = progress + "%";
  if (currentQ) currentQ.textContent = currentQuestionIndex + 1;
}

// DATABASE INTEGRATION: Submit Assessment
function submitAssessment() {
  // Prevent multiple submissions by disabling the button
  const submitBtn = document.getElementById("submit-btn");
  if (!submitBtn || submitBtn.disabled) return; // Exit if already disabled
  
  // Disable the button and show loading state
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Saving...';
  
  showLoadingScreen("Processing and saving to secure database...");
  
  // Clear any existing timeout to prevent multiple timeouts
  if (window.submitTimeout) {
    clearTimeout(window.submitTimeout);
  }
  
  // Set a single timeout for the submission process
  window.submitTimeout = setTimeout(() => {
    let totalScore = 0;
    const sectionScores = {
      "Workforce and Workload": 0,
      "Skills and Task Management": 0,
      "Facilities and Infrastructure": 0,
      "Mental and Physical Health": 0,
      "Organizational Culture and Leadership": 0
    };
    
    Object.values(assessmentAnswers).forEach((answer) => {
      const originalQuestion = academicStressQuestions.find(q => 
        q.id === Number(Object.keys(assessmentAnswers).find(key => 
          assessmentAnswers[key] === answer)));
      if (originalQuestion) {
        totalScore += answer.value;
        sectionScores[originalQuestion.category] += answer.value;
      }
    });
    
    // [Rest of your scoring logic remains the same...]
    let overallStressLevel, overallStressDescription, overallStressClass;
    if (totalScore <= 24) {
      overallStressLevel = "Low Stress";
      overallStressDescription = "You currently demonstrate healthy stress management. Continue maintaining work-life balance.";
      overallStressClass = "low";
    } else if (totalScore <= 49) {
      overallStressLevel = "Moderate Stress";
      overallStressDescription = "You are experiencing manageable stress levels. Consider improving time management.";
      overallStressClass = "moderate";
    } else if (totalScore <= 59) {
      overallStressLevel = "Abnormal Stress";
      overallStressDescription = "Your stress level is above healthy limits. Reassess workload distribution.";
      overallStressClass = "abnormal";
    } else if (totalScore <= 69) {
      overallStressLevel = "High Stress";
      overallStressDescription = "Significant stress detected. Immediate workload discussion recommended.";
      overallStressClass = "high";
    } else {
      overallStressLevel = "High Risk Stress";
      overallStressDescription = "Critically elevated stress. Professional support strongly recommended.";
      overallStressClass = "high-risk";
    }
    
    const sectionLevels = {};
    let highestSection = "";
    let highestScore = -1;
    for (const [section, score] of Object.entries(sectionScores)) {
      let level, classLabel;
      if (score <= 4) { level = "Low"; classLabel = "low"; }
      else if (score <= 9) { level = "Moderate"; classLabel = "moderate"; }
      else if (score <= 12) { level = "Abnormal"; classLabel = "abnormal"; }
      else if (score <= 15) { level = "High"; classLabel = "high"; }
      else { level = "High Risk"; classLabel = "high-risk"; }
      
      sectionLevels[section] = { level, class: classLabel, score };
      if (score > highestScore) {
        highestScore = score;
        highestSection = section;
      }
    }
    
    let personalRecommendations = [overallStressDescription];
    let organizationalRecommendations = [];
    
    if (highestSection === "Mental and Physical Health") {
      personalRecommendations.push("Focus on sleep consistency and stress-reduction practices.");
      organizationalRecommendations.push("Provide confidential counseling access", "Introduce stress management workshops");
    } else if (highestSection === "Workforce and Workload") {
      personalRecommendations.push("Discuss workload restructuring with supervisors.");
      organizationalRecommendations.push("Conduct workload audit", "Recruit additional staff");
    } else if (highestSection === "Facilities and Infrastructure") {
      personalRecommendations.push("Formally report infrastructure limitations.");
      organizationalRecommendations.push("Upgrade equipment", "Improve digital infrastructure");
    } else if (highestSection === "Organizational Culture and Leadership") {
      personalRecommendations.push("Utilize formal communication channels.");
      organizationalRecommendations.push("Leadership development programs", "Improve transparency");
    } else if (highestSection === "Skills and Task Management") {
      personalRecommendations.push("Request training support and clearer guidelines.");
      organizationalRecommendations.push("Provide professional development opportunities");
    }
    
    const result = {
      userId: currentUser.id,
      sessionId: currentUser.sessionId,
      score: totalScore,
      maxScore: 100,
      level: overallStressLevel,
      class: overallStressClass,
      description: overallStressDescription,
      answers: assessmentAnswers,
      date: new Date().toISOString(),
      timestamp: Date.now(),
      sectionScores: sectionScores,
      sectionLevels: sectionLevels,
      highestSection: highestSection,
      personalRecommendations: personalRecommendations,
      organizationalRecommendations: organizationalRecommendations,
      invitationToken: currentInvitationToken || null 
    };
    
    // SEND TO SERVER
    fetch('/api/assessments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(result)
    })
    .then(response => {
      if (!response.ok) {
        return response.json().then(err => {
          throw new Error(`Server error: ${err.message || 'Unknown error'}`);
        });
      }
      return response.json();
    })
    .then(data => {
      if (data.success) {
        hideAssessment();
        const displayResult = { ...result, id: data.data.id };
        displayResults(displayResult);
        showPage("results");
        loadDashboardStats();
        updateCharts();
        showToast("Assessment saved securely!", "success");
      } else {
        throw new Error('Save failed');
      }
    })
    .catch(err => {
      console.error("DB Save Error:", err);
      showToast("Unable to save to server. Please check your connection.", "error");
      
      // Re-enable the button on error
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Submit Assessment';
      }
    })
    .finally(() => {
      // Always re-enable the button after request completes
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Submit Assessment';
      }
    });
  }, 1500);
}

// Chart Functions
function initializeCharts() {
  if (currentUser) {
    setTimeout(() => {
      createStressTrendChart();
      createStressDistributionChart();
      createMonthlyOverviewChart();
    }, 500);
  }
}

function createStressTrendChart(labels, data) {
  const ctx = document.getElementById("stressTrendChart");
  if (!ctx) return;
  if (stressTrendChart) stressTrendChart.destroy();
  
  stressTrendChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels || [],
      datasets: [{
        label: "Stress Score",
        data: data || [],
        borderColor: "rgb(59, 130, 246)",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        tension: 0.4,
        fill: true,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: true, max: 100 } },
    },
  });
}

function createStressDistributionChart(dbData) {
  const ctx = document.getElementById("stressDistributionChart");
  if (!ctx) return;
  
  let distribution = { low: 0, moderate: 0, high: 0, abnormal: 0, "high-risk": 0 };
  if (dbData) {
    dbData.forEach((r) => {
      if (distribution[r.class] !== undefined) distribution[r.class]++;
    });
  }
  
  if (stressDistributionChart) stressDistributionChart.destroy();
  
  stressDistributionChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Low", "Moderate", "Abnormal", "High", "High Risk"],
      datasets: [{
        data: [distribution.low, distribution.moderate, distribution.abnormal, distribution.high, distribution["high-risk"]],
        backgroundColor: ["rgb(16, 185, 129)", "rgb(245, 158, 11)", "rgb(139, 92, 246)", "rgb(239, 68, 68)", "rgb(120, 20, 20)"],
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { position: "bottom" } },
    },
  });
}

function createMonthlyOverviewChart(dbData) {
  const ctx = document.getElementById("monthlyOverviewChart");
  if (!ctx) return;
  
  let userResults = [];
  if (dbData) {
    userResults = dbData;
  }
  
  const monthlyData = {};
  userResults.forEach((r) => {
    const month = new Date(r.date).toLocaleDateString("en-US", { year: "numeric", month: "short" });
    if (!monthlyData[month]) monthlyData[month] = { total: 0, count: 0 };
    monthlyData[month].total += r.score;
    monthlyData[month].count++;
  });
  
  const labels = Object.keys(monthlyData);
  const averages = labels.map((month) => monthlyData[month].total / monthlyData[month].count);
  
  if (monthlyOverviewChart) monthlyOverviewChart.destroy();
  
  monthlyOverviewChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [{
        label: "Average Stress Score",
        data: averages,
        backgroundColor: "rgba(59, 130, 246, 0.8)",
        borderColor: "rgb(59, 130, 246)",
        borderWidth: 1,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: true, max: 100 } },
    },
  });
}

function updateCharts() {
  if (!currentUser) return;
  
  // Updated to use session-based endpoint with sessionId
  fetch(`/api/assessments/user/${currentUser.sessionId}`)
    .then(res => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then(response => {
      if (response.success && response.data.length > 0) {
        const dbData = response.data;
        // Prepare Trend Data
        const labels = dbData.slice(0, 10).reverse().map(r => new Date(r.date).toLocaleDateString());
        const data = dbData.slice(0, 10).reverse().map(r => r.score);
        createStressTrendChart(labels, data);
        createStressDistributionChart(dbData);
        createMonthlyOverviewChart(dbData);
      } else {
        createStressTrendChart();
        createStressDistributionChart();
        createMonthlyOverviewChart();
      }
    })
    .catch(err => {
      console.error("Chart load error", err);
      createStressTrendChart();
      createStressDistributionChart();
      createMonthlyOverviewChart();
    });
}

// Results Display
function displayResults(result) {
  document.getElementById("score-value").textContent = `${result.score}/${result.maxScore}`;
  document.getElementById("stress-level-text").textContent = result.level;
  document.getElementById("stress-level-description").textContent = result.description;
  
  const stressLevelElement = document.getElementById("stress-level-result");
  if (stressLevelElement) stressLevelElement.className = `stress-level ${result.class}`;
  
  const scoreCircle = document.getElementById("score-circle");
  if (scoreCircle) {
    const percentage = (result.score / result.maxScore) * 360;
    scoreCircle.style.background = `conic-gradient(var(--primary-color) ${percentage}deg, var(--border-color) ${percentage}deg)`;
  }
  
  let sectionScoresHtml = "<ul>";
  for (const [section, data] of Object.entries(result.sectionLevels)) {
    sectionScoresHtml += `<li><strong>${section}:</strong> ${data.score}/20 (${data.level})</li>`;
  }
  sectionScoresHtml += "</ul>";
  
  let personalRecsHtml = "<ul>";
  result.personalRecommendations.forEach(rec => { personalRecsHtml += `<li>${rec}</li>`; });
  personalRecsHtml += "</ul>";
  
  let orgRecsHtml = "<ul>";
  result.organizationalRecommendations.forEach(rec => { orgRecsHtml += `<li>${rec}</li>`; });
  orgRecsHtml += "</ul>";
  
  const sectionContainer = document.getElementById("section-scores-typed");
  const personalContainer = document.getElementById("personal-recs-typed");
  const orgContainer = document.getElementById("org-recs-typed");
  
  if (sectionContainer) {
    sectionContainer.style.display = 'block';
    simulateTypingWithHtml(sectionContainer, sectionScoresHtml, 40);
  }
  
  if (personalContainer) {
    setTimeout(() => {
      personalContainer.style.display = 'block';
      simulateTypingWithHtml(personalContainer, personalRecsHtml, 30);
    }, 500);
  }
  
  if (orgContainer) {
    setTimeout(() => {
      orgContainer.style.display = 'block';
      simulateTypingWithHtml(orgContainer, orgRecsHtml, 30);
    }, 1000);
  }
  
  setTimeout(createResultTrendChart, 100);
}

function simulateTypingWithHtml(container, content, speed = 30) {
  if (!container) return;
  container.innerHTML = '';
  container.style.display = 'block';
  container.innerHTML = content;
  container.classList.add('visible');
}

function createResultTrendChart() {
  const ctx = document.getElementById("resultTrendChart");
  if (!ctx) return;
  
  // Updated to use session-based endpoint with sessionId
  fetch(`/api/assessments/user/${currentUser.sessionId}`)
    .then(res => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then(response => {
      let userResults = [];
      if (response.success) {
        userResults = response.data.sort((a, b) => new Date(a.date) - new Date(b.date));
      }
      
      const labels = userResults.map(r => new Date(r.date).toLocaleDateString());
      const data = userResults.map(r => r.score);
      
      if (resultTrendChartInstance) resultTrendChartInstance.destroy();
      
      if (data.length === 0) {
        ctx.parentElement.style.display = 'none';
        return;
      }
      
      ctx.parentElement.style.display = 'block';
      resultTrendChartInstance = new Chart(ctx, {
        type: "line",
        data: {
          labels: labels,
          datasets: [{
            label: "Stress Score",
            data: data,
            borderColor: "rgb(75, 192, 192)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            tension: 0.4,
            fill: true,
          }],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: { y: { beginAtZero: true, max: 100 } },
        },
      });
    })
    .catch(err => {
      console.error("Result trend chart error", err);
      ctx.parentElement.style.display = 'none';
    });
}

// History & Data Management
function loadHistory() {
  const container = document.getElementById('history-content');
  const aggregateSection = document.getElementById('aggregate-section');
  if (!container) return;
  
  if (aggregateSection) {
    aggregateSection.style.display = currentUserRole === 'admin' ? 'block' : 'none';
  }
  
  let url = `/api/assessments/user/${currentUser.sessionId}`;
  let headers = {};
  let isGlobalView = false;
  
  // Robust admin check
  const isAdminUser = currentUserRole === 'admin' || isAdmin || (adminToken && adminToken.length > 0);
  
  if (isAdminUser) {
    url = '/api/assessments/all';
    if (adminToken) {
      headers['x-admin-token'] = adminToken;
      console.log('Fetching admin assessments with token length:', adminToken.length);
    }
    isGlobalView = true;
  }
  
  fetch(url, { headers })
    .then(async res => {
      if (!res.ok) {
        const errorText = await res.text().catch(() => 'No error body');
        console.error('History fetch failed:', res.status, res.statusText, errorText);
        throw new Error(`HTTP error! status: ${res.status} - ${errorText}`);
      }
      return res.json();
    })
    .then(response => {
      if (!response.success || !response.data || response.data.length === 0) {
        container.innerHTML = `<div class="empty-state"><h3>No assessments found</h3><p>No assessments have been submitted yet.</p></div>`;
        return;
      }
      
     const assessments = response.data.map(row => ({
  id: row.id,
  score: row.score,
  maxScore: row.max_score || row.maxScore,
  level: row.level,
  class: row.class,
  description: row.description,
  date: row.created_at || row.createdAt,  // Use created_at only
  sectionLevels: typeof row.section_levels === 'string' 
    ? JSON.parse(row.section_levels) 
    : row.section_levels || row.sectionLevels,
  personalRecommendations: typeof row.personal_recommendations === 'string' 
    ? JSON.parse(row.personal_recommendations) 
    : row.personal_recommendations,
  organizationalRecommendations: typeof row.organizational_recommendations === 'string' 
    ? JSON.parse(row.organizational_recommendations) 
    : row.organizational_recommendations,
  sessionId: row.session_id || row.sessionId,
  userId: row.user_id || row.userId,
  isGlobalView: isGlobalView
  // Note: Do not reference row.updated_at
})).sort((a, b) => new Date(b.date) - new Date(a.date));
      
      renderHistoryList(container, assessments, isGlobalView);
    })
    .catch(err => {
      console.error('Failed to load history', err);
      container.innerHTML = `<div class="error-state"><p>Error: ${err.message}. Verify admin token and server configuration.</p></div>`;
    });
}

function renderHistoryList(container, userResults, isGlobalView = false) {
  if (userResults.length === 0) {
    container.innerHTML = `<div class="empty-state"><h3>No assessments found</h3><p>No assessments have been submitted yet.</p></div>`;
    return;
  }
  
  container.innerHTML = userResults.map((result) => `
    <div class="history-item">
      <div class="history-info">
        <h4>${isGlobalView ? 'Assessment' : 'Your Assessment'} - ${new Date(result.date).toLocaleDateString()}</h4>
        ${isGlobalView ? `<p style="font-size:0.8rem; color:var(--text-secondary);">Session: ${result.sessionId}</p>` : ''}
        ${isGlobalView ? `<p style="font-size:0.8rem; color:var(--text-secondary);">User: ${result.userId === 'anonymous' ? 'Anonymous' : result.userId}</p>` : ''}
        <p>${result.description}</p>
      </div>
      <div class="history-score">
        <div class="score">${result.score}/${result.maxScore}</div>
        <div class="level ${result.class}">${result.level}</div>
      </div>
      <div class="history-actions">
        <button class="btn btn-small btn-secondary" onclick='viewReportFromObj(${JSON.stringify(result).replace(/'/g, "&#39;")})'>View Report</button>
        ${isGlobalView ? `<button class="btn btn-small btn-primary" onclick="downloadPDFReport('${result.id}')">Download PDF</button>` : ''}
      </div>
    </div>
  `).join("");
}

function clearHistory() {
  // Removed local storage clear logic
  showToast("History is managed by the server.", "info");
}

function loadUserData() {
  if (!currentUser) return;
  
  const nameEl = document.getElementById("user-name");
  if (nameEl) nameEl.textContent = `Welcome, ${currentUser.name}`;
  
  const avatars = document.querySelectorAll(".user-avatar");
  avatars.forEach(av => av.innerHTML = '<i class="fas fa-user-circle"></i>');
}

// Add this inside loadDashboardStats() after fetching user data
async function loadDashboardStats() {
  if (!currentUser) return;
  
  try {
    const response = await fetch(`/api/assessments/user/${currentUser.sessionId}`);
    const data = await response.json();
    
    let userResults = [];
    if (data.success) {
      userResults = data.data;
    }
    
    // Update stats display
    const totalEl = document.getElementById('total-assessments');
    const lastLevelEl = document.getElementById('last-stress-level');
    const daysEl = document.getElementById('days-since-last');
    
    if (totalEl) totalEl.textContent = userResults.length;
    
    // Check if assessment already completed and update UI
    const startBtn = document.querySelector('.action-card[onclick="startAssessment()"]');
    const quickStartBtn = document.querySelector('.hero-buttons .btn-primary');
    
    if (userResults.length > 0) {
      // User has completed assessment - disable start buttons
      if (startBtn) {
        startBtn.style.opacity = '0.6';
        startBtn.style.cursor = 'not-allowed';
        startBtn.onclick = null; // Remove click handler
        startBtn.innerHTML = `
          <i class="fas fa-check-circle"></i>
          <h4>Assessment Completed</h4>
          <p>Thank you for your contribution</p>
        `;
      }
      
      if (quickStartBtn) {
        quickStartBtn.disabled = true;
        quickStartBtn.title = 'You have already completed your assessment';
        quickStartBtn.innerHTML = '<i class="fas fa-check"></i> Assessment Submitted';
      }
      
      // Update last result display
      const lastResult = userResults.sort((a, b) => new Date(b.date) - new Date(a.date))[0];
      if (lastLevelEl) lastLevelEl.textContent = lastResult.level;
      if (daysEl) {
        const daysSince = Math.floor((Date.now() - new Date(lastResult.date)) / (1000 * 60 * 60 * 24));
        daysEl.textContent = daysSince;
      }
    } else {
      // No assessment yet - ensure buttons are enabled
      if (startBtn) {
        startBtn.style.opacity = '';
        startBtn.style.cursor = 'pointer';
        startBtn.onclick = startAssessment;
        startBtn.innerHTML = `
          <i class="fas fa-play-circle"></i>
          <h4>Start Assessment</h4>
          <p>Take a new academic stress assessment</p>
        `;
      }
      
      if (quickStartBtn) {
        quickStartBtn.disabled = false;
        quickStartBtn.title = '';
        quickStartBtn.innerHTML = 'Get Assessed';
        quickStartBtn.onclick = () => showPage('dashboard');
      }
      
      if (lastLevelEl) lastLevelEl.textContent = '-';
      if (daysEl) daysEl.textContent = '-';
    }
    
  } catch (err) {
    console.error('Stats load error', err);
    // Fallback values
    const totalEl = document.getElementById('total-assessments');
    if (totalEl) totalEl.textContent = '0';
  }
}

// Utilities
function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  // Store theme preference
  localStorage.setItem("theme", next);
}

function loadTheme() {
  const saved = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", saved);
  const toggle = document.getElementById("theme-toggle");
  if (toggle) toggle.checked = saved === "dark";
}

function showModal(title, message, onConfirm) {
  const modal = document.getElementById("modal");
  if (!modal.querySelector("#modal-title")) {
    if (confirm(`${title}
${message}`)) {
      if (onConfirm) onConfirm();
    }
    return;
  }
  document.getElementById("modal-title").textContent = title;
  document.getElementById("modal-message").innerHTML = message;
  document.getElementById("modal").classList.add("active");
  const btn = document.getElementById("modal-confirm");
  btn.onclick = () => { closeModal(); if (onConfirm) onConfirm(); };
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.remove("active");
}

function showToast(message, type = "info", duration = 3000) {
  const container = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), duration);
}

// PDF Generation
function downloadPDFReport(resultId) {
  // In a DB-only system, this should ideally fetch the specific report from API
  // For this implementation, we rely on the result object passed from history
  showToast("Report generation requires active session data.", "warning");
}

function viewReportFromObj(result) {
  displayResults(result);
  showPage("results");
}

// Aggregate Analysis Functions
function computeAggregateAnalysis() {
    const overlay = document.getElementById('computation-overlay');
    const results = document.getElementById('aggregate-results');
    const computeBtn = document.getElementById('compute-aggregate-btn');
    
    // Show overlay and hide results
    overlay.style.display = 'flex';
    results.style.display = 'none';
    computeBtn.disabled = true;
    
    // Reset progress
    document.getElementById('computation-progress-fill').style.width = '0%';
    document.getElementById('computation-percentage').textContent = '0%';
    
    // Reset steps
    document.querySelectorAll('.step').forEach(step => {
        step.classList.remove('active');
        step.style.opacity = '0.5';
    });
    
    // Animate computation steps
    let progress = 0;
    let currentStep = 1;
    const steps = document.querySelectorAll('.step');
    
    const stepInterval = setInterval(() => {
        // Update progress bar
        progress += Math.random() * 8 + 4;
        if (progress >= 100) progress = 100;
        
        document.getElementById('computation-progress-fill').style.width = progress + '%';
        document.getElementById('computation-percentage').textContent = Math.round(progress) + '%';
        
        // Update active step
        if (progress >= currentStep * 25 && currentStep <= 4) {
            steps.forEach(s => s.classList.remove('active'));
            if (steps[currentStep - 1]) {
                steps[currentStep - 1].classList.add('active');
                steps[currentStep - 1].style.opacity = '1';
            }
            currentStep++;
        }
        
        if (progress >= 100) {
            clearInterval(stepInterval);
            // Fetch actual data after animation
            fetchAggregateData();
        }
    }, 200);
}

function fetchAggregateData() {
    fetch('/api/assessments/aggregate')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.success) {
                displayAggregateResults(data);
            } else {
                throw new Error('Failed to fetch aggregate data');
            }
        })
        .catch(err => {
            console.error('Aggregate fetch error:', err);
            showToast('Unable to load aggregate data. Please try again.', 'error');
            hideComputationOverlay();
        });
}

function displayAggregateResults(data) {
    const overlay = document.getElementById('computation-overlay');
    const results = document.getElementById('aggregate-results');
    const computeBtn = document.getElementById('compute-aggregate-btn');
    
    // Hide overlay and show results
    overlay.style.display = 'none';
    results.style.display = 'block';
    computeBtn.disabled = false;
    
    // Update summary cards
    document.getElementById('total-assessments-agg').textContent = data.totalAssessments || 0;
    document.getElementById('most-stressed-section').textContent = 
        data.mostChallengingSection || 'N/A';
    
    // Calculate and display average stress score
    const sectionAverages = data.sectionAverages || {};
    const avgValues = Object.values(sectionAverages).map(v => parseFloat(v));
    const overallAvg = avgValues.length > 0 
        ? (avgValues.reduce((a, b) => a + b, 0) / avgValues.length).toFixed(1)
        : 0;
    document.getElementById('avg-stress-score').textContent = overallAvg;
    
    // Generate section bars
    generateSectionBars(sectionAverages);
}

function generateSectionBars(sectionAverages) {
    const container = document.getElementById('section-bars-container');
    container.innerHTML = '';
    
    const sections = [
        'Workforce and Workload',
        'Skills and Task Management',
        'Facilities and Infrastructure',
        'Mental and Physical Health',
        'Organizational Culture and Leadership'
    ];
    
    // Calculate max value for scaling
    const values = Object.values(sectionAverages);
    const maxValue = Math.max(...values.map(v => parseFloat(v)), 20);
    
    sections.forEach(section => {
        const value = parseFloat(sectionAverages[section]) || 0;
        const percentage = (value / maxValue) * 100;
        const level = getStressLevel(value);
        
        const barItem = document.createElement('div');
        barItem.className = 'section-bar-item';
        barItem.innerHTML = `
            <div class="section-label">${getShortSectionName(section)}</div>
            <div class="section-bar-track">
                <div class="section-bar-fill ${level}" style="width: 0%" data-width="${percentage}%">
                    ${value.toFixed(1)}
                </div>
            </div>
            <div class="section-value">${value.toFixed(1)}/20</div>
        `;
        
        container.appendChild(barItem);
        
        // Animate bar fill after a slight delay
        setTimeout(() => {
            const fill = barItem.querySelector('.section-bar-fill');
            fill.style.width = fill.dataset.width;
        }, 200);
    });
}

function getShortSectionName(fullName) {
    const mapping = {
        'Workforce and Workload': 'Workforce',
        'Skills and Task Management': 'Skills',
        'Facilities and Infrastructure': 'Facilities',
        'Mental and Physical Health': 'Health',
        'Organizational Culture and Leadership': 'Culture'
    };
    return mapping[fullName] || fullName;
}

function getStressLevel(score) {
    if (score <= 4) return 'low';
    if (score <= 9) return 'moderate';
    if (score <= 12) return 'abnormal';
    if (score <= 15) return 'high';
    return 'high-risk';
}

function hideComputationOverlay() {
    const overlay = document.getElementById('computation-overlay');
    const computeBtn = document.getElementById('compute-aggregate-btn');
    overlay.style.display = 'none';
    computeBtn.disabled = false;
}

function hideAggregateResults() {
    const results = document.getElementById('aggregate-results');
    results.style.display = 'none';
}

function exportAggregateReport() {
    showToast('Report export feature coming soon', 'info');
    // Future: Implement PDF generation using jsPDF with aggregate data
}


// function to validate token from URL
async function validateInvitationToken() {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    // If participant token exists clear admin credentials immediately
    if (token) {
        localStorage.removeItem('adminToken');
        adminToken = null;
        isAdmin = false;
        currentUserRole = 'participant';
        console.log('Participant token detected - admin credentials cleared');
    }

    if (!token) {
        currentUserRole = 'participant';
        isTokenValidated = false;
        tokenValidationStatus = 'missing';
        applyRoleBasedUI();
        blockAssessmentAccess('A valid assessment token is required to proceed.');
        return;
    }

    // If token changed, reset session to ensure fresh start and clean history
    if (token !== currentInvitationToken) {
        localStorage.removeItem('stressDetectSessionId');
        currentInvitationToken = null;
    }

    currentInvitationToken = token;
    try {
        const response = await fetch(`/api/validate-token/${token}`);
        const data = await response.json();
        if (data.success) {
            currentUserRole = data.data.user_role;
            isTokenValidated = true;
            tokenValidationStatus = 'valid';
            // Generate new sessionId for this specific token session
            const newSessionId = 'sess_' + Math.random().toString(36).substr(2, 9);
            localStorage.setItem('stressDetectSessionId', newSessionId);
            currentUser.sessionId = newSessionId;
            applyRoleBasedUI();
            showToast('Assessment link validated', 'success');
        } else {
            isTokenValidated = false;
            tokenValidationStatus = data.message?.includes('already been used') ? 'used' : 'invalid';
            showTokenError(data.message);
        }
    } catch (err) {
        console.error('Token validation failed:', err);
        isTokenValidated = false;
        tokenValidationStatus = 'error';
        showToast('Could not validate assessment link', 'error');
        blockAssessmentAccess('Unable to verify your assessment link. Please check your connection.');
    }
}

function blockAssessmentAccess(message) {
    // Disable assessment start buttons
    const startBtns = document.querySelectorAll('[onclick="startAssessment()"], .btn-primary[onclick*="assessment"]');
    startBtns.forEach(btn => {
        btn.disabled = true;
        btn.style.opacity = '0.6';
        btn.style.cursor = 'not-allowed';
        btn.title = message;
    });
    
    // Hide assessment section if visible
    const assessmentSection = document.getElementById('assessment-section');
    if (assessmentSection) {
        assessmentSection.style.display = 'none';
    }
    
    // Show warning on dashboard if user tries to access
    if (currentPage === 'dashboard') {
        showToast(message, 'warning', 5000);
    }
}

function showTokenError(message) {
  const container = document.querySelector('.container');
  if (container) {
    container.innerHTML = `
      <div style="text-align: center; padding: 60px 20px;">
        <i class="fas fa-exclamation-triangle" style="font-size: 4rem; color: var(--danger-color); margin-bottom: 20px;"></i>
        <h2>Link Not Available</h2>
        <p style="color: var(--warning-color); margin: 20px 0;">${message}</p>
        <p style="font-size: 0.9rem; color: var(--danger-color); background-color: white; padding:.5em;">
          Each assessment link can only be used once for security and data integrity.
        </p>
        <button class="btn btn-primary" onclick="closeApp()" style="margin-top: 50px;">
          <i class="fas fa-sign-out-alt"></i> Exit Application
        </button>
      </div>
    `;
  }
}

function applyRoleBasedUI() {
  // Hide history and aggregate sections for participants
  const historyNav = document.querySelector('a[onclick="showPage(\'history\')"]');
  const historyPage = document.getElementById('history-page');
  const aggregateSection = document.getElementById('aggregate-section');
  
  if (currentUserRole === 'participant') {
    if (historyNav) historyNav.style.display = 'none';
    if (historyPage) historyPage.style.display = 'none';
    if (aggregateSection) aggregateSection.style.display = 'none';
    
    // Also hide history-related quick actions
    const historyAction = document.querySelector('.action-card[onclick="showPage(\'history\')"]');
    if (historyAction) historyAction.style.display = 'none';
    
  } else if (currentUserRole === 'admin') {
    // Admin sees everything - no changes needed
    if (historyNav) historyNav.style.display = '';
    if (historyPage) historyPage.style.display = '';
    if (aggregateSection) aggregateSection.style.display = '';
  }
}

// Check if user has already completed an assessment for this session
// Check if user has already completed an assessment for THIS TOKEN
async function hasCompletedAssessment() {
  // If no token is present, fall back to sessionId check (legacy support for local testing)
  if (!currentInvitationToken) {
    if (!currentUser || !currentUser.sessionId) return false;
    try {
      const response = await fetch(`/api/assessments/user/${currentUser.sessionId}`);
      const data = await response.json();
      return data.success && data.data && data.data.length > 0;
    } catch (err) {
      console.error('Error checking assessment status:', err);
      return false;
    }
  }
  
  // Primary check: Is this specific token marked as used?
  try {
    const response = await fetch(`/api/validate-token/${currentInvitationToken}`);
    
    // 410 Gone means the token is already used
    if (response.status === 410) {
      return true;
    }
    
    // 200 OK means the token is valid and unused
    if (response.ok) {
      return false;
    }
    
    // Any other error, assume not completed to allow retry
    return false;
  } catch (err) {
    console.error('Error checking token completion:', err);
    return false;
  }
}

//global variables section
let isAdmin = false;
let adminToken = null;

async function checkAdminAccess() {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('admin_token');
    const participantToken = urlParams.get('token');

    // If accessing via participant link do not restore admin from storage
    if (participantToken) {
        localStorage.removeItem('adminToken');
        adminToken = null;
        isAdmin = false;
        currentUserRole = 'participant';
        console.log('Participant link detected - admin access skipped');
        return;
    }

    if (token) {
        const newToken = token.trim();
        const storedToken = localStorage.getItem('adminToken');

        // Clear storage if the URL token differs from what is saved
        if (newToken !== storedToken) {
            localStorage.removeItem('adminToken');
            adminToken = null;
            isAdmin = false;
            currentUserRole = 'participant';
        }

        // Hold token in memory only - do NOT save to localStorage yet
        adminToken = newToken;

        // Clean URL (remove token from address bar)
        window.history.replaceState({}, document.title, window.location.pathname);
        console.log('Admin token captured from URL, validating...');
    } else {
        // Only check localStorage for existing valid session
        adminToken = localStorage.getItem('adminToken');
        if (adminToken) {
            adminToken = adminToken.trim();
            console.log('Admin token retrieved from storage');
        }
    }

    if (adminToken) {
        try {
            // Test against a PROTECTED endpoint that uses validateAdminAccess
            const response = await fetch('/api/assessments/all?limit=1', {
                headers: { 'x-admin-token': adminToken }
            });

            if (response.ok) {
                // ONLY save to localStorage after successful validation
                localStorage.setItem('adminToken', adminToken);
                isAdmin = true;
                currentUserRole = 'admin';
                applyRoleBasedUI();
                applyAdminUI();
                showToast('Admin mode enabled', 'success');
                console.log('Admin access confirmed');
                return;
            } else {
                const errorData = await response.json().catch(() => ({}));
                console.warn('Admin token rejected:', response.status, errorData.message);
                showToast('Admin access denied - check token', 'warning');
            }
        } catch (err) {
            console.error('Admin check failed:', err);
            showToast('Admin verification failed - check connection', 'error');
        }

        // Clear invalid or unverified token from storage and memory
        localStorage.removeItem('adminToken');
        adminToken = null;
        isAdmin = false;
        currentUserRole = 'participant';
        applyRoleBasedUI();
    }

    // If not admin, check for participant invitation token
    if (!isAdmin) {
        validateInvitationToken();
    }
}

// Apply admin-specific UI changes
function applyAdminUI() {
  // Sync the role variable to ensure applyRoleBasedUI works correctly
  currentUserRole = 'admin';
  
  // Apply role-based UI first to show all elements
  applyRoleBasedUI();
  
  // Then add admin-specific controls
  const historyHeader = document.querySelector('.history-header');
  if (historyHeader && !document.getElementById('admin-token-panel')) {
    const adminPanel = document.createElement('div');
    adminPanel.id = 'admin-token-panel';
    adminPanel.className = 'admin-panel';
    adminPanel.innerHTML = `
      <button class="btn btn-primary" onclick="showTokenGenerator()">
        <i class="fas fa-link"></i> Generate Assessment Links
      </button>
      <button class="btn btn-secondary" onclick="showTokenList()">
        <i class="fas fa-list"></i> Manage Links
      </button>
    `;
    historyHeader.appendChild(adminPanel);
  }
  
  // Ensure aggregate section is visible
  const aggregateSection = document.getElementById('aggregate-section');
  if (aggregateSection) {
    aggregateSection.style.display = 'block';
  }
}

// Show token generator modal
function showTokenGenerator() {
  const modal = document.getElementById('modal');
  modal.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <h3><i class="fas fa-link"></i> Generate Assessment Links</h3>
        <button class="modal-close" onclick="closeModal()">&times;</button>
      </div>
      <div class="modal-body">
        <div class="form-group">
          <label>Link Type</label>
          <select id="token-role" class="form-select">
            <option value="participant">Participant (one-time use)</option>
            <option value="admin">Admin (full access)</option>
          </select>
        </div>
        <div class="form-group">
          <label>Number of Links</label>
          <input type="number" id="token-count" value="1" min="1" max="50">
        </div>
        <div class="form-group">
          <label>Expiration</label>
          <select id="token-expiry">
            <option value="24">24 hours</option>
            <option value="168" selected>7 days</option>
            <option value="720">30 days</option>
            <option value="">Never</option>
          </select>
        </div>
        <div id="generated-links" style="display:none; margin-top:20px;">
          <p><strong>Generated Links:</strong></p>
          <div id="links-list" style="max-height:200px; overflow-y:auto; background:var(--surface-color); padding:10px; border-radius:6px; margin:10px 0;"></div>
          <button class="btn btn-secondary btn-small" onclick="copyAllLinks()">
            <i class="fas fa-copy"></i> Copy All
          </button>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
        <button class="btn btn-primary" onclick="generateTokens()">
          <i class="fas fa-plus"></i> Generate
        </button>
      </div>
    </div>
  `;
  modal.classList.add('active');
}

// Generate tokens via API
async function generateTokens() {
  const role = document.getElementById('token-role').value;
  const count = parseInt(document.getElementById('token-count').value) || 1;
  const expires_hours = document.getElementById('token-expiry').value;
  
  const btn = document.querySelector('#modal .btn-primary');
  btn.disabled = true;
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating...';
  
  try {
    const response = await fetch('/api/admin/generate-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-admin-token': adminToken
      },
      body: JSON.stringify({
        role,
        count,
        expires_hours: expires_hours ? parseInt(expires_hours) : null
      })
    });
    
    const data = await response.json();
    
    if (data.success) {
      const linksList = document.getElementById('links-list');
      linksList.innerHTML = data.data.map(item => `
        <div style="margin:8px 0; padding:8px; background:var(--background-color); border-radius:4px; display:flex; justify-content:space-between; align-items:center; gap:10px;">
          <span style="font-size:0.85rem; word-break:break-all; flex:1;">${item.link}</span>
          <button class="btn btn-small btn-secondary" onclick="copyToClipboard('${item.link}')">
            <i class="fas fa-copy"></i>
          </button>
        </div>
      `).join('');
      
      document.getElementById('generated-links').style.display = 'block';
      showToast(`${count} link(s) generated successfully`, 'success');
    } else {
      showToast(data.message || 'Generation failed', 'error');
    }
  } catch (err) {
    console.error('Generation error:', err);
    showToast('Network error - check connection', 'error');
  } finally {
    btn.disabled = false;
    btn.innerHTML = '<i class="fas fa-plus"></i> Generate';
  }
}

// Copy single link to clipboard
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast('Link copied to clipboard', 'success');
  }).catch(() => {
    // Fallback for older browsers
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showToast('Link copied to clipboard', 'success');
  });
}

// Copy all generated links
function copyAllLinks() {
  const links = document.querySelectorAll('#links-list span');
  const allLinks = Array.from(links).map(el => el.textContent).join('\n');
  copyToClipboard(allLinks);
}

// Show token management list
async function showTokenList() {
  const modal = document.getElementById('modal');
  modal.innerHTML = `
    <div class="modal-content" style="max-width:700px; max-height:80vh;">
      <div class="modal-header">
        <h3><i class="fas fa-list"></i> Manage Assessment Links</h3>
        <button class="modal-close" onclick="closeModal()">&times;</button>
      </div>
      <div class="modal-body" id="token-list-body" style="max-height:60vh; overflow-y:auto;">
        <p style="text-align:center; color:var(--text-secondary);">Loading tokens...</p>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" onclick="closeModal()">Close</button>
        <button class="btn btn-primary" onclick="showTokenGenerator()">
          <i class="fas fa-plus"></i> New Link
        </button>
      </div>
    </div>
  `;
  modal.classList.add('active');
  
  await loadTokenList();
}

// Load and display token list
async function loadTokenList() {
  const container = document.getElementById('token-list-body');
  
  try {
    const response = await fetch('/api/admin/tokens?include_used=false', {
      headers: { 'x-admin-token': adminToken }
    });
    const data = await response.json();
    
    if (!data.success || data.data.length === 0) {
      container.innerHTML = '<p style="text-align:center;">No active tokens found. Generate a new link to get started.</p>';
      return;
    }
    
    container.innerHTML = `
      <table style="width:100%; border-collapse:collapse; font-size:0.9rem;">
        <thead>
          <tr style="border-bottom:2px solid var(--border-color); text-align:left;">
            <th style="padding:10px;">Role</th>
            <th style="padding:10px;">Created</th>
            <th style="padding:10px;">Expires</th>
            <th style="padding:10px;">Actions</th>
          </tr>
        </thead>
        <tbody>
          ${data.data.map(token => `
            <tr style="border-bottom:1px solid var(--border-color);">
              <td style="padding:10px;">
                <span class="badge ${token.role === 'admin' ? 'warning' : 'primary'}">
                  ${token.role}
                </span>
              </td>
              <td style="padding:10px;">${new Date(token.created_at).toLocaleDateString()}</td>
              <td style="padding:10px;">
                ${token.expires_at ? new Date(token.expires_at).toLocaleDateString() : 'Never'}
              </td>
              <td style="padding:10px;">
                <button class="btn btn-small btn-secondary" onclick="copyToClipboard('${token.link}')" title="Copy link">
                  <i class="fas fa-copy"></i>
                </button>
                <button class="btn btn-small btn-danger" onclick="revokeToken('${token.token}')" title="Revoke">
                  <i class="fas fa-trash"></i>
                </button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  } catch (err) {
    console.error('Load tokens error:', err);
    container.innerHTML = '<p style="text-align:center; color:var(--danger-color);">Failed to load tokens</p>';
  }
}

// Revoke a token
async function revokeToken(token) {
  if (!confirm('Revoke this link? It will no longer work.')) return;
  
  try {
    const response = await fetch(`/api/admin/tokens/${token}`, {
      method: 'DELETE',
      headers: { 'x-admin-token': adminToken }
    });
    const data = await response.json();
    
    if (data.success) {
      showToast('Link revoked', 'success');
      await loadTokenList();
    } else {
      showToast(data.message || 'Revocation failed', 'error');
    }
  } catch (err) {
    console.error('Revoke error:', err);
    showToast('Network error', 'error');
  }
}



// Updated admin access validator - checks both master key AND generated tokens
const validateAdminAccess = async (req, res, next) => {
  const adminToken = req.headers['x-admin-token'] || req.query.admin_token;
  const masterKey = process.env.ADMIN_SECRET_KEY;
  
  console.log('[AdminCheck] Path:', req.path);
  console.log('[AdminCheck] Token from header:', req.headers['x-admin-token'] ? 'present' : 'missing');
  console.log('[AdminCheck] Token from query:', req.query.admin_token ? 'present' : 'missing');
  console.log('[AdminCheck] Token value (first 10):', adminToken ? adminToken.substring(0, 10) + '...' : 'none');
  
  if (!adminToken) {
    console.warn('[AdminCheck] Rejected: no token provided');
    return res.status(403).json({ success: false, message: 'Unauthorized' });
  }
  
  if (masterKey && adminToken === masterKey) {
    console.log('[AdminCheck] Granted: master key match');
    return next();
  }
  
  try {
    const tokenCheck = await pool.query(
      `SELECT id, token, user_role, is_used, expires_at
       FROM invitation_tokens
       WHERE token = $1`,
      [adminToken]
    );
    
    console.log('[AdminCheck] DB query result count:', tokenCheck.rows.length);
    if (tokenCheck.rows.length > 0) {
      const row = tokenCheck.rows[0];
      console.log('[AdminCheck] Found token - role:', row.user_role, 'is_used:', row.is_used, 'expires_at:', row.expires_at);
      
      if (row.user_role !== 'admin') {
        console.warn('[AdminCheck] Rejected: role is not admin');
        return res.status(403).json({ success: false, message: 'Unauthorized' });
      }
      if (row.is_used) {
        console.warn('[AdminCheck] Rejected: token already used');
        return res.status(403).json({ success: false, message: 'Unauthorized' });
      }
      if (row.expires_at && new Date(row.expires_at) < new Date()) {
        console.warn('[AdminCheck] Rejected: token expired');
        return res.status(403).json({ success: false, message: 'Unauthorized' });
      }
      
      console.log('[AdminCheck] Granted: valid generated admin token');
      return next();
    }
    console.warn('[AdminCheck] Rejected: token not found in database');
  } catch (err) {
    console.error('[AdminCheck] Database error:', err.message);
  }
  
  return res.status(403).json({ success: false, message: 'Unauthorized' });
};

function closeApp() {
  localStorage.clear();
  sessionStorage.clear();
    window.close()
  window.location.href = "https://www.google.com";
}