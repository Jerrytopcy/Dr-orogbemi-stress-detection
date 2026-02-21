// Academic Stress Survey Questions 
// Academic Stress Survey Questions for Computer Science Faculty - NEW STRUCTURE
// Total questions: 50, distributed across 5 sections of 10 questions each.
// Scoring: Never=0, Fairly often=1, Very often=2 (per question)
// Section Max Score: 10 questions * 2 points = 20 points
// Total Max Score: 5 sections * 20 points = 100 points
const academicStressQuestions = [
  // === SECTION 1: Workforce and Workload ===
  {
    id: 1,
    question: "I feel that the number of staff in my department is insufficient for the workload.",
    category: "Workforce and Workload",
    options: [
      { value: 0, text: "Never" },
      { value: 1, text: "Fairly often" },
      { value: 2, text: "Very often" }
    ]
  },
  {
    id: 2,
    question: "I frequently handle more responsibilities than I can comfortably manage.",
    category: "Workforce and Workload",
    options: [
      { value: 0, text: "Never" },
      { value: 1, text: "Fairly often" },
      { value: 2, text: "Very often" }
    ]
  },
  {
    id: 3,
    question: "I often work beyond official hours to complete tasks.",
    category: "Workforce and Workload",
    options: [
      { value: 0, text: "Never" },
      { value: 1, text: "Fairly often" },
      { value: 2, text: "Very often" }
    ]
  },
  {
    id: 4,
    question: "I feel pressured to meet unrealistic deadlines.",
    category: "Workforce and Workload",
    options: [
      { value: 0, text: "Never" },
      { value: 1, text: "Fairly often" },
      { value: 2, text: "Very often" }
    ]
  },
  {
    id: 5,
    question: "I experience work overload during most weeks.",
    category: "Workforce and Workload",
    options: [
      { value: 0, text: "Never" },
      { value: 1, text: "Fairly often" },
      { value: 2, text: "Very often" }
    ]
  },
  {
    id: 6,
    question: "I struggle to balance teaching, research and administrative duties.",
    category: "Workforce and Workload",
    options: [
      { value: 0, text: "Never" },
      { value: 1, text: "Fairly often" },
      { value: 2, text: "Very often" }
    ]
  },
  {
    id: 7,
    question: "I feel that my workload affects my personal life.",
    category: "Workforce and Workload",
    options: [
      { value: 0, text: "Never" },
      { value: 1, text: "Fairly often" },
      { value: 2, text: "Very often" }
    ]
  },
  {
    id: 8,
    question: "I am assigned urgent tasks without adequate notice.",
    category: "Workforce and Workload",
    options: [
      { value: 0, text: "Never" },
      { value: 1, text: "Fairly often" },
      { value: 2, text: "Very often" }
    ]
  },
  {
    id: 9,
    question: "I feel that task distribution in my department is unfair.",
    category: "Workforce and Workload",
    options: [
      { value: 0, text: "Never" },
      { value: 1, text: "Fairly often" },
      { value: 2, text: "Very often" }
    ]
  },
  {
    id: 10,
    question: "I feel exhausted due to the volume of work assigned to me.",
    category: "Workforce and Workload",
    options: [
      { value: 0, text: "Never" },
      { value: 1, text: "Fairly often" },
      { value: 2, text: "Very often" }
    ]
  },

  // === SECTION 2: Skills and Task Management ===
  {
    id: 11,
    question: "I feel adequately prepared for the tasks assigned to me.", // Reverse scored
    category: "Skills and Task Management",
    options: [
      { value: 2, text: "Never" },
      { value: 1, text: "Fairly often" },
      { value: 0, text: "Very often" }
    ]
  },
  {
    id: 12,
    question: "I experience stress when handling unfamiliar responsibilities.",
    category: "Skills and Task Management",
    options: [
      { value: 0, text: "Never" },
      { value: 1, text: "Fairly often" },
      { value: 2, text: "Very often" }
    ]
  },
  {
    id: 13,
    question: "I receive unclear instructions regarding assigned duties.",
    category: "Skills and Task Management",
    options: [
      { value: 0, text: "Never" },
      { value: 1, text: "Fairly often" },
      { value: 2, text: "Very often" }
    ]
  },
  {
    id: 14,
    question: "I am expected to perform tasks outside my area of expertise.",
    category: "Skills and Task Management",
    options: [
      { value: 0, text: "Never" },
      { value: 1, text: "Fairly often" },
      { value: 2, text: "Very often" }
    ]
  },
  {
    id: 15,
    question: "I lack sufficient professional development opportunities.",
    category: "Skills and Task Management",
    options: [
      { value: 0, text: "Never" },
      { value: 1, text: "Fairly often" },
      { value: 2, text: "Very often" }
    ]
  },
  {
    id: 16,
    question: "I feel uncertain about performance expectations.",
    category: "Skills and Task Management",
    options: [
      { value: 0, text: "Never" },
      { value: 1, text: "Fairly often" },
      { value: 2, text: "Very often" }
    ]
  },
  {
    id: 17,
    question: "I experience difficulty prioritizing assigned duties.",
    category: "Skills and Task Management",
    options: [
      { value: 0, text: "Never" },
      { value: 1, text: "Fairly often" },
      { value: 2, text: "Very often" }
    ]
  },
  {
    id: 18,
    question: "I receive conflicting instructions from supervisors.",
    category: "Skills and Task Management",
    options: [
      { value: 0, text: "Never" },
      { value: 1, text: "Fairly often" },
      { value: 2, text: "Very often" }
    ]
  },
  {
    id: 19,
    question: "I feel unsupported when facing technical challenges.",
    category: "Skills and Task Management",
    options: [
      { value: 0, text: "Never" },
      { value: 1, text: "Fairly often" },
      { value: 2, text: "Very often" }
    ]
  },
  {
    id: 20,
    question: "I worry about making mistakes due to insufficient guidance.",
    category: "Skills and Task Management",
    options: [
      { value: 0, text: "Never" },
      { value: 1, text: "Fairly often" },
      { value: 2, text: "Very often" }
    ]
  },

  // === SECTION 3: Facilities and Infrastructure ===
  {
    id: 21,
    question: "Inadequate office space affects my productivity.",
    category: "Facilities and Infrastructure",
    options: [
      { value: 0, text: "Never" },
      { value: 1, text: "Fairly often" },
      { value: 2, text: "Very often" }
    ]
  },
  {
    id: 22,
    question: "Lack of functional equipment increases my stress.",
    category: "Facilities and Infrastructure",
    options: [
      { value: 0, text: "Never" },
      { value: 1, text: "Fairly often" },
      { value: 2, text: "Very often" }
    ]
  },
  {
    id: 23,
    question: "Poor internet connectivity disrupts my work.",
    category: "Facilities and Infrastructure",
    options: [
      { value: 0, text: "Never" },
      { value: 1, text: "Fairly often" },
      { value: 2, text: "Very often" }
    ]
  },
  {
    id: 24,
    question: "I experience delays due to insufficient laboratory or teaching facilities.",
    category: "Facilities and Infrastructure",
    options: [
      { value: 0, text: "Never" },
      { value: 1, text: "Fairly often" },
      { value: 2, text: "Very often" }
    ]
  },
  {
    id: 25,
    question: "Administrative processes slow down my work.",
    category: "Facilities and Infrastructure",
    options: [
      { value: 0, text: "Never" },
      { value: 1, text: "Fairly often" },
      { value: 2, text: "Very often" }
    ]
  },
  {
    id: 26,
    question: "I lack access to necessary teaching materials.",
    category: "Facilities and Infrastructure",
    options: [
      { value: 0, text: "Never" },
      { value: 1, text: "Fairly often" },
      { value: 2, text: "Very often" }
    ]
  },
  {
    id: 27,
    question: "I experience stress due to unreliable power supply.",
    category: "Facilities and Infrastructure",
    options: [
      { value: 0, text: "Never" },
      { value: 1, text: "Fairly often" },
      { value: 2, text: "Very often" }
    ]
  },
  {
    id: 28,
    question: "I feel that institutional systems are inefficient.",
    category: "Facilities and Infrastructure",
    options: [
      { value: 0, text: "Never" },
      { value: 1, text: "Fairly often" },
      { value: 2, text: "Very often" }
    ]
  },
  {
    id: 29,
    question: "I struggle with outdated work tools or software.",
    category: "Facilities and Infrastructure",
    options: [
      { value: 0, text: "Never" },
      { value: 1, text: "Fairly often" },
      { value: 2, text: "Very often" }
    ]
  },
  {
    id: 30,
    question: "Infrastructure limitations affect my job performance.",
    category: "Facilities and Infrastructure",
    options: [
      { value: 0, text: "Never" },
      { value: 1, text: "Fairly often" },
      { value: 2, text: "Very often" }
    ]
  },

  // === SECTION 4: Mental and Physical Health ===
  {
    id: 31,
    question: "I feel emotionally exhausted because of my job.",
    category: "Mental and Physical Health",
    options: [
      { value: 0, text: "Never" },
      { value: 1, text: "Fairly often" },
      { value: 2, text: "Very often" }
    ]
  },
  {
    id: 32,
    question: "I feel anxious about work-related responsibilities.",
    category: "Mental and Physical Health",
    options: [
      { value: 0, text: "Never" },
      { value: 1, text: "Fairly often" },
      { value: 2, text: "Very often" }
    ]
  },
  {
    id: 33,
    question: "I have difficulty sleeping due to work stress.",
    category: "Mental and Physical Health",
    options: [
      { value: 0, text: "Never" },
      { value: 1, text: "Fairly often" },
      { value: 2, text: "Very often" }
    ]
  },
  {
    id: 34,
    question: "I experience frequent headaches related to work.",
    category: "Mental and Physical Health",
    options: [
      { value: 0, text: "Never" },
      { value: 1, text: "Fairly often" },
      { value: 2, text: "Very often" }
    ]
  },
  {
    id: 35,
    question: "I feel mentally drained at the end of most days.",
    category: "Mental and Physical Health",
    options: [
      { value: 0, text: "Never" },
      { value: 1, text: "Fairly often" },
      { value: 2, text: "Very often" }
    ]
  },
  {
    id: 36,
    question: "I experience physical fatigue because of my workload.",
    category: "Mental and Physical Health",
    options: [
      { value: 0, text: "Never" },
      { value: 1, text: "Fairly often" },
      { value: 2, text: "Very often" }
    ]
  },
  {
    id: 37,
    question: "I have difficulty concentrating due to stress.",
    category: "Mental and Physical Health",
    options: [
      { value: 0, text: "Never" },
      { value: 1, text: "Fairly often" },
      { value: 2, text: "Very often" }
    ]
  },
  {
    id: 38,
    question: "I feel irritable at work.",
    category: "Mental and Physical Health",
    options: [
      { value: 0, text: "Never" },
      { value: 1, text: "Fairly often" },
      { value: 2, text: "Very often" }
    ]
  },
  {
    id: 39,
    question: "I feel overwhelmed by my responsibilities.",
    category: "Mental and Physical Health",
    options: [
      { value: 0, text: "Never" },
      { value: 1, text: "Fairly often" },
      { value: 2, text: "Very often" }
    ]
  },
  {
    id: 40,
    question: "My job negatively affects my overall wellbeing.",
    category: "Mental and Physical Health",
    options: [
      { value: 0, text: "Never" },
      { value: 1, text: "Fairly often" },
      { value: 2, text: "Very often" }
    ]
  },

  // === SECTION 5: Organizational Culture and Leadership ===
  {
    id: 41,
    question: "Leadership communicates expectations clearly.", // Reverse scored
    category: "Organizational Culture and Leadership",
    options: [
      { value: 2, text: "Never" },
      { value: 1, text: "Fairly often" },
      { value: 0, text: "Very often" }
    ]
  },
  {
    id: 42,
    question: "I feel supported by management.", // Reverse scored
    category: "Organizational Culture and Leadership",
    options: [
      { value: 2, text: "Never" },
      { value: 1, text: "Fairly often" },
      { value: 0, text: "Very often" }
    ]
  },
  {
    id: 43,
    question: "I feel valued for my contributions.", // Reverse scored
    category: "Organizational Culture and Leadership",
    options: [
      { value: 2, text: "Never" },
      { value: 1, text: "Fairly often" },
      { value: 0, text: "Very often" }
    ]
  },
  {
    id: 44,
    question: "I fear negative consequences for expressing concerns.",
    category: "Organizational Culture and Leadership",
    options: [
      { value: 0, text: "Never" },
      { value: 1, text: "Fairly often" },
      { value: 2, text: "Very often" }
    ]
  },
  {
    id: 45,
    question: "I feel excluded from important decisions.",
    category: "Organizational Culture and Leadership",
    options: [
      { value: 0, text: "Never" },
      { value: 1, text: "Fairly often" },
      { value: 2, text: "Very often" }
    ]
  },
  {
    id: 46,
    question: "I experience stress due to poor communication from leadership.",
    category: "Organizational Culture and Leadership",
    options: [
      { value: 0, text: "Never" },
      { value: 1, text: "Fairly often" },
      { value: 2, text: "Very often" }
    ]
  },
  {
    id: 47,
    question: "I feel that policies are inconsistently applied.",
    category: "Organizational Culture and Leadership",
    options: [
      { value: 0, text: "Never" },
      { value: 1, text: "Fairly often" },
      { value: 2, text: "Very often" }
    ]
  },
  {
    id: 48,
    question: "I feel that leadership decisions increase staff stress.",
    category: "Organizational Culture and Leadership",
    options: [
      { value: 0, text: "Never" },
      { value: 1, text: "Fairly often" },
      { value: 2, text: "Very often" }
    ]
  },
  {
    id: 49,
    question: "I lack trust in institutional leadership.",
    category: "Organizational Culture and Leadership",
    options: [
      { value: 0, text: "Never" },
      { value: 1, text: "Fairly often" },
      { value: 2, text: "Very often" }
    ]
  },
  {
    id: 50,
    question: "I feel that the work environment lacks transparency.",
    category: "Organizational Culture and Leadership",
    options: [
      { value: 0, text: "Never" },
      { value: 1, text: "Fairly often" },
      { value: 2, text: "Very often" }
    ]
  }
];


