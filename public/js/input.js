const userData = {
  currentStatus: "",
  education: "",
  field: "",
  techSkills: [],
  otherTechSkills: "",
  businessSkills: [],
  otherBusinessSkills: "",
  healthcareSkills: [],
  otherHealthcareSkills: "",
  generalSkills: "",
  experienceYears: 5,
  workEnvironment: "",
  workValues: "",
  careerGoals: "",
  strengths: [],
};

let dynamicSkillSlideInserted = false;
let selectedField = null;

let slidesOrder = [
  "question1",
  "question2",
  "question3",
  "question5",
  "question6",
  "question7",
  "question8",
  "results",
];
let currentSlideIndex = 0;

const fieldToSkillSlide = {
  technology: "question4-tech",
  business: "question4-business",
  healthcare: "question4-healthcare",
  arts: "question4-other",
  engineering: "question4-other",
  science: "question4-other",
  education: "question4-other",
  other: "question4-other",
};

const progressBar = document.getElementById("progressBar");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");
const submitBtn = document.getElementById("submitBtn");
const dashboardBtn = document.getElementById("dashboard-btn");
const loadingOverlay = document.getElementById("loadingOverlay");
const content = document.getElementById("content");
const errorMessage = document.getElementById("errorMessage");
const experienceSlider = document.getElementById("experienceSlider");
const experienceValue = document.getElementById("experienceValue");
const allSlides = document.querySelectorAll(".question-slide");

dashboardBtn.addEventListener("click", () => {
  console.log("Dashboard button clicked, redirecting to /dashboard");
  window.location.href = "/dashboard";
});

document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("token");
  console.log("Token on load:", token);
  if (!token) {
    showError("Please log in to continue.");
    setTimeout(() => {
      console.log("Redirecting to /auth due to missing token");
      window.location.href = "/auth";
    }, 2000);
    return;
  }

  setupOptionClicks();
  setupCheckboxes();
  showSlide(slidesOrder[currentSlideIndex]);
  updateProgress();

  nextBtn.addEventListener("click", handleNext);
  backBtn.addEventListener("click", handleBack);
  experienceSlider.addEventListener("input", updateExperience);
  submitBtn.addEventListener("click", handleSubmit);
});

function showSlide(slideId) {
  allSlides.forEach((slide) => slide.classList.remove("active"));
  const targetSlide = document.getElementById(slideId);
  if (targetSlide) targetSlide.classList.add("active");
}

function updateProgress() {
  const totalSlides = slidesOrder.length;
  const progress = ((currentSlideIndex + 1) / totalSlides) * 100;
  progressBar.style.width = progress + "%";
}

function setupOptionClicks() {
  document.querySelectorAll(".option-item").forEach((item) => {
    item.addEventListener("click", function () {
      const container = this.parentElement;
      container
        .querySelectorAll(".option-item")
        .forEach((sib) => sib.classList.remove("selected"));
      this.classList.add("selected");
    });
  });
}

function setupCheckboxes() {}

function handleNext() {
  if (!validateAndStoreData(slidesOrder[currentSlideIndex])) return;

  if (
    slidesOrder[currentSlideIndex] === "question3" &&
    !dynamicSkillSlideInserted
  ) {
    const skillSlideId = fieldToSkillSlide[selectedField] || "question4-other";
    slidesOrder.splice(3, 0, skillSlideId);
    dynamicSkillSlideInserted = true;
  }

  if (currentSlideIndex === slidesOrder.length - 2) {
    currentSlideIndex++;
    showSlide(slidesOrder[currentSlideIndex]);
    updateProgress();
    loadingOverlay.classList.add("active");
    setTimeout(() => {
      loadingOverlay.classList.remove("active");
      generateCareerMatches();
    }, 2000);
  } else if (currentSlideIndex < slidesOrder.length - 1) {
    currentSlideIndex++;
    showSlide(slidesOrder[currentSlideIndex]);
    updateProgress();
    toggleSubmitButton();
  }
}

function handleBack() {
  if (currentSlideIndex > 0) {
    currentSlideIndex--;
    showSlide(slidesOrder[currentSlideIndex]);
    updateProgress();
    toggleSubmitButton();
  }
}

function toggleSubmitButton() {
  submitBtn.style.display =
    currentSlideIndex === slidesOrder.length - 1 ? "block" : "none";
  nextBtn.style.display =
    currentSlideIndex === slidesOrder.length - 1 ? "none" : "block";
}

