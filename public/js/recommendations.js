const loadingOverlay = document.getElementById("loadingOverlay");
const errorMessage = document.getElementById("errorMessage");
const careerResults = document.getElementById("careerResults");
const aiTyping = document.getElementById("aiTyping");
const backBtn = document.getElementById("backBtn");
const saveBtn = document.getElementById("saveBtn");
const roadmapBtn = document.getElementById("roadmapBtn");

document.addEventListener("DOMContentLoaded", () => {
  loadRecommendations();
  backBtn.addEventListener("click", () => (window.location.href = "/input"));
  saveBtn.addEventListener("click", handleSave);
  roadmapBtn.addEventListener(
    "click",
    () => (window.location.href = "/dashboard")
  );
});

async function loadRecommendations() {
  const token = localStorage.getItem("token");
  if (!token) {
    showError("Please log in to view recommendations.");
    window.location.href = "/auth";
    return;
  }

  loadingOverlay.classList.add("active");
  try {
    const response = await fetch("/api/get-user-data", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) throw new Error("Failed to fetch user data");
    const userData = await response.json();

    aiTyping.style.display = "none";
    generateCareerMatches(userData);
  } catch (error) {
    console.error("Error loading recommendations:", error);
    showError("Failed to load recommendations. Please try again later.");
  } finally {
    loadingOverlay.classList.remove("active");
  }
}

function generateCareerMatches(userData) {
  careerResults.innerHTML = "";

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
      description:
        "Design and maintain software solutions. Ideal for programming enthusiasts.",
    },
    {
      title: "Data Scientist",
      field: "technology",
      keywords: ["python", "data-analysis", "machine-learning", "sql"],
      description:
        "Analyze data and build predictive models. Requires analytical skills.",
    },
    {
      title: "Cloud Architect",
      field: "technology",
      keywords: ["cloud", "devops", "sql"],
      description:
        "Design cloud infrastructures. Great for system enthusiasts.",
    },
    {
      title: "Project Manager",
      field: "business",
      keywords: ["project-management", "management", "business-analysis"],
      description: "Lead projects and teams. Needs leadership skills.",
    },
    {
      title: "Financial Analyst",
      field: "business",
      keywords: ["accounting", "finance", "business-analysis"],
      description: "Analyze financial data. Suited for number crunchers.",
    },
    {
      title: "Nurse",
      field: "healthcare",
      keywords: ["patient-care", "medical-records", "diagnostics"],
      description: "Provide patient care. Requires empathy and adaptability.",
    },
    {
      title: "Clinical Researcher",
      field: "healthcare",
      keywords: ["clinical-research", "diagnostics", "medical-devices"],
      description:
        "Conduct medical research. Ideal for detail-oriented individuals.",
    },
    {
      title: "Graphic Designer",
      field: "arts",
      keywords: ["creative", "design", "visual"],
      description: "Create visual content. Perfect for creative minds.",
    },
    {
      title: "Research Scientist",
      field: "science",
      keywords: ["analytical", "science", "research"],
      description: "Conduct scientific experiments. Suited for curious minds.",
    },
    {
      title: "Teacher",
      field: "education",
      keywords: ["communication", "education", "leadership"],
      description: "Educate and mentor students. Great for communicators.",
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
        ...userData.otherTechSkills.split(/\s*,\s*/),
      ];
    else if (userData.field === "business")
      userSkills = [
        ...userData.businessSkills,
        ...userData.otherBusinessSkills.split(/\s*,\s*/),
      ];
    else if (userData.field === "healthcare")
      userSkills = [
        ...userData.healthcareSkills,
        ...userData.otherHealthcareSkills.split(/\s*,\s*/),
      ];
    else userSkills = userData.generalSkills.split(/\s*,\s*/);
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
            <div class="career-title">
              ${career.title}
              <a href="/career-roadmap?career=${encodeURIComponent(
                career.title
              )}" class="btn btn-primary btn-small">View Roadmap</a>
            </div>
            <div class="career-match">${career.matchPercent}% Match</div>
            <div class="career-description">${career.description}</div>
            <div class="career-skills">
              <h4>Key Skills:</h4>
              <div class="skills-list">${career.keywords
                .map((skill) => `<span class="skill-item">${skill}</span>`)
                .join("")}</div>
            </div>
            <div class="career-recommendation">
              <p>Based on your ${userData.workEnvironment} preference and ${
      userData.careerGoals
    } goal, this career aligns well with your aspirations.</p>
            </div>
          `;
    careerResults.appendChild(pathDiv);
  });
}

function showError(message) {
  errorMessage.textContent = message;
  errorMessage.style.display = "block";
}

async function handleSave() {
  const token = localStorage.getItem("token");
  if (!token) {
    showError("Please log in to save recommendations.");
    return;
  }

  loadingOverlay.classList.add("active");
  try {
    const response = await fetch("/api/save-recommendations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        recommendations: Array.from(careerResults.children).map(
          (child) =>
            child.querySelector(".career-title").textContent.split(" ")[0]
        ),
      }),
    });

    if (response.ok) {
      alert("Recommendations saved successfully!");
      window.location.href = "/dashboard"; // Redirect to dashboard after save
    } else {
      showError("Failed to save recommendations.");
    }
  } catch (error) {
    console.error("Save error:", error);
    showError("An error occurred while saving.");
  } finally {
    loadingOverlay.classList.remove("active");
  }
}