// Note: The following global variables and functions remain unchanged from the previous example
// as they rely on the score being calculated from the question values and stored/displayed accordingly.
// Global variables
let currentUser = null
let currentPage = "home"
// Global variables for portable assessment
let currentQuestionIndex = 0
let assessmentAnswers = {}
let assessmentInProgress = false
let stressTrendChart = null
let stressDistributionChart = null
let monthlyOverviewChart = null

// Function declaration for showPage
function showPage(pageId) {
    // Show loading for certain pages
    if (["dashboard", "history", "results"].includes(pageId) && currentUser) {
        showLoadingScreen(`Loading ${pageId}...`)
        setTimeout(() => {
            showPageContent(pageId)
        }, 800)
    } else {
        showPageContent(pageId)
    }
}

function showPageContent(pageId) {
    const pages = document.querySelectorAll(".page")
    pages.forEach((page) => {
        page.style.display = page.id === pageId + "-page" ? "block" : "none"
    })
    // Update current page
    currentPage = pageId
    // Load page-specific data
    switch (pageId) {
        case "dashboard":
            if (currentUser) {
                loadUserData()
                loadDashboardStats()
                setTimeout(() => {
                    updateCharts()
                }, 100)
            }
            break
        case "history":
            if (currentUser) {
                loadHistory()
            }
            break
        case "settings":
            if (currentUser) {
                loadUserData()
            }
            break
    }
    // Close mobile menu
    document.getElementById("nav-menu").classList.remove("active")
    // Scroll to top
    window.scrollTo(0, 0)
}

// Loading screen functionality
function showLoadingScreen(text = "Loading...") {
    const loadingScreen = document.getElementById("loading-screen")
    const loadingText = document.getElementById("loading-text")
    const loadingBar = document.getElementById("loading-bar")
    if (!loadingScreen) return
    loadingText.textContent = text
    loadingScreen.classList.remove("hidden")
    // Simulate loading progress
    let progress = 0
    const interval = setInterval(() => {
        progress += Math.random() * 20 + 10 // Faster progress
        if (progress >= 100) {
            progress = 100
            clearInterval(interval)
            setTimeout(() => {
                hideLoadingScreen()
            }, 300) // Shorter delay
        }
        loadingBar.style.width = progress + "%"
    }, 50) // Faster updates
}

function hideLoadingScreen() {
    const loadingScreen = document.getElementById("loading-screen")
    if (loadingScreen) {
        loadingScreen.classList.add("hidden")
    }
}

// Initialize app with loading screen
document.addEventListener("DOMContentLoaded", () => {
    showLoadingScreen("Initializing StressDetect System...")
    setTimeout(() => {
        initializeApp()
        setupEventListeners()
        loadTheme()
        checkAuthState()
        setTimeout(() => {
            initializeCharts()
            hideLoadingScreen() // Ensure loading screen is hidden
        }, 500)
    }, 1500) // Reduced time
})

function initializeApp() {
    // Check if user is logged in
    const session = sessionStorage.getItem("currentUser")
    if (session) {
        currentUser = JSON.parse(session)
        updateAuthState(true)
        showPage("dashboard")
    } else {
        updateAuthState(false)
        showPage("home")
    }
    // Load survey questions
    //loadSurveyQuestions()
    // Load user data if logged in
    if (currentUser) {
        loadUserData()
        loadDashboardStats()
    }
}

function setupEventListeners() {
    // Navigation toggle
    document.getElementById("nav-toggle").addEventListener("click", () => {
        document.getElementById("nav-menu").classList.toggle("active")
    })
    // Forms
    document.getElementById("login-form").addEventListener("submit", handleLogin)
    document.getElementById("signup-form").addEventListener("submit", handleSignup)
    document.getElementById("forgot-password-form").addEventListener("submit", handleForgotPassword)
    document.getElementById("reset-password-form").addEventListener("submit", handleResetPassword)
    //document.getElementById("stress-survey").addEventListener("submit", handleSurveySubmit)
    // Avatar uploads
    document.getElementById("signup-avatar").addEventListener("change", handleAvatarPreview)
    document.getElementById("change-avatar").addEventListener("change", handleAvatarChange)
    // Theme toggle
    document.getElementById("theme-toggle").addEventListener("change", toggleTheme)
    // Survey progress tracking
    document.addEventListener("change", (e) => {
        if (e.target.name && e.target.name.startsWith("question-")) {
            updateSurveyProgress()
        }
    })
    // Assessment navigation
    document.getElementById("start-assessment-btn").addEventListener("click", startAssessment)
    document.getElementById("prev-btn").addEventListener("click", previousQuestion)
    document.getElementById("next-btn").addEventListener("click", nextQuestion)
    document.getElementById("submit-btn").addEventListener("click", submitAssessment)
}

// Authentication functions
function handleLogin(e) {
    e.preventDefault()
    const email = document.getElementById("login-email").value
    const password = document.getElementById("login-password").value
    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]")
    const user = users.find((u) => u.email === email && u.password === btoa(password))
    if (user) {
        currentUser = user
        sessionStorage.setItem("currentUser", JSON.stringify(user))
        updateAuthState(true)
        showToast("Login successful!", "success")
        showPage("dashboard")
        loadUserData()
        loadDashboardStats()
    } else {
        showToast("Invalid email or password", "error")
    }
}

function handleSignup(e) {
    e.preventDefault()
    const name = document.getElementById("signup-name").value
    const email = document.getElementById("signup-email").value
    const password = document.getElementById("signup-password").value
    const confirmPassword = document.getElementById("signup-confirm-password").value
    const avatarFile = document.getElementById("signup-avatar").files[0]
    // Validation
    if (password !== confirmPassword) {
        showToast("Passwords do not match", "error")
        return
    }
    if (password.length < 6) {
        showToast("Password must be at least 6 characters", "error")
        return
    }
    // Check if email already exists
    const users = JSON.parse(localStorage.getItem("users") || "[]")
    if (users.find((u) => u.email === email)) {
        showToast("Email already exists", "error")
        return
    }
    // Create new user
    const newUser = {
        id: Date.now(),
        name: name,
        email: email,
        password: btoa(password),
        avatar: null,
        createdAt: new Date().toISOString(),
    }
    // Handle avatar
    if (avatarFile) {
        const reader = new FileReader()
        reader.onload = (e) => {
            newUser.avatar = e.target.result
            saveUser(newUser)
        }
        reader.readAsDataURL(avatarFile)
    } else {
        saveUser(newUser)
    }
    function saveUser(user) {
        users.push(user)
        localStorage.setItem("users", JSON.stringify(users))
        currentUser = user
        sessionStorage.setItem("currentUser", JSON.stringify(user))
        updateAuthState(true)
        showToast("Account created successfully!", "success")
        showPage("dashboard")
        loadUserData()
        loadDashboardStats()
    }
}

function handleForgotPassword(e) {
    e.preventDefault()
    const email = document.getElementById("forgot-email").value
    // Check if email exists
    const users = JSON.parse(localStorage.getItem("users") || "[]")
    const user = users.find((u) => u.email === email)
    if (user) {
        // Store reset token
        const resetToken = Date.now().toString()
        localStorage.setItem(
            "resetToken",
            JSON.stringify({
                email: email,
                token: resetToken,
                expires: Date.now() + 3600000, // 1 hour
            }),
        )
        showToast("Password reset link sent! (Check your browser storage)", "success")
        showPage("reset-password")
    } else {
        showToast("Email not found", "error")
    }
}

function handleResetPassword(e) {
    e.preventDefault()
    const newPassword = document.getElementById("new-password").value
    const confirmPassword = document.getElementById("confirm-new-password").value
    if (newPassword !== confirmPassword) {
        showToast("Passwords do not match", "error")
        return
    }
    if (newPassword.length < 6) {
        showToast("Password must be at least 6 characters", "error")
        return
    }
    // Check reset token
    const resetData = JSON.parse(localStorage.getItem("resetToken") || "null")
    if (!resetData || Date.now() > resetData.expires) {
        showToast("Reset token expired", "error")
        return
    }
    // Update password
    const users = JSON.parse(localStorage.getItem("users") || "[]")
    const userIndex = users.findIndex((u) => u.email === resetData.email)
    if (userIndex !== -1) {
        users[userIndex].password = btoa(newPassword)
        localStorage.setItem("users", JSON.stringify(users))
        localStorage.removeItem("resetToken")
        showToast("Password updated successfully!", "success")
        showPage("login")
    } else {
        showToast("User not found", "error")
    }
}