function updateExperience() {
  experienceValue.textContent = experienceSlider.value + " years";
  userData.experienceYears = parseInt(experienceSlider.value, 10);
}

function validateAndStoreData(slideId) {
  errorMessage.style.display = "none";
  switch (slideId) {
    case "question1":
      const status = getSelectedOption("question1");
      if (!status) {
        showError("Please select your current status.");
        return false;
      }
      userData.currentStatus = status;
      break;
    case "question2":
      const education = getSelectedOption("question2");
      if (!education) {
        showError("Please select your education level.");
        return false;
      }
      userData.education = education;
      break;
    case "question3":
      const field = getSelectedOption("question3");
      if (!field) {
        showError("Please select your field of study or work.");
        return false;
      }
      userData.field = field;
      selectedField = field;
      break;
    case "question4-tech":
      userData.techSkills = getCheckedValues([
        "#skill1",
        "#skill2",
        "#skill3",
        "#skill4",
        "#skill5",
        "#skill6",
        "#skill7",
        "#skill8",
        "#skill9",
        "#skill10",
      ]);
      userData.otherTechSkills = document
        .getElementById("otherTechSkills")
        .value.trim();
      break;
    case "question4-business":
      userData.businessSkills = getCheckedValues([
        "#bskill1",
        "#bskill2",
        "#bskill3",
        "#bskill4",
        "#bskill5",
        "#bskill6",
        "#bskill7",
        "#bskill8",
      ]);
      userData.otherBusinessSkills = document
        .getElementById("otherBusinessSkills")
        .value.trim();
      break;
    case "question4-healthcare":
      userData.healthcareSkills = getCheckedValues([
        "#hskill1",
        "#hskill2",
        "#hskill3",
        "#hskill4",
        "#hskill5",
        "#hskill6",
        "#hskill7",
        "#hskill8",
      ]);
      userData.otherHealthcareSkills = document
        .getElementById("otherHealthcareSkills")
        .value.trim();
      break;
    case "question4-other":
      userData.generalSkills = document
        .getElementById("generalSkills")
        .value.trim();
      break;
    case "question5":
      const workEnv = getSelectedOption("question5");
      if (!workEnv) {
        showError("Please select your preferred work environment.");
        return false;
      }
      userData.workEnvironment = workEnv;
      break;
    case "question6":
      const workValues = getSelectedOption("question6");
      if (!workValues) {
        showError("Please select a key career value.");
        return false;
      }
      userData.workValues = workValues;
      break;
    case "question7":
      const careerGoals = getSelectedOption("question7");
      if (!careerGoals) {
        showError("Please select a career goal.");
        return false;
      }
      userData.careerGoals = careerGoals;
      break;
    case "question8":
      userData.strengths = getCheckedValues([
        "#strength1",
        "#strength2",
        "#strength3",
        "#strength4",
        "#strength5",
        "#strength6",
        "#strength7",
        "#strength8",
        "#strength9",
        "#strength10",
      ]);
      break;
  }
  return true;
}

function getSelectedOption(slideId) {
  const slide = document.getElementById(slideId);
  return slide
    ? slide.querySelector(".option-item.selected")?.getAttribute("data-value")
    : null;
}

function getCheckedValues(selectors) {
  return selectors
    .map((sel) => document.querySelector(sel))
    .filter((cb) => cb?.checked)
    .map((cb) => cb.value);
}

function showError(message) {
  errorMessage.textContent = message;
  errorMessage.style.display = "block";
}

