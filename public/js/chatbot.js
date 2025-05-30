// Career data
const careerData = {
  "software-engineering": {
    title: "Software Engineering",
    description:
      "Software engineering is a field that encompasses the design, development, and maintenance of software systems. It applies engineering principles to software creation through a systematic approach.",
    roles: [
      "Frontend Developer",
      "Backend Developer",
      "Full Stack Developer",
      "Mobile App Developer",
      "DevOps Engineer",
      "Cloud Architect",
      "Machine Learning Engineer",
      "Embedded Systems Engineer",
    ],
    skills: [
      { name: "Programming Languages", level: 90 },
      { name: "Software Design", level: 85 },
      { name: "Testing & Debugging", level: 75 },
      { name: "Version Control", level: 80 },
      { name: "Database Management", level: 70 },
    ],
    salary: { entry: "$70,000", mid: "$110,000", senior: "$150,000+" },
    demand: "High",
    growth: "22% (much faster than average)",
    education: [
      "Bachelor's in Computer Science",
      "Coding Bootcamp",
      "Self-taught with portfolio",
    ],
    resources: [
      {
        title: "The Complete Web Developer Course",
        type: "Online Course",
        link: "#",
      },
      {
        title: "Clean Code: A Handbook of Agile Software Craftsmanship",
        type: "Book",
        link: "#",
      },
      { title: "Developer Roadmap 2025", type: "Guide", link: "#" },
    ],
  },
  "data-science": {
    title: "Data Science",
    description:
      "Data science combines domain expertise, programming skills, and knowledge of math and statistics to extract meaningful insights from data. It involves using automated methods to analyze massive amounts of data and extract knowledge from them.",
    roles: [
      "Data Scientist",
      "Data Analyst",
      "Machine Learning Engineer",
      "Business Intelligence Analyst",
      "Data Engineer",
      "Research Scientist",
      "Statistician",
      "Big Data Engineer",
    ],
    skills: [
      { name: "Statistics & Math", level: 85 },
      { name: "Machine Learning", level: 80 },
      { name: "Data Visualization", level: 75 },
      { name: "Python/R", level: 90 },
      { name: "SQL & Databases", level: 85 },
    ],
    salary: { entry: "$85,000", mid: "$120,000", senior: "$160,000+" },
    demand: "Very High",
    growth: "31% (much faster than average)",
    education: [
      "Master's in Data Science",
      "Bachelor's with specialization",
      "Boot camps with strong portfolio",
    ],
    resources: [
      {
        title: "Python for Data Science and Machine Learning Bootcamp",
        type: "Online Course",
        link: "#",
      },
      {
        title: "Hands-On Machine Learning with Scikit-Learn & TensorFlow",
        type: "Book",
        link: "#",
      },
      {
        title: "Data Science for Beginners: A 2025 Guide",
        type: "Guide",
        link: "#",
      },
    ],
  },
  "ux-design": {
    title: "UX/UI Design",
    description:
      "UX/UI design focuses on creating meaningful and relevant experiences for users. This field encompasses the entire process of acquiring and integrating a product, including aspects of branding, design, usability, and function.",
    roles: [
      "UX Designer",
      "UI Designer",
      "Product Designer",
      "Interaction Designer",
      "UX Researcher",
      "Information Architect",
      "Visual Designer",
      "Usability Analyst",
    ],
    skills: [
      { name: "User Research", level: 85 },
      { name: "Wireframing & Prototyping", level: 90 },
      { name: "Visual Design", level: 80 },
      { name: "User Testing", level: 75 },
      { name: "Information Architecture", level: 70 },
    ],
    salary: { entry: "$65,000", mid: "$95,000", senior: "$130,000+" },
    demand: "High",
    growth: "18% (faster than average)",
    education: [
      "Bachelor's in Design",
      "UX Certificate Programs",
      "Self-taught with strong portfolio",
    ],
    resources: [
      {
        title: "UX Design Institute Professional Diploma",
        type: "Certification",
        link: "#",
      },
      { title: "Don't Make Me Think", type: "Book", link: "#" },
      { title: "Advanced UI/UX Workshop 2025", type: "Workshop", link: "#" },
    ],
  },
  "digital-marketing": {
    title: "Digital Marketing",
    description:
      "Digital marketing leverages digital channels such as search engines, social media, email, and websites to connect with current and prospective customers. It includes a wide range of tactics and strategies to engage audiences across digital platforms.",
    roles: [
      "SEO Specialist",
      "Content Marketer",
      "Social Media Manager",
      "PPC Specialist",
      "Email Marketing Specialist",
      "Digital Marketing Manager",
      "Growth Hacker",
      "Conversion Rate Optimizer",
    ],
    skills: [
      { name: "SEO/SEM", level: 85 },
      { name: "Social Media Marketing", level: 90 },
      { name: "Content Creation", level: 80 },
      { name: "Analytics & Data", level: 75 },
      { name: "Email Marketing", level: 70 },
    ],
    salary: { entry: "$50,000", mid: "$75,000", senior: "$110,000+" },
    demand: "High",
    growth: "20% (faster than average)",
    education: [
      "Bachelor's in Marketing",
      "Digital Marketing Certifications",
      "Self-taught with proven results",
    ],
    resources: [
      {
        title: "Google Digital Marketing Certification",
        type: "Certification",
        link: "#",
      },
      { title: "Building a StoryBrand", type: "Book", link: "#" },
      { title: "Advanced Analytics for Marketers", type: "Course", link: "#" },
    ],
  },
  "project-management": {
    title: "Project Management",
    description:
      "Project management involves planning, organizing, and overseeing the completion of specific business objectives. Project managers lead teams, manage resources, and ensure projects are completed on time, within scope, and on budget.",
    roles: [
      "Project Manager",
      "Program Manager",
      "Scrum Master",
      "Agile Coach",
      "Product Owner",
      "Project Coordinator",
      "PMO Manager",
      "Operations Manager",
    ],
    skills: [
      { name: "Planning & Scheduling", level: 90 },
      { name: "Risk Management", level: 85 },
      { name: "Leadership", level: 80 },
      { name: "Stakeholder Management", level: 75 },
      { name: "Agile Methodologies", level: 85 },
    ],
    salary: { entry: "$60,000", mid: "$90,000", senior: "$125,000+" },
    demand: "Steady",
    growth: "15% (faster than average)",
    education: [
      "Bachelor's in Business",
      "PMP Certification",
      "Scrum Master Certification",
    ],
    resources: [
      {
        title: "Project Management Professional (PMP)",
        type: "Certification",
        link: "#",
      },
      { title: "Agile Practice Guide", type: "Book", link: "#" },
      {
        title: "Advanced Leadership for Project Managers",
        type: "Workshop",
        link: "#",
      },
    ],
  },
};