function logout() {
    showModal("Confirm Logout", "Are you sure you want to logout?", () => {
        currentUser = null
        sessionStorage.removeItem("currentUser")
        updateAuthState(false)
        showToast("Logged out successfully", "success")
        showPage("home")
    })
}

function updateAuthState(isLoggedIn) {
    const authRequired = document.querySelectorAll(".auth-required")
    const guestOnly = document.querySelectorAll(".guest-only")
    authRequired.forEach((el) => {
        el.style.display = isLoggedIn ? "block" : "none"
    })
    guestOnly.forEach((el) => {
        el.style.display = isLoggedIn ? "none" : "block"
    })
}

function checkAuthState() {
    const session = sessionStorage.getItem("currentUser")
    if (session) {
        currentUser = JSON.parse(session)
        updateAuthState(true)
    }
}

// Portable Assessment Functions
function startAssessment() {
    currentQuestionIndex = 0
    assessmentAnswers = {}
    assessmentInProgress = true
    document.getElementById("assessment-section").style.display = "block"
    document.getElementById("total-questions").textContent = academicStressQuestions.length
    showQuestion(0)
    updateAssessmentProgress()
}

function hideAssessment() {
    document.getElementById("assessment-section").style.display = "none"
    assessmentInProgress = false
    currentQuestionIndex = 0
    assessmentAnswers = {}
}

function showQuestion(index) {
    const question = academicStressQuestions[index]
    const questionContent = document.getElementById("question-content")
    const categoryDisplay = {
        Workload: "Work & Academic Responsibilities",
        Responsibilities: "Responsibilities & Balance",
        "Personal Relationship": "Relationships & Support",
        Personal: "Personal & Career Wellbeing"
    };
    const categoryLabel = categoryDisplay[question.category] || question.category; // Fallback to raw category name

    // Add category banner
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

    // Restore previous answer if exists
    if (assessmentAnswers[question.id]) {
        const savedValue = assessmentAnswers[question.id].value
        const radioButton = questionContent.querySelector(`input[value="${savedValue}"]`)
        const optionLabel = radioButton.closest(".question-option")
        if (radioButton && optionLabel) {
            radioButton.checked = true
            optionLabel.classList.add("selected")
        }
    }
    updateNavigationButtons()
}

function selectOption(value, optionIndex) {
    const question = academicStressQuestions[currentQuestionIndex]
    const options = document.querySelectorAll(".question-option")
    // Remove previous selection
    options.forEach((option) => option.classList.remove("selected"))
    // Add selection to clicked option
    options[optionIndex].classList.add("selected")
    // Save answer
    assessmentAnswers[question.id] = {
        question: question.question,
        answer: question.options[optionIndex].text,
        value: value,
    }
    updateNavigationButtons()
}

function nextQuestion() {
    const currentCategory = academicStressQuestions[currentQuestionIndex].category;
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < academicStressQuestions.length) {
        const nextCategory = academicStressQuestions[nextIndex].category;
        // Show toast when category changes
        if (currentCategory !== nextCategory) {
            showToast(`📘 Now moving to: ${nextCategory} questions`, "info", 5000);
        }
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
        updateAssessmentProgress();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--
        showQuestion(currentQuestionIndex)
        updateAssessmentProgress()
    }
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById("prev-btn")
    const nextBtn = document.getElementById("next-btn")
    const submitBtn = document.getElementById("submit-btn")

    prevBtn.disabled = currentQuestionIndex === 0
    const isLastQuestion = currentQuestionIndex === academicStressQuestions.length - 1
    const hasAnswer = assessmentAnswers[academicStressQuestions[currentQuestionIndex].id]

    if (isLastQuestion) {
        nextBtn.style.display = "none"
        submitBtn.style.display = hasAnswer ? "inline-block" : "none"
    } else {
        nextBtn.style.display = hasAnswer ? "inline-block" : "none"
        submitBtn.style.display = "none"
    }
}

function updateAssessmentProgress() {
    const progress = ((currentQuestionIndex + 1) / academicStressQuestions.length) * 100
    document.getElementById("assessment-progress-fill").style.width = progress + "%"
    document.getElementById("current-question").textContent = currentQuestionIndex + 1
}

function submitAssessment() {
    showLoadingScreen("Processing your assessment...")
    setTimeout(() => {
        let totalScore = 0
        const sectionScores = {
            "Workforce and Workload": 0,
            "Skills and Task Management": 0,
            "Facilities and Infrastructure": 0,
            "Mental and Physical Health": 0,
            "Organizational Culture and Leadership": 0
        }

        // Calculate total raw score and section scores
        Object.values(assessmentAnswers).forEach((answer) => {
            // Find the original question object to get its category
            const originalQuestion = academicStressQuestions.find(q => q.id === Number(Object.keys(assessmentAnswers).find(key => assessmentAnswers[key] === answer)));
            if (originalQuestion) {
                const value = answer.value;
                totalScore += value;
                sectionScores[originalQuestion.category] += value;
            }
        })

        console.log("Section Scores:", sectionScores); // For debugging
        console.log("Total Score:", totalScore); // For debugging

        // Determine overall stress level based on total score
        let overallStressLevel, overallStressDescription, overallStressClass
        if (totalScore <= 24) {
            overallStressLevel = "Low Stress"
            overallStressDescription = "You currently demonstrate healthy stress management. Continue maintaining work-life balance and structured task planning."
            overallStressClass = "low"
        } else if (totalScore <= 49) {
            overallStressLevel = "Moderate Stress"
            overallStressDescription = "You are experiencing manageable stress levels. Consider improving time management, setting work boundaries and engaging in periodic rest."
            overallStressClass = "moderate"
        } else if (totalScore <= 59) {
            overallStressLevel = "Abnormal Stress"
            overallStressDescription = "Your stress level is above healthy limits. It is advisable to reassess workload distribution, prioritize tasks effectively and adopt structured stress-reduction techniques."
            overallStressClass = "abnormal" // Add CSS class if needed
        } else if (totalScore <= 69) {
            overallStressLevel = "High Stress"
            overallStressDescription = "You are experiencing significant stress that may impact performance and wellbeing. Immediate workload discussion, improved rest patterns and stress management interventions are recommended."
            overallStressClass = "high"
        } else { // 70-100
            overallStressLevel = "High Risk Stress"
            overallStressDescription = "Your stress level is critically elevated. Professional support, workload reassessment and urgent intervention are strongly recommended."
            overallStressClass = "high-risk" // Add CSS class if needed
        }

        // Determine section stress levels and find the highest scoring section
        const sectionLevels = {};
        let highestSection = "";
        let highestScore = -1;

        for (const [section, score] of Object.entries(sectionScores)) {
            let level, classLabel;
            if (score <= 4) {
                level = "Low";
                classLabel = "low";
            } else if (score <= 9) {
                level = "Moderate";
                classLabel = "moderate";
            } else if (score <= 12) {
                level = "Abnormal";
                classLabel = "abnormal";
            } else if (score <= 15) {
                level = "High";
                classLabel = "high";
            } else { // 16-20
                level = "High Risk";
                classLabel = "high-risk";
            }
            sectionLevels[section] = { level, class: classLabel, score };
            if (score > highestScore) {
                highestScore = score;
                highestSection = section;
            }
        }

        console.log("Section Levels:", sectionLevels); // For debugging
        console.log("Highest Section:", highestSection, "with score", highestScore); // For debugging

        // Generate personalized recommendations based on overall level and highest section
        let personalRecommendations = [];
        let organizationalRecommendations = [];

        // Personal Recommendations Logic
        personalRecommendations.push(overallStressDescription); // Add the base description

        if (highestSection === "Mental and Physical Health") {
             personalRecommendations.push("Focus on sleep consistency, stress-reduction practices and consider medical or psychological consultation if symptoms persist.");
        } else if (highestSection === "Workforce and Workload") {
             personalRecommendations.push("Discuss workload restructuring with supervisors and document task overload patterns.");
        } else if (highestSection === "Facilities and Infrastructure") {
             personalRecommendations.push("Formally report infrastructure limitations and avoid internalizing delays caused by systemic constraints.");
        } else if (highestSection === "Skills and Task Management") {
             personalRecommendations.push("Request training support and clearer performance guidelines.");
        } else if (highestSection === "Organizational Culture and Leadership") {
             personalRecommendations.push("Utilize formal communication channels and peer support networks.");
        }

        // Organizational Recommendations Logic (based on highest section)
        if (highestSection === "Workforce and Workload") {
            organizationalRecommendations.push("Conduct workload audit", "Recruit additional staff", "Implement fair task allocation");
        } else if (highestSection === "Mental and Physical Health") {
            organizationalRecommendations.push("Provide confidential counseling access", "Introduce stress management workshops", "Review performance pressure systems");
        } else if (highestSection === "Facilities and Infrastructure") {
            organizationalRecommendations.push("Upgrade equipment", "Improve digital infrastructure", "Streamline administrative processes");
        } else if (highestSection === "Organizational Culture and Leadership") {
            organizationalRecommendations.push("Leadership development programs", "Improve transparency", "Establish anonymous feedback mechanisms");
        }


        // Create unique result with timestamp
        const result = {
            id: `${currentUser.id}_${Date.now()}`,
            userId: currentUser.id,
            score: totalScore, // The raw score is now the final score out of 100
            maxScore: 100,  // Explicitly set max score to 100
            level: overallStressLevel,
            class: overallStressClass,
            description: overallStressDescription,
            answers: assessmentAnswers,
            date: new Date().toISOString(),
            timestamp: Date.now(),
            sectionScores: sectionScores, // Add section scores to the result
            sectionLevels: sectionLevels, // Add section levels to the result
            highestSection: highestSection, // Add highest section to the result
            personalRecommendations: personalRecommendations, // Add personal recommendations
            organizationalRecommendations: organizationalRecommendations // Add organizational recommendations
        }

        // Save to localStorage (check for duplicates)
        const results = JSON.parse(localStorage.getItem("stressResults") || "[]")
        // Check if this exact assessment already exists (prevent duplicates)
        const existingResult = results.find(
            (r) => r.userId === currentUser.id && Math.abs(r.timestamp - result.timestamp) < 5000, // Within 5 seconds
        )
        if (!existingResult) {
            results.push(result)
            localStorage.setItem("stressResults", JSON.stringify(results))
            // Hide assessment and show results
            hideAssessment()
            displayResults(result)
            showPage("results")
            loadDashboardStats()
            updateCharts()
            showToast("Assessment completed successfully!", "success")
        } else {
            // If duplicate, just show the existing result
            hideAssessment()
            displayResults(existingResult)
            showPage("results")
            showToast("Assessment already completed!", "info")
        }
    }, 2000)
}

// Survey functions
/*function loadSurveyQuestions() {
    const container = document.getElementById("survey-questions")
    container.innerHTML = ""
    pssQuestions.forEach((q, index) => {
        const questionDiv = document.createElement("div")
        questionDiv.className = "survey-question"
        questionDiv.innerHTML = `
            <h4>Question ${index + 1}</h4>
            <p>${q.question}</p>
            <div class="survey-options">
                ${q.options
                    .map(
                        (option) => `
                            <label class="survey-option">
                                <input type="radio" name="question-${q.id}" value="${option.value}" required>
                                <span>${option.text}</span>
                            </label>
                        `,
                    )
                    .join("")}
            </div>
        `
        container.appendChild(questionDiv)
    })
}*/