function generateCareerMatches() {
  const resultsContainer = document.getElementById("careerResults");
  resultsContainer.innerHTML = "";

  const careerDataset = [
    {
      title: "Software Engineer",
      field: "technology",
      keywords: [
        "javascript",
        "python",
        "java",
        "csharp",
        "html-css",
        "sql",
        "cloud",
        "devops",
      ],
      description: "Design and maintain software solutions.",
    },
    {
      title: "Data Scientist",
      field: "technology",
      keywords: ["python", "data-analysis", "machine-learning", "sql"],
      description: "Analyze data and build predictive models.",
    },
    {
      title: "Cloud Architect",
      field: "technology",
      keywords: ["cloud", "devops", "sql"],
      description: "Design cloud infrastructures.",
    },
    {
      title: "Project Manager",
      field: "business",
      keywords: ["project-management", "management", "business-analysis"],
      description: "Lead projects and teams.",
    },
    {
      title: "Financial Analyst",
      field: "business",
      keywords: ["accounting", "finance", "business-analysis"],
      description: "Analyze financial data.",
    },
    {
      title: "Nurse",
      field: "healthcare",
      keywords: ["patient-care", "medical-records", "diagnostics"],
      description: "Provide patient care.",
    },
    {
      title: "Clinical Researcher",
      field: "healthcare",
      keywords: ["clinical-research", "diagnostics", "medical-devices"],
      description: "Conduct medical research.",
    },
    {
      title: "Graphic Designer",
      field: "arts",
      keywords: ["creative", "design", "visual"],
      description: "Create visual content.",
    },
    {
      title: "Research Scientist",
      field: "science",
      keywords: ["analytical", "science", "research"],
      description: "Conduct scientific experiments.",
    },
    {
      title: "Teacher",
      field: "education",
      keywords: ["communication", "education", "leadership"],
      description: "Educate and mentor students.",
    },
  ];

  let matchedCareers = careerDataset.filter(
    (career) =>
      userData.field === career.field ||
      (userData.field === "other" &&
        ["arts", "science", "education"].includes(career.field))
  );

  if (matchedCareers.length === 0) matchedCareers = careerDataset;

  matchedCareers.forEach((career) => {
    let score = 0;
    let userSkills = [];
    if (userData.field === "technology")
      userSkills = [
        ...userData.techSkills,
        ...(userData.otherTechSkills
          ? userData.otherTechSkills.split(/\s*,\s*/).filter(Boolean)
          : []),
      ];
    else if (userData.field === "business")
      userSkills = [
        ...userData.businessSkills,
        ...(userData.otherBusinessSkills
          ? userData.otherBusinessSkills.split(/\s*,\s*/).filter(Boolean)
          : []),
      ];
    else if (userData.field === "healthcare")
      userSkills = [
        ...userData.healthcareSkills,
        ...(userData.otherHealthcareSkills
          ? userData.otherHealthcareSkills.split(/\s*,\s*/).filter(Boolean)
          : []),
      ];
    else
      userSkills = userData.generalSkills
        ? userData.generalSkills.split(/\s*,\s*/).filter(Boolean)
        : [];
    userSkills.push(...userData.strengths);

    career.keywords.forEach((kw) => (score += userSkills.includes(kw) ? 1 : 0));
    career.score =
      score +
      (userData.workEnvironment === "remote" && career.title.includes("Remote")
        ? 2
        : 0) +
      (userData.workValues === "compensation" &&
      career.title.includes("Analyst")
        ? 2
        : 0);
    career.matchPercent = Math.round(
      (career.score / (career.keywords.length + 4)) * 100
    );
  });

  matchedCareers.sort((a, b) => b.score - a.score);
  const topResults = matchedCareers.slice(0, 3);

  topResults.forEach((career) => {
    const pathDiv = document.createElement("div");
    pathDiv.classList.add("career-path");
    pathDiv.innerHTML = `
            <div class="career-title">${career.title}</div>
            <div class="career-match">${career.matchPercent}% Match</div>
            <div class="career-description">${career.description}</div>
            <div class="career-skills">
              <h4>Key Skills:</h4>
              <div class="skills-list">${career.keywords
                .map((skill) => `<span class="skill-item">${skill}</span>`)
                .join("")}</div>
            </div>
          `;
    resultsContainer.appendChild(pathDiv);
  });
}

async function handleSubmit() {
  if (!validateAndStoreData(slidesOrder[currentSlideIndex])) return;

  const token = localStorage.getItem("token");
  console.log("Token on submit:", token);
  if (!token) {
    showError("Please log in to submit your preferences.");
    setTimeout(() => {
      console.log("Redirecting to /auth due to missing token");
      window.location.href = "/auth";
    }, 2000);
    return;
  }

  loadingOverlay.classList.add("active");
  try {
    const submitData = { ...userData };
    console.log("Submitting data to /api/submit:", submitData);

    const response = await fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(submitData),
    });

    console.log("Response status:", response.status);
    console.log("Response OK:", response.ok);
    const data = await response.json();
    console.log("Response data:", data);

    if (response.ok && data.success) {
      console.log("Submission successful, redirecting to /dashboard");
      localStorage.setItem("userData", JSON.stringify(submitData)); // Store for dashboard
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 1000);
    } else {
      showError(
        "Failed to save preferences: " + (data.error || "Unknown error")
      );
      console.error("Submission failed:", data.error);
    }
  } catch (error) {
    console.error("Submission error:", error);
    showError("An error occurred during submission. Please try again later.");
  } finally {
    setTimeout(() => {
      loadingOverlay.classList.remove("active");
    }, 1000);
  }
}