// Sample questions and responses for the chatbot
const botResponses = {
  greetings: [
    "Hi there! I'm your CareerPulse AI assistant. How can I help with your career plans today?",
    "Hello! Welcome to CareerPulse. I'm here to help you navigate your professional journey. What would you like to discuss?",
    "Good day! I'm your career consultant AI. Ask me anything about career paths, skills, or job opportunities!",
  ],
  suggestions: [
    "What career would suit my interests?",
    "What skills are in demand for 2025?",
    "How do I transition to tech from another field?",
    "Review my resume",
    "Help me prepare for interviews",
    "What salary can I expect in [field]?",
  ],
  fallback: [
    "I'm not quite sure I understand. Could you rephrase that?",
    "That's an interesting question. Let me help you rephrase that to get better information.",
    "I'd like to help you better. Could you provide more details about what you're looking for?",
  ],
  skills: {
    tech: [
      "Programming (Python, JavaScript, Java)",
      "Cloud Computing",
      "Data Analysis",
      "AI & Machine Learning",
      "Cybersecurity",
      "DevOps",
      "Blockchain",
    ],
    soft: [
      "Critical Thinking",
      "Communication",
      "Adaptability",
      "Emotional Intelligence",
      "Collaboration",
      "Problem-solving",
      "Time Management",
    ],
    emerging: [
      "Quantum Computing",
      "Extended Reality (AR/VR)",
      "Neuro-technology",
      "Green Tech",
      "Biotechnology",
      "Robotics",
    ],
  },
  interview: {
    common: [
      "Tell me about yourself",
      "Why do you want to work here?",
      "What are your greatest strengths/weaknesses?",
      "Where do you see yourself in 5 years?",
      "Describe a challenging situation and how you handled it",
    ],
    technical: [
      "Coding challenges",
      "System design questions",
      "Technical problem-solving scenarios",
      "Knowledge-based questions specific to the field",
    ],
    tips: [
      "Research the company thoroughly before the interview",
      "Prepare specific examples of your achievements",
      "Practice the STAR method for behavioral questions",
      "Prepare thoughtful questions to ask the interviewer",
      "Follow up with a thank-you note after the interview",
    ],
  },
  resume: {
    tips: [
      "Tailor your resume for each job application",
      "Quantify achievements with numbers when possible",
      "Keep it concise (1-2 pages)",
      "Use action verbs to describe responsibilities",
      "Include relevant keywords for ATS systems",
      "Proofread carefully for errors",
    ],
    sections: [
      "Contact Information",
      "Professional Summary",
      "Work Experience",
      "Skills",
      "Education",
      "Projects/Portfolio",
      "Certifications",
      "Volunteer Work",
    ],
  },
  transition: {
    steps: [
      "Identify transferable skills from your current role",
      "Fill skill gaps through courses, boot camps, or self-learning",
      "Build a portfolio of projects in your target field",
      "Network with professionals in your desired industry",
      "Consider starting with hybrid roles that use both old and new skills",
      "Be prepared to start at a junior level initially",
    ],
    success: [
      "Sara: Marketing → UX Design by leveraging user psychology knowledge",
      "Michael: Teaching → Data Science through analytical skills transfer",
      "Priya: Accounting → Project Management via organizational excellence",
      "David: Retail → Sales Development using customer service expertise",
    ],
  },
  assessment: {
    questions: [
      {
        text: "I prefer working with:",
        options: [
          "Data and information",
          "Creative concepts and designs",
          "People and relationships",
          "Systems and processes",
        ],
      },
      {
        text: "I am most fulfilled when I:",
        options: [
          "Solve complex problems",
          "Express creativity",
          "Help others achieve their goals",
          "Create efficient systems",
        ],
      },
      {
        text: "My ideal work environment is:",
        options: [
          "Structured with clear objectives",
          "Flexible and continuously changing",
          "Collaborative with lots of interaction",
          "Independent with focus time",
        ],
      },
      {
        text: "I learn best through:",
        options: [
          "Reading and researching",
          "Hands-on practice",
          "Discussion and collaboration",
          "Observation and analysis",
        ],
      },
      {
        text: "My biggest strength is:",
        options: [
          "Analytical thinking",
          "Creative ideation",
          "Communication and empathy",
          "Organization and planning",
        ],
      },
    ],
  },
  industries: {
    growth: [
      "Healthcare Technology",
      "Renewable Energy",
      "Cybersecurity",
      "AI & Machine Learning",
      "Remote Work Solutions",
      "EdTech",
      "FinTech",
      "Biotechnology",
    ],
    decline: [
      "Traditional Retail",
      "Print Media",
      "Traditional Banking",
      "Coal and Oil Industries",
      "Basic Data Entry",
    ],
    emerging: [
      "Space Technology",
      "Synthetic Biology",
      "Quantum Computing",
      "Sustainable Fashion",
      "Vertical Farming",
      "Augmented Reality Services",
    ],
  },
  courses: [
    {
      title: "Data Science Fundamentals",
      provider: "DataCamp",
      duration: "8 weeks",
      cost: "$499",
      rating: "4.8/5",
    },
    {
      title: "Full-Stack Web Development",
      provider: "Codecademy Pro",
      duration: "6 months",
      cost: "$39.99/month",
      rating: "4.6/5",
    },
    {
      title: "UX/UI Design Bootcamp",
      provider: "Design Academy",
      duration: "12 weeks",
      cost: "$6,500",
      rating: "4.9/5",
    },
    {
      title: "Digital Marketing Masterclass",
      provider: "Marketing Pro",
      duration: "10 weeks",
      cost: "$799",
      rating: "4.7/5",
    },
    {
      title: "Project Management Professional",
      provider: "PMI",
      duration: "Self-paced",
      cost: "$995",
      rating: "4.8/5",
    },
  ],
  certifications: [
    {
      title: "AWS Certified Solutions Architect",
      provider: "Amazon Web Services",
      validity: "3 years",
      cost: "$150",
      value: "Very High",
    },
    {
      title: "Google Professional Data Engineer",
      provider: "Google Cloud",
      validity: "2 years",
      cost: "$200",
      value: "High",
    },
    {
      title: "Project Management Professional (PMP)",
      provider: "PMI",
      validity: "3 years",
      cost: "$555",
      value: "Very High",
    },
    {
      title: "Certified Information Systems Security Professional (CISSP)",
      provider: "ISC²",
      validity: "3 years",
      cost: "$699",
      value: "Very High",
    },
    {
      title: "Professional Scrum Master (PSM)",
      provider: "Scrum.org",
      validity: "Lifetime",
      cost: "$150",
      value: "High",
    },
  ],
  job_market: {
    trends: [
      "Remote work becoming permanent for many roles",
      "Increased emphasis on digital skills across all industries",
      "Growing importance of soft skills alongside technical abilities",
      "Rise of contract and gig economy work",
      "Automation displacing some roles while creating others",
      "Growing demand for sustainability and green technology experts",
    ],
    hiring_practices: [
      "Video interviews now standard practice",
      "Skills-based hiring over degree requirements",
      "AI-powered resume screening and candidate matching",
      "Asynchronous interview rounds",
      "Work sample tests replacing traditional interviews",
      "Emphasis on diversity, equity and inclusion",
    ],
  },
};