function updateSurveyProgress() {
    const totalQuestions = academicStressQuestions.length
    const answeredQuestions = document.querySelectorAll('input[type="radio"]:checked').length
    const progress = (answeredQuestions / totalQuestions) * 100
    document.getElementById("progress-fill").style.width = progress + "%"
    document.getElementById("progress-text").textContent = `${answeredQuestions}/${totalQuestions}`
}

/*function handleSurveySubmit(e) {
    e.preventDefault()
    let totalScore = 0
    const answers = {}
    // Calculate total score
    pssQuestions.forEach((q) => {
        const selectedOption = document.querySelector(`input[name="question-${q.id}"]:checked`)
        if (selectedOption) {
            const score = Number.parseInt(selectedOption.value)
            totalScore += score
            answers[q.id] = {
                question: q.question,
                answer: selectedOption.nextElementSibling.textContent,
                score: score,
            }
        }
    })
    // Determine stress level
    let stressLevel, stressDescription, stressClass
    if (totalScore <= 13) {
        stressLevel = "Low Stress"
        stressDescription = "You are managing stress well and maintaining good mental health."
        stressClass = "low"
    } else if (totalScore <= 26) {
        stressLevel = "Moderate Stress"
        stressDescription =
            "You are experiencing moderate levels of stress. Consider implementing stress management techniques."
        stressClass = "moderate"
    } else {
        stressLevel = "High Stress"
        stressDescription =
            "You are experiencing high levels of stress. It is recommended to seek support and implement stress reduction strategies."
        stressClass = "high"
    }
    // Save result
    const result = {
        id: Date.now(),
        userId: currentUser.id,
        score: totalScore,
        level: stressLevel,
        class: stressClass,
        description: stressDescription,
        answers: answers,
        date: new Date().toISOString(),
    }
    // Save to localStorage
    const results = JSON.parse(localStorage.getItem("stressResults") || "[]")
    results.push(result)
    localStorage.setItem("stressResults", JSON.stringify(results))
    // Show results
    displayResults(result)
    showPage("results")
    showToast("Assessment completed!", "success")
}*/

// Chart Functions
function initializeCharts() {
    if (currentUser) {
        setTimeout(() => {
            createStressTrendChart()
            createStressDistributionChart()
            createMonthlyOverviewChart()
        }, 500)
    }
}

function createStressTrendChart() {
    const ctx = document.getElementById("stressTrendChart")
    if (!ctx) return
    const results = JSON.parse(localStorage.getItem("stressResults") || "[]")
    const userResults = results.filter((r) => r.userId === currentUser?.id).slice(-10)
    const labels = userResults.map((r) => new Date(r.date).toLocaleDateString())
    const data = userResults.map((r) => r.score) // r.score is now 0-100

    if (stressTrendChart) {
        stressTrendChart.destroy()
    }
    stressTrendChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: labels,
            datasets: [
                {
                    label: "Stress Score",
                     data, // data is 0-100
                    borderColor: "rgb(59, 130, 246)",
                    backgroundColor: "rgba(59, 130, 246, 0.1)",
                    tension: 0.4,
                    fill: true,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100, // Ensure Y-axis max is 100
                },
            },
        },
    })
}

function createStressDistributionChart() {
    const ctx = document.getElementById("stressDistributionChart")
    if (!ctx) return

    const results = JSON.parse(localStorage.getItem("stressResults") || "[]")
    const userResults = results.filter((r) => r.userId === currentUser?.id)

    const distribution = { low: 0, moderate: 0, high: 0 }

    userResults.forEach((r) => {
        distribution[r.class]++ // Increment count based on the stress class ('low', 'moderate', 'high')
    })

    // Destroy existing chart instance if it exists
    if (stressDistributionChart) {
        stressDistributionChart.destroy()
    }

    // Corrected Chart.js configuration: 'data' property was missing
    stressDistributionChart = new Chart(ctx, {
        type: "doughnut",
        data: { // <-- This 'data' property was missing
            labels: ["Low Stress", "Moderate Stress", "High Stress"],
            datasets: [
                {
                    data: [distribution.low, distribution.moderate, distribution.high],
                    backgroundColor: ["rgb(16, 185, 129)", "rgb(245, 158, 11)", "rgb(239, 68, 68)"],
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: "bottom",
                },
            },
        },
    })
}
function createMonthlyOverviewChart() {
    const ctx = document.getElementById("monthlyOverviewChart")
    if (!ctx) return
    const results = JSON.parse(localStorage.getItem("stressResults") || "[]")
    const userResults = results.filter((r) => r.userId === currentUser?.id)
    // Group by month
    const monthlyData = {}
    userResults.forEach((r) => {
        const month = new Date(r.date).toLocaleDateString("en-US", { year: "numeric", month: "short" })
        if (!monthlyData[month]) {
            monthlyData[month] = { total: 0, count: 0 }
        }
        monthlyData[month].total += r.score // r.score is 0-100
        monthlyData[month].count++
    })
    const labels = Object.keys(monthlyData)
    const averages = labels.map((month) => monthlyData[month].total / monthlyData[month].count)

    if (monthlyOverviewChart) {
        monthlyOverviewChart.destroy()
    }
    monthlyOverviewChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: labels,
            datasets: [
                {
                    label: "Average Stress Score",
                    data: averages, // averages are 0-100
                    backgroundColor: "rgba(59, 130, 246, 0.8)",
                    borderColor: "rgb(59, 130, 246)",
                    borderWidth: 1,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100, // Ensure Y-axis max is 100
                },
            },
        },
    })
}

function updateCharts() {
    if (currentUser) {
        createStressTrendChart()
        createStressDistributionChart()
        createMonthlyOverviewChart()
    }
}

function displayResults(result) {
    // Display the overall score first (this happens immediately)
    document.getElementById("score-value").textContent = `${result.score}/${result.maxScore}`;
    document.getElementById("stress-level-text").textContent = result.level;
    document.getElementById("stress-level-description").textContent = result.description;
    const stressLevelElement = document.getElementById("stress-level-result");
    stressLevelElement.className = `stress-level ${result.class}`;

    // Update score circle
    const scoreCircle = document.getElementById("score-circle");
    const maxScore = result.maxScore || 100;
    const percentage = (result.score / maxScore) * 360;
    const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim() || 'var(--primary-color)';
    scoreCircle.style.background = `conic-gradient(${primaryColor} ${percentage}deg, var(--border-color) ${percentage}deg)`;

    // Prepare content strings for typing effect
    // Section Scores HTML
    let sectionScoresHtml = "<ul>";
    for (const [section, data] of Object.entries(result.sectionLevels)) {
        sectionScoresHtml += `<li><strong>${section}:</strong> ${data.score}/20 (${data.level})</li>`;
    }
    sectionScoresHtml += "</ul>";

    // Personal Recommendations HTML
    let personalRecsHtml = "<ul>";
    result.personalRecommendations.forEach(rec => {
         personalRecsHtml += `<li>${rec}</li>`;
    });
    personalRecsHtml += "</ul>";

    // Organizational Recommendations HTML
    let orgRecsHtml = "<ul>";
    result.organizationalRecommendations.forEach(rec => {
         orgRecsHtml += `<li>${rec}</li>`;
    });
    orgRecsHtml += "</ul>";

    // Get the containers for the typed content
    const sectionScoresTypedContainer = document.getElementById("section-scores-typed");
    const personalRecsTypedContainer = document.getElementById("personal-recs-typed");
    const orgRecsTypedContainer = document.getElementById("org-recs-typed");

    // Hide containers initially and remove 'visible' class if present
    if (sectionScoresTypedContainer) {
        sectionScoresTypedContainer.style.display = 'none';
        sectionScoresTypedContainer.parentElement.classList.remove('visible'); // Ensure class is removed initially
    }
    if (personalRecsTypedContainer) {
        personalRecsTypedContainer.style.display = 'none';
        personalRecsTypedContainer.parentElement.classList.remove('visible');
    }
    if (orgRecsTypedContainer) {
        orgRecsTypedContainer.style.display = 'none';
        orgRecsTypedContainer.parentElement.classList.remove('visible');
    }

    // Function to simulate typing effect with HTML rendering
    function simulateTypingWithHtml(container, content, speed = 30) {
        if (!container) {
            console.error("Typing container not found!");
            return; // Guard clause if container doesn't exist
        }

        container.innerHTML = ''; // Clear initial placeholder text
        container.style.display = 'block'; // Make it visible
        let currentIndex = 0;

        const typeNextChunk = () => {
            if (currentIndex >= content.length) {
                // Typing finished
                // Now that content is fully typed, trigger visibility
                // Use a slight delay to ensure rendering is complete before adding the class
                setTimeout(() => {
                    if (container.parentElement) { // Double-check parent exists
                        container.parentElement.classList.add('visible');
                    }
                }, 100); // Small delay after typing ends
                return;
            }

            // Look for the next tag or text node
            const openTagIndex = content.indexOf('<', currentIndex);
            const closeTagIndex = content.indexOf('>', openTagIndex);

            let chunkEndIndex;
            let isTag = false;

            if (openTagIndex !== -1 && openTagIndex <= currentIndex && closeTagIndex !== -1) {
                // We are inside or at the start of a tag
                chunkEndIndex = closeTagIndex + 1; // Include the closing '>'
                isTag = true;
            } else if (openTagIndex !== -1 && openTagIndex > currentIndex) {
                 // Next tag is ahead, type up to the tag
                 chunkEndIndex = openTagIndex;
                 isTag = false;
            } else {
                 // No more tags, type the rest as text
                 chunkEndIndex = content.length;
                 isTag = false;
            }

            const chunk = content.substring(currentIndex, chunkEndIndex);

            if (isTag) {
                // Append the tag directly
                container.insertAdjacentHTML('beforeend', chunk);
            } else {
                // Type text character by character within the current context
                let textIndex = 0;
                const typeTextChunk = () => {
                    if (textIndex < chunk.length) {
                        container.insertAdjacentText('beforeend', chunk.charAt(textIndex));
                        textIndex++;
                        setTimeout(typeTextChunk, speed); // Recursive timeout for text chars
                    } else {
                        currentIndex = chunkEndIndex; // Move global index past this text chunk
                        setTimeout(typeNextChunk, speed); // Continue with next HTML chunk
                    }
                };
                typeTextChunk(); // Start typing the text chunk
                return; // Exit outer function call to prevent double scheduling
            }

            currentIndex = chunkEndIndex; // Move index past the tag
            setTimeout(typeNextChunk, speed); // Schedule next chunk (tag or text)
        };

        typeNextChunk(); // Start the process
    }


    // Start typing effects sequentially after a short delay to allow page layout
    setTimeout(() => {
         // Start typing section scores
         simulateTypingWithHtml(sectionScoresTypedContainer, sectionScoresHtml, 40); // Slower for lists

         // Start typing personal recommendations after a delay
         setTimeout(() => {
              simulateTypingWithHtml(personalRecsTypedContainer, personalRecsHtml, 30);
         }, 500); // Fixed delay after section scores start, not based on length

         // Start typing organizational recommendations after personal ones finish
         setTimeout(() => {
              simulateTypingWithHtml(orgRecsTypedContainer, orgRecsHtml, 30);
         }, 500 + 500); // Buffer after personal recs start

         // Make the main containers visible immediately when typing starts
         // The inner content will be typed, and the container will fade in once typing completes.
         const sectionDisplay = document.getElementById("section-scores-display");
         const personalDisplay = document.getElementById("personal-recommendations");
         const orgDisplay = document.getElementById("organizational-recommendations");

         if (sectionDisplay) {
             sectionDisplay.style.display = 'block';
             sectionDisplay.classList.add('visible'); // Start fading in the container itself immediately
         }
         if (personalDisplay) {
             personalDisplay.style.display = 'block';
             personalDisplay.classList.add('visible');
         }
         if (orgDisplay) {
             orgDisplay.style.display = 'block';
             orgDisplay.classList.add('visible');
         }

    }, 100); // Small initial delay


    // Add: Generate trend chart for results page (this can run in parallel)
    setTimeout(createResultTrendChart, 100); // Delay ensures DOM is ready, but doesn't wait for typing
}