// DOM elements
const chatMessages = document.getElementById("chat-messages");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");
const clearChatButton = document.getElementById("clear-chat");
const careerOptions = document.querySelectorAll(".career-option");
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");
const modal = document.getElementById("assessment-modal");
const closeModal = document.querySelector(".close-modal");
const assessmentContent = document.getElementById("assessment-content");
const notification = document.getElementById("notification");

// State variables
let typingTimeout;
let currentCareer = null;
let assessmentResults = {};
let messageHistory = [];

// Initialize chat
function initChat() {
  // Add welcome message
  const welcomeMessage = createBotMessageElement(
    getRandomResponse(botResponses.greetings)
  );
  chatMessages.appendChild(welcomeMessage);

  // Add suggestions
  const suggestionsElement = document.createElement("div");
  suggestionsElement.className = "suggestions";
  botResponses.suggestions.forEach((suggestion) => {
    const pill = document.createElement("div");
    pill.className = "suggestion-pill";
    pill.textContent = suggestion;
    pill.addEventListener("click", () => {
      handleUserMessage(suggestion);
    });
    suggestionsElement.appendChild(pill);
  });
  chatMessages.appendChild(suggestionsElement);

  // Scroll to bottom
  scrollToBottom();

  // Add chat functionality
  userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });

  sendButton.addEventListener("click", sendMessage);
  clearChatButton.addEventListener("click", clearChat);

  // Career options click handlers
  careerOptions.forEach((option) => {
    option.addEventListener("click", () => {
      const career = option.getAttribute("data-career");
      currentCareer = career;
      displayCareerInfo(career);
      if (window.innerWidth <= 992) {
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
      }
    });
  });

  // Mobile menu
  mobileMenuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
  });

  overlay.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  });

  // Modal handlers
  closeModal.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  // Auto-resize textarea
  userInput.addEventListener("input", () => {
    userInput.style.height = "auto";
    userInput.style.height = userInput.scrollHeight + "px";
  });

  // Add mouse move effect for glow
  const glow = document.querySelector(".glow");
  document.addEventListener("mousemove", (e) => {
    if (window.innerWidth > 992) {
      glow.style.left = e.pageX - 150 + "px";
      glow.style.top = e.pageY - 150 + "px";
    }
  });

  // Simulate notification after 30 seconds
  setTimeout(() => {
    showNotification();
  }, 30000);
}

// Helper function to get random response
function getRandomResponse(responses) {
  return responses[Math.floor(Math.random() * responses.length)];
}

// Function to send message
function sendMessage() {
  const message = userInput.value.trim();
  if (message) {
    handleUserMessage(message);
    userInput.value = "";
    userInput.style.height = "auto";
  }
}

// Function to handle user message
function handleUserMessage(message) {
  // Add user message to chat
  const userMessageElement = createUserMessageElement(message);
  chatMessages.appendChild(userMessageElement);
  messageHistory.push({ role: "user", content: message });

  // Show typing indicator
  const typingIndicator = document.createElement("div");
  typingIndicator.className = "bot-typing";
  typingIndicator.innerHTML = `
                <div class="typing-indicator">
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                </div>
            `;
  chatMessages.appendChild(typingIndicator);
  scrollToBottom();

  // Process user input and generate response
  let response = processUserInput(message);

  // Simulate delay for bot response
  clearTimeout(typingTimeout);
  typingTimeout = setTimeout(() => {
    // Remove typing indicator
    chatMessages.removeChild(typingIndicator);

    // Add bot response
    const botResponseElement = createBotMessageElement(response);
    chatMessages.appendChild(botResponseElement);
    messageHistory.push({ role: "assistant", content: response });

    // Add new suggestions based on context
    if (!message.toLowerCase().includes("assessment")) {
      addContextualSuggestions(message);
    }

    scrollToBottom();
  }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
}

// Process user input
function processUserInput(message) {
  message = message.toLowerCase();

  // Check for specific keywords and provide relevant responses
  if (
    message.includes("hello") ||
    message.includes("hi") ||
    message.includes("hey")
  ) {
    return getRandomResponse(botResponses.greetings);
  } else if (
    message.includes("skills") ||
    message.includes("abilities") ||
    message.includes("what should i learn")
  ) {
    return generateSkillsResponse();
  } else if (
    message.includes("interview") ||
    message.includes("prepare for interview")
  ) {
    return generateInterviewResponse();
  } else if (message.includes("resume") || message.includes("cv")) {
    return generateResumeResponse();
  } else if (
    message.includes("transition") ||
    message.includes("change career") ||
    message.includes("switch job")
  ) {
    return generateTransitionResponse();
  } else if (
    message.includes("assessment") ||
    message.includes("quiz") ||
    message.includes("test my fit")
  ) {
    startAssessment();
    return "I've prepared a career assessment for you! This will help identify your strengths and potential career matches. Just answer a few questions about your preferences and working style.";
  } else if (
    message.includes("salary") ||
    message.includes("pay") ||
    message.includes("compensation")
  ) {
    return generateSalaryResponse(message);
  } else if (
    message.includes("industry") ||
    message.includes("sector") ||
    message.includes("field")
  ) {
    return generateIndustryResponse();
  } else if (
    message.includes("course") ||
    message.includes("training") ||
    message.includes("learn")
  ) {
    return generateCoursesResponse();
  } else if (
    message.includes("certification") ||
    message.includes("certificate")
  ) {
    return generateCertificationResponse();
  } else if (
    message.includes("job market") ||
    message.includes("hiring") ||
    message.includes("trends")
  ) {
    return generateJobMarketResponse();
  } else if (
    message.includes("tech") ||
    message.includes("software") ||
    message.includes("development")
  ) {
    currentCareer = "software-engineering";
    displayCareerInfo("software-engineering");
    return `I've pulled up information about Software Engineering careers for you. This field has a ${careerData["software-engineering"].growth} growth rate and offers excellent opportunities. Would you like to know more about specific roles or required skills?`;
  } else if (
    message.includes("data") ||
    message.includes("analytics") ||
    message.includes("machine learning")
  ) {
    currentCareer = "data-science";
    displayCareerInfo("data-science");
    return `Here's information about Data Science careers. This field has a ${careerData["data-science"].growth} growth rate and is in ${careerData["data-science"].demand} demand. Is there a particular aspect of data science you'd like to explore further?`;
  } else if (
    message.includes("design") ||
    message.includes("ux") ||
    message.includes("ui")
  ) {
    currentCareer = "ux-design";
    displayCareerInfo("ux-design");
    return `I've found information about UX/UI Design careers for you. This creative field has a ${careerData["ux-design"].growth} growth rate. Would you like more details about the day-to-day responsibilities or required skills?`;
  } else if (
    message.includes("marketing") ||
    message.includes("seo") ||
    message.includes("content")
  ) {
    currentCareer = "digital-marketing";
    displayCareerInfo("digital-marketing");
    return `Here's information about Digital Marketing careers. This dynamic field has a ${careerData["digital-marketing"].growth} growth rate. Would you like to know more about specific marketing specializations?`;
  } else if (
    message.includes("project") ||
    message.includes("management") ||
    message.includes("manager")
  ) {
    currentCareer = "project-management";
    displayCareerInfo("project-management");
    return `I've pulled up information about Project Management careers. This field has a ${careerData["project-management"].growth} growth rate. Would you like to learn more about certifications that could boost your career?`;
  } else {
    return (
      getRandomResponse(botResponses.fallback) +
      " In the meantime, you can ask me about specific careers, skills in demand, interview preparation, or salary expectations. Or you can explore the career options in the sidebar."
    );
  }
}

// Create bot message element
function createBotMessageElement(message) {
  const messageElement = document.createElement("div");
  messageElement.className = "message bot";

  // Check if message contains HTML
  if (message.includes("<") && message.includes(">")) {
    messageElement.innerHTML = `${message}<div class="message-time">${getCurrentTime()}</div>`;
  } else {
    const textP = document.createElement("p");
    textP.textContent = message;
    messageElement.appendChild(textP);

    const timeDiv = document.createElement("div");
    timeDiv.className = "message-time";
    timeDiv.textContent = getCurrentTime();
    messageElement.appendChild(timeDiv);
  }

  return messageElement;
}

// Create user message element
function createUserMessageElement(message) {
  const messageElement = document.createElement("div");
  messageElement.className = "message user";

  const textP = document.createElement("p");
  textP.textContent = message;
  messageElement.appendChild(textP);

  const timeDiv = document.createElement("div");
  timeDiv.className = "message-time";
  timeDiv.textContent = getCurrentTime();
  messageElement.appendChild(timeDiv);

  return messageElement;
}

// Get current time in format HH:MM AM/PM
function getCurrentTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // Convert 0 to 12
  return `${hours}:${minutes} ${ampm}`;
}