function displayRecommendations(stressClass) {
    const container = document.getElementById("recommendations")
    let recommendations = []
    switch (stressClass) {
        case "low":
            recommendations = [
                "Continue your current stress management practices",
                "Maintain a healthy work-life balance",
                "Keep up with regular exercise and healthy eating",
                "Practice mindfulness or meditation regularly",
                "Stay connected with friends and family",
            ]
            break
        case "moderate":
            recommendations = [
                "Identify and address sources of stress in your life",
                "Practice deep breathing exercises daily",
                "Consider talking to a counselor or therapist",
                "Improve time management and prioritization skills",
                "Engage in regular physical activity",
                "Ensure you get adequate sleep (7-9 hours per night)",
            ]
            break
        case "high":
            recommendations = [
                "Seek professional help from a mental health provider",
                "Consider stress management counseling or therapy",
                "Practice relaxation techniques like progressive muscle relaxation",
                "Evaluate and modify stressful situations where possible",
                "Build a strong support network",
                "Consider taking time off work if possible",
                "Avoid alcohol and caffeine as coping mechanisms",
            ]
            break
    }
    container.innerHTML = `
        <h3>Recommendations for You</h3>
        <ul>
            ${recommendations.map((rec) => `<li>${rec}</li>`).join("")}
        </ul>
    `
}

function loadHistory() {
    const container = document.getElementById("history-content")
    const results = JSON.parse(localStorage.getItem("stressResults") || "[]")
    const userResults = results.filter((r) => r.userId === currentUser.id)

    if (userResults.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-chart-line"></i>
                <h3>No assessments yet</h3>
                <p>Take your first stress assessment to see your history here.</p>
                <button class="btn btn-primary" onclick="showPage('dashboard')">Take Assessment</button>
            </div>
        `
        return
    }

    // Sort by date (newest first)
    userResults.sort((a, b) => new Date(b.date) - new Date(a.date))

    container.innerHTML = userResults
        .map(
            (result) => `
                <div class="history-item">
                    <div class="history-info">
                        <h4>Assessment - ${new Date(result.date).toLocaleDateString()}</h4>
                        <p>${new Date(result.date).toLocaleTimeString()}</p>
                        <p>${result.description}</p>
                    </div>
                    <div class="history-score">
                        <!-- Display score out of 100 -->
                        <div class="score">${result.score}/${result.maxScore}</div>
                        <div class="level ${result.class}">${result.level}</div>
                    </div>
                    <div class="history-actions">
                        <button class="btn btn-small btn-secondary" onclick="viewReport('${result.id}')">
                            <i class="fas fa-eye"></i> View Report
                        </button>
                        <button class="btn btn-small btn-primary" onclick="downloadPDFReport('${result.id}')">
                            <i class="fas fa-download"></i> Download PDF
                        </button>
                        <button class="btn btn-small btn-danger" onclick="deleteHistoryItem('${result.id}')">
                            <i class="fas fa-trash"></i> Delete
                        </button>
                    </div>
                </div>
            `,
        )
        .join("")
}

function deleteHistoryItem(id) {
    showModal("Delete Assessment", "Are you sure you want to delete this assessment?", () => {
        const results = JSON.parse(localStorage.getItem("stressResults") || "[]")
        const filteredResults = results.filter((r) => r.id !== id)
        localStorage.setItem("stressResults", JSON.stringify(filteredResults))
        loadHistory()
        loadDashboardStats()
        updateCharts()
        showToast("Assessment deleted", "success")
    })
}

function clearHistory() {
    showModal(
        "Clear All History",
        "Are you sure you want to delete all your assessment history? This action cannot be undone.",
        () => {
            const results = JSON.parse(localStorage.getItem("stressResults") || "[]")
            const filteredResults = results.filter((r) => r.userId !== currentUser.id)
            localStorage.setItem("stressResults", JSON.stringify(filteredResults))
            loadHistory()
            loadDashboardStats()
            showToast("History cleared", "success")
        },
    )
}

// Dashboard functions
function loadUserData() {
    if (!currentUser) return
    document.getElementById("user-name").textContent = `Welcome, ${currentUser.name}!`
    // Load avatar
    const avatarElements = document.querySelectorAll(".user-avatar")
    avatarElements.forEach((avatar) => {
        if (currentUser.avatar) {
            avatar.innerHTML = `<img src="${currentUser.avatar}" alt="Avatar">`
        } else {
            avatar.innerHTML = '<i class="fas fa-user"></i>'
        }
    })
    // Load settings data
    if (document.getElementById("settings-name")) {
        document.getElementById("settings-name").value = currentUser.name
        document.getElementById("settings-email").value = currentUser.email
    }
}

function loadDashboardStats() {
    if (!currentUser) return
    const results = JSON.parse(localStorage.getItem("stressResults") || "[]")
    const userResults = results.filter((r) => r.userId === currentUser.id)

    document.getElementById("total-assessments").textContent = userResults.length

    if (userResults.length > 0) {
        const lastResult = userResults.sort((a, b) => new Date(b.date) - new Date(a.date))[0]
        document.getElementById("last-stress-level").textContent = lastResult.level
        // Calculate days since last assessment
        const daysSince = Math.floor((Date.now() - new Date(lastResult.date)) / (1000 * 60 * 60 * 24))
        document.getElementById("days-since-last").textContent = daysSince
    } else {
        document.getElementById("last-stress-level").textContent = "-"
        document.getElementById("days-since-last").textContent = "-"
    }
}

// Settings functions
function handleAvatarPreview(e) {
    const file = e.target.files[0]
    if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
            document.getElementById("avatar-preview").innerHTML = `<img src="${e.target.result}" alt="Avatar Preview">`
        }
        reader.readAsDataURL(file)
    }
}

function handleAvatarChange(e) {
    const file = e.target.files[0]
    if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
            currentUser.avatar = e.target.result
            updateUserInStorage()
            loadUserData()
            showToast("Avatar updated!", "success")
        }
        reader.readAsDataURL(file)
    }
}

function updateProfile() {
    const name = document.getElementById("settings-name").value
    if (!name.trim()) {
        showToast("Name cannot be empty", "error")
        return
    }
    currentUser.name = name
    updateUserInStorage()
    loadUserData()
    showToast("Profile updated!", "success")
}

function updateUserInStorage() {
    const users = JSON.parse(localStorage.getItem("users") || "[]")
    const userIndex = users.findIndex((u) => u.id === currentUser.id)
    if (userIndex !== -1) {
        users[userIndex] = currentUser
        localStorage.setItem("users", JSON.stringify(users))
        sessionStorage.setItem("currentUser", JSON.stringify(currentUser))
    }
}

function deleteAccount() {
    showModal(
        "Delete Account",
        "Are you sure you want to delete your account? This action cannot be undone and will remove all your data.",
        () => {
            // Remove user from users array
            const users = JSON.parse(localStorage.getItem("users") || "[]")
            const filteredUsers = users.filter((u) => u.id !== currentUser.id)
            localStorage.setItem("users", JSON.stringify(filteredUsers))
            // Remove user's stress results
            const results = JSON.parse(localStorage.getItem("stressResults") || "[]")
            const filteredResults = results.filter((r) => r.userId !== currentUser.id)
            localStorage.setItem("stressResults", JSON.stringify(filteredResults))
            // Clear session
            currentUser = null
            sessionStorage.removeItem("currentUser")
            updateAuthState(false)
            showToast("Account deleted successfully", "success")
            showPage("home")
        },
    )
}

// Theme functions
function loadTheme() {
    const savedTheme = localStorage.getItem("theme") || "light"
    document.documentElement.setAttribute("data-theme", savedTheme)
    const themeToggle = document.getElementById("theme-toggle")
    if (themeToggle) {
        themeToggle.checked = savedTheme === "dark"
    }
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme")
    const newTheme = currentTheme === "dark" ? "light" : "dark"
    document.documentElement.setAttribute("data-theme", newTheme)
    localStorage.setItem("theme", newTheme)
    showToast(`Switched to ${newTheme} mode`, "success")
}

// Update showPage function to include loading for certain pages
// Modal functions
function showModal(title, message, onConfirm) {
    document.getElementById("modal-title").textContent = title
    document.getElementById("modal-message").textContent = message
    document.getElementById("modal").classList.add("active")
    const confirmBtn = document.getElementById("modal-confirm")
    confirmBtn.onclick = () => {
        closeModal()
        if (onConfirm) onConfirm()
    }
}

function closeModal() {
    document.getElementById("modal").classList.remove("active")
}

// Toast functions
function showToast(message, type = "info") {
    const toast = document.createElement("div")
    toast.className = `toast ${type}`
    toast.textContent = message
    document.getElementById("toast-container").appendChild(toast)
    // Auto remove after 3 seconds
    setTimeout(() => {
        toast.remove()
    }, 3000)
}

// Utility functions
function formatDate(dateString) {
    const date = new Date(dateString)
    return date.toLocaleDateString() + " " + date.toLocaleTimeString()
}

// Close modal when clicking outside
document.getElementById("modal").addEventListener("click", function (e) {
    if (e.target === this) {
        closeModal()
    }
})

// Handle browser back/forward buttons
window.addEventListener("popstate", (e) => {
    if (e.state && e.state.page) {
        showPage(e.state.page)
    }
})

// Add keyboard shortcuts
document.addEventListener("keydown", (e) => {
    // Ctrl/Cmd + D for Dashboard
    if ((e.ctrlKey || e.metaKey) && e.key === "d" && currentUser) {
        e.preventDefault()
        showPage("dashboard")
    }
    // Ctrl/Cmd + H for History
    if ((e.ctrlKey || e.metaKey) && e.key === "h" && currentUser) {
        e.preventDefault()
        showPage("history")
    }
    // Ctrl/Cmd + , for Settings
    if ((e.ctrlKey || e.metaKey) && e.key === "," && currentUser) {
        e.preventDefault()
        showPage("settings")
    }
    // Escape to close modal
    if (e.key === "Escape") {
        closeModal()
    }
})

// Initialize tooltips for keyboard shortcuts
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link")
    navLinks.forEach((link) => {
        const text = link.textContent.toLowerCase()
        if (text === "dashboard") {
            link.title = "Dashboard (Ctrl+D)"
        } else if (text === "history") {
            link.title = "History (Ctrl+H)"
        } else if (text === "settings") {
            link.title = "Settings (Ctrl+,)"
        }
    })
})

// Service Worker registration (for future PWA capabilities)
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        // Service worker can be added later for offline functionality
    })
}

// Handle form validation
const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
}

const validatePassword = (password) => password.length >= 6

// Add real-time form validation
document.addEventListener("input", (e) => {
    if (e.target.type === "email") {
        const isValid = validateEmail(e.target.value)
        e.target.style.borderColor = isValid ? "var(--success-color)" : "var(--danger-color)"
    }
    if (e.target.type === "password") {
        const isValid = validatePassword(e.target.value)
        e.target.style.borderColor = isValid ? "var(--success-color)" : "var(--danger-color)"
    }
})

// Handle offline/online status
window.addEventListener("online", () => {
    showToast("Connection restored", "success")
})

window.addEventListener("offline", () => {
    showToast("You are offline. Data will be saved locally.", "warning")
})

// Auto-save survey progress
let surveyAutoSaveTimer
document.addEventListener("change", (e) => {
    if (e.target.name && e.target.name.startsWith("question-")) {
        clearTimeout(surveyAutoSaveTimer)
        surveyAutoSaveTimer = setTimeout(() => {
            // Save current survey progress
            const formData = new FormData(document.getElementById("stress-survey"))
            const progress = {}
            for (const [key, value] of formData.entries()) {
                progress[key] = value
            }
            sessionStorage.setItem("surveyProgress", JSON.stringify(progress))
        }, 1000)
    }
})

// Restore survey progress on page load
const restoreSurveyProgress = () => {
    const savedProgress = sessionStorage.getItem("surveyProgress")
    if (savedProgress) {
        const progress = JSON.parse(savedProgress)
        Object.keys(progress).forEach((key) => {
            const input = document.querySelector(`input[name="${key}"][value="${progress[key]}"]`)
            if (input) {
                input.checked = true
            }
        })
        updateSurveyProgress()
    }
}

// Clear survey progress after submission
const clearSurveyProgress = () => {
    sessionStorage.removeItem("surveyProgress")
}

// Add to survey submit handler
/*const originalHandleSurveySubmit = handleSurveySubmit
handleSurveySubmit = (e) => {
    originalHandleSurveySubmit(e)
    clearSurveyProgress()
}*/

// Load survey progress when dashboard is shown
// Report viewing and PDF generation functions
function viewReport(resultId) {
    const results = JSON.parse(localStorage.getItem("stressResults") || "[]")
    const result = results.find((r) => r.id === resultId)
    if (!result) {
        showToast("Report not found", "error")
        return
    }
    // Create detailed report modal
    const reportModal = document.createElement("div")
    reportModal.className = "modal active"
    reportModal.id = "report-modal"

    // Retrieve recommendations from the result object
    // Fallback to getRecommendationsForClass if not stored in result
    const personalRecommendations = result.personalRecommendations || getRecommendationsForClass(result.class);
    const organizationalRecommendations = result.organizationalRecommendations || []; // Assuming this is always an array in result

    // Create HTML for personal recommendations
    const personalRecsHtml = personalRecommendations.length > 0 ?
        `<div class="report-section">
            <h5>Personal Recommendations</h5>
            <ul class="recommendations-list">
                ${personalRecommendations.map(rec => `<li>${rec}</li>`).join("")}
            </ul>
        </div>`
        : "";

    // Create HTML for organizational recommendations
    const orgRecsHtml = organizationalRecommendations.length > 0 ?
        `<div class="report-section">
            <h5>Organizational Recommendations</h5>
            <ul class="recommendations-list">
                ${organizationalRecommendations.map(rec => `<li>${rec}</li>`).join("")}
            </ul>
        </div>`
        : "";

    reportModal.innerHTML = `
        <div class="modal-content report-modal-content">
            <div class="modal-header">
                <h3>Detailed Assessment Report</h3>
                <button class="modal-close" onclick="closeReportModal()">&times;</button>
            </div>
            <div class="modal-body report-body">
                <div class="report-header">
                    <h4>Academic Stress Assessment Report</h4>
                    <div class="report-meta">
                        <p><strong>Date:</strong> ${new Date(result.date).toLocaleDateString()} at ${new Date(result.date).toLocaleTimeString()}</p>
                        <p><strong>Participant:</strong> ${currentUser.name}</p>
                        <!-- Display score out of 100 -->
                        <p><strong>Total Score:</strong> ${result.score}/${result.maxScore}</p>
                        <p><strong>Stress Level:</strong> <span class="stress-badge ${result.class}">${result.level}</span></p>
                        <p><strong>Highest Risk Section:</strong> ${result.highestSection || 'N/A'}</p>
                    </div>
                </div>
                <div class="report-section">
                    <h5>Assessment Summary</h5>
                    <p>${result.description}</p>
                </div>
                <!-- Include section breakdown if available -->
                ${result.sectionLevels ? `
                <div class="report-section">
                    <h5>Section Breakdown</h5>
                    <ul>
                        ${Object.entries(result.sectionLevels).map(([section, data]) => `<li><strong>${section}:</strong> ${data.score}/20 (${data.level})</li>`).join("")}
                    </ul>
                </div>
                ` : ""}
                <!-- Insert the Personal and Organizational Recommendations -->
                ${personalRecsHtml}
                ${orgRecsHtml}
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary" onclick="downloadPDFReport('${result.id}')">
                    <i class="fas fa-download"></i> Download PDF
                </button>
                <!-- NEW BUTTON -->
                <button class="btn btn-secondary" onclick="showDetailedExplanationModal('${result.level}', '${result.id}')">
                    <i class="fas fa-comment-dots"></i> 🤖Explanative Ai Sim
                </button>
                <button class="btn btn-secondary" onclick="closeReportModal()">Close</button>
            </div>
        </div>
    `
    document.body.appendChild(reportModal)
}


function showDetailedExplanationModal(stressLevel, resultId) {
    // Close the report modal first
    closeReportModal();

    // Get the explanation HTML based on the stress level
    const explanationHTML = getExplanationForStressLevel(stressLevel);
    console.log("Raw Explanation HTML:", explanationHTML); // Debug log

    // Create the new modal
    const detailModal = document.createElement("div");
    detailModal.className = "modal active";
    detailModal.id = "detailed-explanation-modal";

    detailModal.innerHTML = `
        <div class="modal-content report-modal-content">
            <div class="modal-header">
                <h3>Detailed Explanation for Your Result</h3>
                <button class="modal-close" onclick="closeDetailedExplanationModal()">&times;</button>
            </div>
            <div class="modal-body report-body">
                <div class="report-header">
                    <h4>${stressLevel}</h4>
                    <div class="report-meta">
                        <p><strong>Report ID:</strong> ${resultId}</p>
                        <p><strong>Analysis:</strong></p>
                    </div>
                </div>
                <div class="typing-container" id="explanation-typed">Loading explanation...</div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" onclick="closeDetailedExplanationModal()">Close</button>
            </div>
        </div>
    `;

    document.body.appendChild(detailModal);

    // Get the container for the typed content
    const explanationTypedContainer = document.getElementById("explanation-typed");

    // Hide container initially
    if (explanationTypedContainer) {
        explanationTypedContainer.style.display = 'none';
        // Clear the placeholder text
        explanationTypedContainer.innerHTML = '';
    }

    // Function to simulate typing effect on text nodes within an HTML structure
    function simulateTypingOnHTML(container, htmlString, speed = 15) {
        if (!container) return;

        // Wrap the HTML string to ensure it's parsed as a full document body
        const wrappedHTML = `<div>${htmlString}</div>`;
        const parser = new DOMParser();
        const tempDoc = parser.parseFromString(wrappedHTML, 'text/html');
        const fragmentWrapper = tempDoc.body.firstElementChild; // Get the wrapper div

        if (!fragmentWrapper) {
            console.error("Could not parse explanation HTML:", htmlString);
            return;
        }

        // Store the original text content of each text node
        const textNodesData = [];
        const walker = document.createTreeWalker(
            fragmentWrapper,
            NodeFilter.SHOW_TEXT,
            null,
            false
        );

        let node;
        while (node = walker.nextNode()) {
            textNodesData.push({
                node: node,
                originalText: node.textContent
            });
            node.textContent = ''; // Clear the text initially
        }

        console.log("Found text nodes:", textNodesData); // Debug log

        // Append the children of the wrapper (the actual content) to the target container
        while (fragmentWrapper.firstChild) {
            container.appendChild(fragmentWrapper.firstChild);
        }

        // Show the container
        container.style.display = 'block';

        // Helper function to type the text for a single text node AND call the callback when done
        function typeTextNode(data, callback) {
            const { node, originalText } = data;
            let index = 0;

            const typeChar = () => {
                if (index < originalText.length) {
                    node.textContent += originalText[index];
                    index++;
                    setTimeout(typeChar, speed);
                } else {
                    console.log("Finished typing node:", node.textContent); // Debug log
                    // Typing for this node is complete, call the callback
                    if (callback) callback();
                }
            };

            typeChar(); // Start typing this node
        }

        // Iterate through the collected text nodes and start typing them sequentially
        let dataIndex = 0;
        function typeNextNode() {
            if (dataIndex < textNodesData.length) {
                console.log("Starting to type node index:", dataIndex); // Debug log
                // Call typeTextNode and pass a callback to typeNextNode to continue the sequence
                typeTextNode(textNodesData[dataIndex], () => {
                    console.log("Callback received for node index:", dataIndex); // Debug log
                    dataIndex++; // Move to the next node only after the current one finishes
                    typeNextNode(); // Process the next node
                });
            } else {
                console.log("All nodes finished typing!"); // Debug log
                // All text nodes have finished typing
                container.classList.add('visible'); // Trigger fade-in
            }
        }

        typeNextNode(); // Start the process
    }


    // Start typing effect after a short delay
    setTimeout(() => {
         simulateTypingOnHTML(explanationTypedContainer, explanationHTML, 15); // Typing speed can be adjusted

         // The fade-in is now handled inside simulateTypingOnHTML when finished
    }, 100); // Small initial delay
}

function closeDetailedExplanationModal() {
    const modal = document.getElementById("detailed-explanation-modal");
    if (modal) {
        modal.remove();
    }
}


function closeDetailedExplanationModal() {
    const modal = document.getElementById("detailed-explanation-modal");
    if (modal) {
        modal.remove();
    }
}
function getExplanationForStressLevel(stressLevel) {
    // Convert level to lowercase for easier comparison
    const level = stressLevel.toLowerCase();

    if (level.includes("low stress")) {
        return `
<h3>Understanding Your Low Stress Result</h3>
<p>Your assessment indicates a low level of perceived stress. This is a positive outcome, reflecting effective stress management strategies and a good balance between your academic responsibilities and personal wellbeing.</p>

<h4>What This Means:</h4>
<ul>
<li>You are managing your workload effectively without feeling overwhelmed.</li>
<li>You likely have good coping mechanisms in place for dealing with daily pressures.</li>
<li>Your current lifestyle and work habits are supporting your mental health.</li>
<li>You maintain a sense of control over your responsibilities.</li>
</ul>

<h4>Maintaining This Level:</h4>
<ul>
<li>Continue practicing the healthy habits that contribute to your low stress.</li>
<li>Maintain regular breaks and leisure activities.</li>
<li>Keep up effective time management and organizational skills.</li>
<li>Stay connected with supportive colleagues or friends.</li>
<li>Acknowledge this achievement and be mindful of factors that might increase stress in the future.</li>
</ul>

<h4>What to do in details</h4>
<p>First, reflect on the specific routines and mindsets that currently support your low stress state. Consider journaling for a week to identify which behaviors—such as consistent sleep, scheduled downtime, or boundary-setting—are most impactful. Use this insight to reinforce those habits intentionally, especially during busier periods.</p>

<p>Second, proactively build resilience by gradually introducing small challenges that expand your capacity without triggering overwhelm. For example, take on a manageable new responsibility or learn a skill outside your comfort zone—but always pair it with recovery time. This helps prevent complacency while maintaining stability.</p>

<p>Third, share your strategies with peers or mentees. Teaching others reinforces your own understanding and creates a supportive community. You may also discover new perspectives that further refine your approach. Remember: low stress is not static—it requires ongoing attention and adaptation.</p>
        `;

    } else if (level.includes("moderate stress")) {
        return `
<h3>Understanding Your Moderate Stress Result</h3>
<p>Your assessment indicates a moderate level of perceived stress. This suggests that while you are managing, there are some ongoing pressures or challenges that are impacting your wellbeing to a noticeable degree.</p>

<h4>What This Means:</h4>
<ul>
<li>You may be experiencing occasional feelings of being rushed or having too much on your plate.</li>
<li>Some aspects of your work or personal life might feel demanding.</li>
<li>While not overwhelming, this level of stress can accumulate over time if not addressed.</li>
<li>You might notice minor impacts on concentration, mood, or physical health.</li>
</ul>

<h4>Managing Moderate Stress:</h4>
<ul>
<li>Identify specific sources of stress (e.g., workload, deadlines, relationships).</li>
<li>Evaluate your current time management and prioritization methods.</li>
<li>Incorporate regular relaxation techniques such as deep breathing or short walks.</li>
<li>Ensure you are getting adequate sleep and nutrition.</li>
<li>Consider discussing workload concerns with supervisors if applicable.</li>
<li>Engage in hobbies or activities you enjoy regularly.</li>
</ul>

<h4>What to do in details</h4>
<p>Begin by conducting a weekly stress audit: list all tasks, interactions, and environments that trigger tension, then categorize them as controllable, partially controllable, or external. Focus first on adjusting the controllable items—for instance, restructuring how you schedule meetings or setting clearer communication expectations with collaborators.</p>

<p>Next, integrate micro-recovery practices into your day. These are brief, intentional pauses (2–5 minutes) designed to reset your nervous system—such as stepping outside for fresh air, doing a guided breathing exercise, or listening to a calming audio clip. Consistency matters more than duration; aim for 3–4 micro-recoveries daily to prevent stress buildup.</p>

<p>Finally, consider establishing a “stress buffer” routine—something you do weekly that reliably restores your sense of agency. This could be a reflective walk, a creative outlet, or a structured planning session where you review progress and adjust goals. Over time, this buffer becomes an anchor that helps you navigate increasing demands without slipping into higher stress categories.</p>
        `;

    } else if (level.includes("abnormal stress")) {
        return `
<h3>Understanding Your Abnormal Stress</h3>
<p>Your assessment indicates an abnormal level of perceived stress. This level is significantly higher than what would be considered typical and suggests that stress is having a substantial impact on your performance.</p>

<h4>What This Means:</h4>
<ul>
<li>Stress is likely interfering with your ability to function optimally in some areas.</li>
<li>You may experience persistent feelings of anxiety, tension, or being overwhelmed.</li>
<li>Concentration, decision-making, and sleep might be affected.</li>
<li>Physical symptoms like headaches or fatigue could be present.</li>
<li>Your usual coping strategies may not be sufficient currently.</li>
</ul>

<h4>Addressing Abnormal Stress:</h4>
<ul>
<li>Prioritize immediate stress reduction techniques like mindfulness or progressive muscle relaxation.</li>
<li>Reassess your workload and responsibilities – is there scope for delegation or adjustment?</li>
<li>Seek support from trusted colleagues, friends, family, or a counselor.</li>
<li>Focus on establishing a consistent routine that includes adequate rest.</li>
<li>Limit exposure to known stressors where possible.</li>
<li>Consider professional support if symptoms persist or worsen.</li>
</ul>

<h4>What to do in details</h4>
<p>Start by creating a short-term stabilization plan focused on safety and regulation—not productivity. Identify one or two non-negotiable daily anchors, such as a 10-minute morning grounding ritual (e.g., gentle stretching + affirmations) and a fixed bedtime routine. These provide predictability when your internal system feels chaotic. Avoid making major decisions during this phase; instead, focus on reducing cognitive load through simplification and delegation.</p>

<p>Then, map out your stress triggers using a simple log over 3–5 days: note the time, context, physical sensations, thoughts, and emotional response. Look for patterns—do certain people, tasks, or times of day consistently escalate your stress? Once identified, develop targeted interventions: for example, if email overload is a trigger, batch-check messages twice daily and use templates for common replies. If interpersonal conflict is recurring, practice assertive communication scripts in advance.</p>

<p>Lastly, initiate formal support early. Reach out to a licensed therapist specializing in stress or anxiety disorders—even one or two sessions can offer tools and validation. Many institutions offer confidential counseling services; if available, use them without delay. Simultaneously, inform a trusted supervisor or mentor (if appropriate) about your current capacity limits, framing it as a proactive step toward sustainable performance rather than a weakness. Recovery from abnormal stress is nonlinear, but structured action significantly improves outcomes.</p>
        `;

    } else if (level.includes("high stress")) {
        return `
<h3>Understanding Your High Stress Result</h3>
<p>Your assessment indicates a high level of perceived stress. This level signals significant strain and suggests that stress is substantially affecting your daily life and wellbeing.</p>

<h4>What This Means:</h4>
<ul>
<li>You are likely experiencing frequent and intense stress reactions.</li>
<li>Your performance at work and personal life may be noticeably impacted.</li>
<li>Symptoms like irritability, difficulty sleeping, physical tension, or digestive issues might occur.</li>
<li>It may feel difficult to cope using your usual methods.</li>
<li>There's a risk of developing more serious health issues if not managed.</li>
</ul>

<h4>Managing High Stress:</h4>
<ul>
<li>Take immediate steps to reduce your stress load – this is crucial.</li>
<li>Reach out for professional support (counselor, therapist, doctor) without delay.</li>
<li>Communicate openly with supervisors about workload pressures.</li>
<li>Implement strict boundaries around work hours if possible.</li>
<li>Focus intensely on self-care routines (sleep, diet, gentle exercise).</li>
<li>Lean heavily on your support network.</li>
</ul>

<h4>What to do in details</h4>
<p>Immediate triage is essential: pause non-urgent obligations for 48–72 hours to assess your baseline functioning. During this window, prioritize physiological regulation—aim for 6+ hours of sleep, hydrate consistently, and consume whole foods even if appetite is low. Use sensory grounding techniques (e.g., holding ice, naming 5 things you see/hear/feel) whenever panic or dissociation arises. This creates space to think clearly before problem-solving.</p>

<p>Next, collaborate with a healthcare provider or counselor to rule out underlying conditions (e.g., thyroid dysfunction, burnout syndrome, or clinical anxiety) and co-create a personalized recovery roadmap. This may include short-term medication support, cognitive-behavioral strategies, or workplace accommodations. Document your symptoms and responses to interventions—this data helps refine treatment and demonstrates progress over time.</p>

<p>Finally, restructure your environment to minimize friction. This could mean temporarily suspending volunteer roles, automating repetitive tasks, or negotiating deadline extensions in writing. Communicate needs with clarity and specificity: instead of saying “I’m overwhelmed,” try “I need to defer Project X until March 10 to ensure quality and avoid errors.” Protecting your capacity now prevents long-term consequences and models healthy boundaries for others.</p>
        `;

    } else if (level.includes("high risk stress")) {
        return `
<h3>Understanding Your High Risk Stress Result</h3>
<p>Your assessment indicates a critically high level of perceived stress. This is a serious finding, indicating that stress is severely impacting your health and functioning. Immediate action is strongly recommended.</p>

<h4>What This Means:</h4>
<ul>
<li>Stress levels are dangerously high and unsustainable.</li>
<li>Significant impairment in work performance and personal life is likely occurring.</li>
<li>There is a high risk of developing serious mental health conditions (e.g., anxiety disorders, depression) or physical health problems.</li>
<li>Daily functioning feels extremely difficult.</li>
<li>Current coping mechanisms are insufficient.</li>
</ul>

<h4>Urgent Actions for High Risk Stress:</h4>
<ul>
<li>Seek immediate professional help from a mental health expert or doctor.</li>
<li>Contact your institution's employee assistance program or counseling services.</li>
<li>Discuss urgent workload adjustments with management.</li>
<li>Temporarily step back from non-essential commitments.</li>
<li>Prioritize basic needs like eating, sleeping, and minimal movement.</li>
<li>Reach out to trusted individuals for emotional support.</li>
<li>Do not ignore this result – proactive intervention is essential.</li>
</ul>

<h4>What to do in details</h4>
<p>First, activate your crisis support protocol: contact a mental health crisis line or emergency services if you experience thoughts of self-harm, severe dissociation, or inability to perform basic self-care. If safe, ask a trusted person to stay with you for 24–48 hours. Write down three concrete actions you can take *today*—for example, calling your campus counseling center, booking a doctor’s appointment, or sending a brief email requesting temporary leave. Small, executable steps restore agency when everything feels unmanageable.</p>

<p>Second, initiate a medical evaluation to assess both psychological and physiological impacts. High-risk stress often manifests in cardiovascular changes, immune suppression, or hormonal dysregulation. A primary care provider can screen for these and coordinate with mental health specialists. Request documentation of your condition—it may be needed for academic or employment accommodations. Be explicit about functional impairments (e.g., “I cannot concentrate for more than 10 minutes” or “I wake up exhausted despite 8 hours of sleep”).</p>

<p>Third, design a 7-day stabilization sprint with zero performance expectations. Define success as *survival and safety*, not output. Use alarms to remind yourself to eat, drink water, and lie down for 15 minutes every 3 hours. Replace productivity goals with recovery goals: e.g., “I will sit quietly for 5 minutes without checking my phone” or “I will say ‘no’ to one request today.” Rebuilding capacity starts with radical self-compassion—not acceleration. You are not failing; you are responding to an overload signal. Honor that.</p>
        `;

    } else {
        // Default fallback if level doesn't match known ones
        return `
<h3>Assessment Result</h3>
<p>Thank you for completing the assessment. Your stress level was recorded as "${stressLevel}". Please refer to your general recommendations and consider speaking with a professional if you have concerns.</p>
        `;
    }
}

function closeReportModal() {
    const modal = document.getElementById("report-modal")
    if (modal) {
        modal.remove()
    }
}

function getRecommendationsForClass(stressClass) {
    switch (stressClass) {
        case "low":
            return [
                "Continue your current stress management practices",
                "Maintain a healthy work-life balance",
                "Keep up with regular exercise and healthy eating",
                "Practice mindfulness or meditation regularly",
                "Stay connected with friends and family",
            ]
        case "moderate":
            return [
                "Identify and address sources of stress in your life",
                "Practice deep breathing exercises daily",
                "Consider talking to a counselor or therapist",
                "Improve time management and prioritization skills",
                "Engage in regular physical activity",
                "Ensure you get adequate sleep (7-9 hours per night)",
            ]
        case "high":
            return [
                "Seek professional help from a mental health provider",
                "Consider stress management counseling or therapy",
                "Practice relaxation techniques like progressive muscle relaxation",
                "Evaluate and modify stressful situations where possible",
                "Build a strong support network",
                "Consider taking time off work if possible",
                "Avoid alcohol and caffeine as coping mechanisms",
            ]
        default:
            return []
    }
}

function downloadPDFReport(resultId) {
    const results = JSON.parse(localStorage.getItem("stressResults") || "[]");
    const result = results.find(r => r.id === resultId);
    if (!result) {
        showToast("Report not found", "error");
        return;
    }
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // User info
    const user = JSON.parse(sessionStorage.getItem("currentUser"));
    const date = new Date(result.date).toLocaleDateString();
    const stressLevel = result.level;
    const stressClass = result.class; // e.g., 'low', 'moderate', 'high-risk'

    // --- Styling Constants ---
    const primaryColor = [29, 155, 240]; // RGB for var(--primary-color) - adjust if needed
    const textColor = [50, 50, 50];
    const lightGray = [240, 240, 240];

    // --- Header ---
    doc.setFillColor(...primaryColor);
    doc.rect(0, 0, 210, 40, "F"); // Background bar
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(20);
    doc.text("Stress Assessment Report", 15, 25);
    doc.setTextColor(...textColor);
    doc.setFontSize(12);
    doc.text(`Name: ${user?.name || "N/A"}`, 15, 50);
    doc.text(`Email: ${user?.email || "N/A"}`, 15, 60);
    doc.text(`Date: ${date}`, 15, 70);
    doc.text(`Total Score: ${result.score}/${result.maxScore}`, 15, 80); // Updated to show score/100
    doc.text(`Stress Level: ${stressLevel}`, 15, 90); // Updated stress level text

    // --- Stress Score Circle (Simple Visualization) ---
    const score = result.score;
    doc.setLineWidth(2);
    doc.setDrawColor(...primaryColor);
    doc.circle(170, 70, 20, "S"); // Adjusted Y position
    doc.setFontSize(16);
    // Display score out of 100
    doc.text(`${score}/100`, 162, 73);

    // --- Badge ---
    const badgeX = 150.5;
    const badgeY = 93; // Adjusted Y position
    let badgeColor;
    // Use the result.class to determine color, matching CSS logic
    if (stressClass === 'low') badgeColor = [34, 197, 94];   // green (var(--success-color))
    else if (stressClass === 'moderate') badgeColor = [234, 179, 8]; // yellow (var(--warning-color))
    else if (stressClass === 'abnormal') badgeColor = [139, 92, 246]; // purple (custom)
    else if (stressClass === 'high') badgeColor = [234, 179, 8]; // yellow (var(--warning-color))
    else if (stressClass === 'high-risk') badgeColor = [220, 38, 38]; // red (var(--danger-color))
    else badgeColor = [128, 128, 128]; // gray default
    doc.setFillColor(...badgeColor);
    doc.roundedRect(badgeX, badgeY, 40, 10, 3, 3, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(10);
    doc.text(stressClass.split('-')[0].toUpperCase(), badgeX + 20, badgeY + 7, { align: "center" }); // Just "LOW", "MODERATE", "HIGH-RISK" (first part if hyphenated)

    // Reset color
    doc.setTextColor(...textColor);
    doc.setFontSize(12);

    // --- Section Breakdown (if available) ---
    let sectionBreakdownY = 100; // Default starting Y after header
    if (result.sectionLevels) {
        doc.setFontSize(14);
        doc.setTextColor(...primaryColor);
        doc.text("Section Breakdown", 15, 105);
        doc.setFontSize(10);
        doc.setTextColor(...textColor);

        let breakdownYPos = 115;
        Object.entries(result.sectionLevels).forEach(([section, data]) => {
            if (breakdownYPos > 280) { // Check page height
                doc.addPage();
                breakdownYPos = 20;
            }
            // Format: Section Name: X/20 (Level)
            doc.text(`${section}: ${data.score}/20 (${data.level})`, 15, breakdownYPos);
            breakdownYPos += 8;
        });
        sectionBreakdownY = breakdownYPos + 10; // Add some space after breakdown
    }

    // --- Answers Table ---
    const tableColumn = ["Category", "Question", "Your Answer", "Score"]; // Added Score column
    const tableRows = [];

    Object.entries(result.answers).forEach(([qId, answer]) => {
        const question = academicStressQuestions.find(q => q.id == qId);
        const category = question?.category || "Unknown";
        const userOption = question?.options.find(opt => opt.value == answer.value)?.text || "N/A";
        // Include the score in the table row
        tableRows.push([
            category,
            question?.question.substring(0, 40) + "...", // Truncate long questions
            userOption,
            answer.value.toString() // Add the individual question score
        ]);
    });

    doc.autoTable({
        head: [tableColumn],
        body: tableRows,
        startY: sectionBreakdownY, // Start after section breakdown or default Y
        theme: 'striped',
        styles: { fontSize: 9, cellPadding: 3 }, // Slightly smaller font for table
        headStyles: { fillColor: primaryColor, fontSize: 10 },
        columnStyles: {
            0: { cellWidth: 25 },
            1: { cellWidth: 70 },
            2: { cellWidth: 50 },
            3: { cellWidth: 15, halign: 'center' } // Score column
        },
        alternateRowStyles: { fillColor: lightGray }
    });

    // --- Recommendations ---
    const finalY = doc.lastAutoTable.finalY + 15;
    doc.setFontSize(14);
    doc.setTextColor(...primaryColor);
    doc.text("Recommendations", 15, finalY);
    doc.setFontSize(10);
    doc.setTextColor(...textColor);

    let recYPos = finalY + 10;

    // Retrieve recommendations from the result object
    const personalRecommendations = result.personalRecommendations || [];
    const organizationalRecommendations = result.organizationalRecommendations || [];

    // Add Personal Recommendations section if available
    if (personalRecommendations.length > 0) {
        if (recYPos > 280) { // Check page height
            doc.addPage();
            recYPos = 20;
        }
        doc.setFontSize(12); // Slightly larger for subsection header
        doc.setTextColor(...primaryColor);
        doc.text("Personal Recommendations", 15, recYPos);
        doc.setFontSize(10); // Reset font size for list items
        doc.setTextColor(...textColor);
        recYPos += 8; // Space after header

        personalRecommendations.forEach(rec => {
            if (recYPos > 280) { // Check page height
                doc.addPage();
                recYPos = 20;
            }
            doc.text("• " + rec, 15, recYPos);
            recYPos += 8;
        });
        recYPos += 5; // Add space after personal recs
    }

    // Add Organizational Recommendations section if available
    if (organizationalRecommendations.length > 0) {
         if (recYPos > 280) { // Check page height
            doc.addPage();
            recYPos = 20;
        }
        doc.setFontSize(12); // Slightly larger for subsection header
        doc.setTextColor(...primaryColor);
        doc.text("Organizational Recommendations", 15, recYPos);
        doc.setFontSize(10); // Reset font size for list items
        doc.setTextColor(...textColor);
        recYPos += 8; // Space after header

        organizationalRecommendations.forEach(rec => {
            if (recYPos > 280) { // Check page height
                doc.addPage();
                recYPos = 20;
            }
            doc.text("• " + rec, 15, recYPos);
            recYPos += 8;
        });
    }

    // --- Footer ---
    doc.setFontSize(9);
    doc.setTextColor(150, 150, 150);
    doc.text("Generated by StressDetect System", 15, doc.internal.pageSize.height - 20);
    doc.text(`Report ID: ${result.id}`, 190, doc.internal.pageSize.height - 20, { align: "right" });

    // --- Save PDF ---
    // Use dynamic filename based on user ID and date
    doc.save(`stress-report-${user?.id || 'unknown'}-${date.replace(/\//g, '-')}.pdf`);
}

function generateTextReport(result) {
    const answers = Object.entries({
        Workload: [],
        Responsibilities: [],
        "Personal Relationship": [],
        Personal: []
    })
        .map(([category, arr]) => {
            Object.values(result.answers).forEach((answer, index) => {
                const originalQuestion = academicStressQuestions.find(q => q.id === Number(Object.keys(result.answers)[index]));
                if (originalQuestion?.category === category) {
                    arr.push(`Question ${index + 1}: ${answer.question}\nAnswer: ${answer.answer} (Score: ${answer.value})`);
                }
            });
            return arr.length > 0 ? `${category.toUpperCase()} QUESTIONS\n${arr.join("\n")}` : "";
        })
        .filter(Boolean)
        .join("\n");

    const recommendations = getRecommendationsForClass(result.class)
        .map((rec, index) => `${index + 1}. ${rec}`)
        .join("\n")

    // Use maxScore from the result object (should be 100)
    return `
ACADEMIC STRESS ASSESSMENT REPORT
=================================
Participant: ${currentUser.name}
Date: ${new Date(result.date).toLocaleDateString()} at ${new Date(result.date).toLocaleTimeString()}
Total Score: ${result.score}/${result.maxScore}
Stress Level: ${result.level}

ASSESSMENT SUMMARY
==================
${result.description}

DETAILED RESPONSES
==================
${answers}

RECOMMENDATIONS
===============
${recommendations}

---
Report generated by StressDetect System
Olusegun Agagu University of Science and Technology
Department of Computer Science
`
}

function createResultTrendChart() {
    const ctx = document.getElementById("resultTrendChart");
    if (!ctx) {
        console.warn("Canvas with id 'resultTrendChart' not found");
        return;
    }

    // Get the user's results
    const results = JSON.parse(localStorage.getItem("stressResults") || "[]");
    const userId = JSON.parse(sessionStorage.getItem("currentUser"))?.id;
    if (!userId) {
        console.warn("No current user found");
        return;
    }
    const userResults = results
        .filter(r => r.userId === userId)
        .sort((a, b) => new Date(a.date) - new Date(b.date));

    const labels = userResults.map(r => new Date(r.date).toLocaleDateString());
    const data = userResults.map(r => r.score); // r.score is 0-100

    // Destroy existing chart instance if it's valid
    if (window.resultTrendChart instanceof Chart) {
        window.resultTrendChart.destroy();
    }

    if (data.length === 0) {
        document.getElementById("resultTrendChart").style.display = "none";
        document.querySelector(".chart-card h3").textContent = "No trend data yet";
        return;
    } else {
        document.getElementById("resultTrendChart").style.display = "block";
        document.querySelector(".chart-card h3").textContent = "Your Stress Trend";
    }

    // **FIXED:** Added the missing 'data:' property
    window.resultTrendChart = new Chart(ctx, {
        type: "line",
        data: { // <-- Added 'data:'
            labels: labels,
            datasets: [
                {
                    label: "Stress Score",
                    data, // data is 0-100
                    borderColor: "rgb(75, 192, 192)",
                    backgroundColor: "rgba(75, 192, 192, 0.2)",
                    tension: 0.4,
                    fill: true,
                    pointRadius: 5,
                    pointHoverRadius: 8,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    mode: "index",
                    intersect: false,
                    callbacks: {
                        // Ensure tooltip shows the correct score (0-100)
                        label: function(context) {
                            return `Score: ${context.parsed.y}`;
                        }
                    }
                },
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100, // Ensure Y-axis max is 100
                    ticks: { stepSize: 10 },
                },
                x: {
                    ticks: { maxRotation: 45, minRotation: 45 },
                },
            },
        },
    });
    console.log("Result trend chart created with", data.length, "data points");
}