// Scroll chat to bottom
function scrollToBottom() {
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Clear chat
function clearChat() {
  // Keep only the welcome message
  while (chatMessages.children.length > 0) {
    chatMessages.removeChild(chatMessages.lastChild);
  }

  // Reset chat
  messageHistory = [];
  initChat();
}

// Display career information
function displayCareerInfo(career) {
  if (!careerData[career]) return;

  const data = careerData[career];

  // Create bot response with career information
  let response = `
                <h3>${data.title}</h3>
                <p>${data.description}</p>
                
                <div class="quick-data">
                    <div class="data-card">
                        <h5>Average Salary</h5>
                        <p>${data.salary.mid}</p>
                    </div>
                    <div class="data-card">
                        <h5>Market Demand</h5>
                        <p>${data.demand}</p>
                    </div>
                    <div class="data-card">
                        <h5>Growth Rate</h5>
                        <p>${data.growth}</p>
                    </div>
                </div>
                
                <h4 style="margin-top: 1rem;">Key Skills</h4>
                <div class="skill-bars">
            `;

  // Add skill bars
  data.skills.forEach((skill) => {
    response += `
                    <div class="skill-bar">
                        <div class="skill-info">
                            <span>${skill.name}</span>
                            <span>${skill.level}%</span>
                        </div>
                        <div class="skill-progress">
                            <div class="skill-fill" style="width: ${skill.level}%"></div>
                        </div>
                    </div>
                `;
  });

  response += `
                </div>
                
                <h4 style="margin-top: 1rem;">Common Roles</h4>
                <p>${data.roles.join(", ")}</p>
                
                <h4 style="margin-top: 1rem;">Recommended Resources</h4>
            `;

  // Add resources
  data.resources.forEach((resource) => {
    response += `
                    <div class="resource-card">
                        <h4>${resource.title}</h4>
                        <p>${resource.type}</p>
                        <a href="${resource.link}" class="resource-link">
                            <i class="fas fa-external-link-alt"></i> Learn more
                        </a>
                    </div>
                `;
  });

  const botResponse = createBotMessageElement(response);
  chatMessages.appendChild(botResponse);
  messageHistory.push({
    role: "assistant",
    content: "Here is information about " + data.title,
  });

  // Add contextual follow-up suggestions
  const suggestionsElement = document.createElement("div");
  suggestionsElement.className = "suggestions";

  const suggestions = [
    `What education is needed for ${data.title}?`,
    `Day-to-day responsibilities in ${data.title}`,
    `Top companies hiring for ${data.title}`,
  ];

  suggestions.forEach((suggestion) => {
    const pill = document.createElement("div");
    pill.className = "suggestion-pill";
    pill.textContent = suggestion;
    pill.addEventListener("click", () => {
      handleUserMessage(suggestion);
    });
    suggestionsElement.appendChild(pill);
  });

  chatMessages.appendChild(suggestionsElement);
  scrollToBottom();
}

// Add contextual suggestions based on user message
function addContextualSuggestions(message) {
  message = message.toLowerCase();

  const suggestionsElement = document.createElement("div");
  suggestionsElement.className = "suggestions";

  let suggestions = [];

  if (message.includes("skill")) {
    suggestions = [
      "Most in-demand tech skills",
      "Soft skills for leadership",
      "Skills for career advancement",
    ];
  } else if (message.includes("interview")) {
    suggestions = [
      "Common behavioral questions",
      "Technical interview tips",
      "Questions to ask interviewer",
    ];
  } else if (message.includes("resume")) {
    suggestions = [
      "Resume templates",
      "How to highlight achievements",
      "Resume keywords for ATS",
    ];
  } else if (message.includes("salary")) {
    suggestions = [
      "Salary negotiation tips",
      "Benefits beyond salary",
      "Market rate for my position",
    ];
  } else if (currentCareer) {
    const career = careerData[currentCareer].title;
    suggestions = [
      `Day-to-day work in ${career}`,
      `Advancement path in ${career}`,
      `Work-life balance in ${career}`,
    ];
  } else {
    return; // No contextual suggestions needed
  }

  suggestions.forEach((suggestion) => {
    const pill = document.createElement("div");
    pill.className = "suggestion-pill";
    pill.textContent = suggestion;
    pill.addEventListener("click", () => {
      handleUserMessage(suggestion);
    });
    suggestionsElement.appendChild(pill);
  });

  chatMessages.appendChild(suggestionsElement);
  scrollToBottom();
}

// Generate skills response
function generateSkillsResponse() {
  let response = "Here are some in-demand skills for 2025:\n\n";

  response += botResponses.skills.tech.join(", ") + "\n\n";
  response +=
    "Key soft skills:\n" + botResponses.skills.soft.join(", ") + "\n\n";
  response +=
    "Emerging technologies:\n" + botResponses.skills.emerging.join(", ");

  return response;
}

// Generate interview response
function generateInterviewResponse() {
  let response = "Here are some tips for interview preparation:\n\n";

  response += "Common behavioral questions:\n";
  botResponses.interview.common.forEach((question) => {
    response += `- ${question}\n`;
  });

  response += "\nTechnical interview questions:\n";
  botResponses.interview.technical.forEach((question) => {
    response += `- ${question}\n`;
  });

  response += "\nGeneral interview tips:\n";
  botResponses.interview.tips.forEach((tip) => {
    response += `- ${tip}\n`;
  });

  return response;
}

// Generate resume response
function generateResumeResponse() {
  let response = "Here are some tips for crafting an effective resume:\n\n";

  botResponses.resume.tips.forEach((tip) => {
    response += `- ${tip}\n`;
  });

  response += "\nKey resume sections to include:\n";
  botResponses.resume.sections.forEach((section) => {
    response += `- ${section}\n`;
  });

  return response;
}

// Generate transition response
function generateTransitionResponse() {
  let response =
    "Transitioning to a new career can be challenging, but very doable. Here are some steps to consider:\n\n";

  botResponses.transition.steps.forEach((step) => {
    response += `- ${step}\n`;
  });

  response += "\nHere are some success stories of career transitions:\n\n";
  botResponses.transition.success.forEach((story) => {
    response += `- ${story}\n`;
  });

  return response;
}

// Generate salary response
function generateSalaryResponse(message) {
  if (currentCareer) {
    const careerData = careerData[currentCareer];
    return `The average salary range for ${careerData.title} roles is:\n\nEntry-level: ${careerData.salary.entry}\nMid-level: ${careerData.salary.mid}\nSenior-level: ${careerData.salary.senior}`;
  } else {
    return "Salaries can vary widely depending on the career field, location, experience level, and other factors. Let me know which career you're interested in and I can provide more specific salary information.";
  }
}

// Generate industry response
function generateIndustryResponse() {
  let response =
    "Here are some industry trends to be aware of:\n\nGrowing industries:\n";

  botResponses.industries.growth.forEach((industry) => {
    response += `- ${industry}\n`;
  });

  response += "\nDeclining industries:\n";
  botResponses.industries.decline.forEach((industry) => {
    response += `- ${industry}\n`;
  });

  response += "\nEmerging industries:\n";
  botResponses.industries.emerging.forEach((industry) => {
    response += `- ${industry}\n`;
  });

  return response;
}

// Generate courses response
function generateCoursesResponse() {
  let response = "Here are some highly-rated online courses to consider:\n\n";

  botResponses.courses.forEach((course) => {
    response += `${course.title} (${course.provider}) - ${course.duration}, $${course.cost}, Rating: ${course.rating}\n\n`;
  });

  return response;
}

// Generate certifications response
function generateCertificationResponse() {
  let response = "Here are some valuable certifications to consider:\n\n";

  botResponses.certifications.forEach((cert) => {
    response += `${cert.title} (${cert.provider}) - Validity: ${cert.validity}, Cost: $${cert.cost}, Value: ${cert.value}\n\n`;
  });

  return response;
}

// Generate job market response
function generateJobMarketResponse() {
  let response =
    "Here are some key trends in the job market:\n\nJob Market Trends:\n";

  botResponses.job_market.trends.forEach((trend) => {
    response += `- ${trend}\n`;
  });

  response += "\nHiring Practices:\n";
  botResponses.job_market.hiring_practices.forEach((practice) => {
    response += `- ${practice}\n`;
  });

  return response;
}

// Start career assessment
function startAssessment() {
  modal.classList.add("active");

  // Clear previous assessment results
  assessmentResults = {};

  // Generate assessment questions
  let assessmentHTML = "";
  botResponses.assessment.questions.forEach((question) => {
    assessmentHTML += `
      <div class="assessment-question">
        <h4>${question.text}</h4>
        <div class="assessment-options">
    `;

    question.options.forEach((option) => {
      assessmentHTML += `
        <div class="assessment-option">
          <input type="radio" name="${question.text}" value="${option}">
          <label>${option}</label>
        </div>
      `;
    });

    assessmentHTML += `
        </div>
      </div>
    `;
  });

  assessmentContent.innerHTML = assessmentHTML;

  // Add event listener for assessment submission
  const assessmentForm = document.querySelector("#assessment-form");
  assessmentForm.addEventListener("submit", submitAssessment);
}

// Submit career assessment
function submitAssessment(event) {
  event.preventDefault();

  // Collect assessment results
  const assessmentOptions = document.querySelectorAll(
    ".assessment-option input"
  );
  assessmentOptions.forEach((option) => {
    if (option.checked) {
      const question = option
        .closest(".assessment-question")
        .querySelector("h4").textContent;
      assessmentResults[question] = option.value;
    }
  });

  // Process assessment results and provide recommendation
  processAssessmentResults();

  // Close the assessment modal
  modal.classList.remove("active");
}

// Process assessment results and provide recommendation
function processAssessmentResults() {
  let recommendedCareer = null;
  let highestMatch = 0;

  // Analyze assessment results and find best career match
  for (const career in careerData) {
    let matchScore = 0;
    const careerSkills = careerData[career].skills.map((skill) =>
      skill.name.toLowerCase()
    );

    for (const question in assessmentResults) {
      const answer = assessmentResults[question].toLowerCase();
      if (careerSkills.some((skill) => answer.includes(skill))) {
        matchScore += 1;
      }
    }

    if (matchScore > highestMatch) {
      highestMatch = matchScore;
      recommendedCareer = career;
    }
  }

  // Display the recommended career
  if (recommendedCareer) {
    const response = `Based on your assessment, the career that best fits your skills and preferences is ${careerData[recommendedCareer].title}. Would you like me to provide more details about this field?`;
    const botResponse = createBotMessageElement(response);
    chatMessages.appendChild(botResponse);
    messageHistory.push({ role: "assistant", content: response });
    currentCareer = recommendedCareer;
    displayCareerInfo(recommendedCareer);
  } else {
    const response =
      "I'm sorry, I couldn't find a clear career match based on your assessment. Let's try discussing your interests and skills in more detail to see if I can provide a better recommendation.";
    const botResponse = createBotMessageElement(response);
    chatMessages.appendChild(botResponse);
    messageHistory.push({ role: "assistant", content: response });
  }

  scrollToBottom();
}

// Show notification
function showNotification() {
  notification.classList.add("active");
  setTimeout(() => {
    notification.classList.remove("active");
  }, 5000);
}

// Initialize the chatbot
initChat();
