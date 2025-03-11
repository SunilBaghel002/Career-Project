let answers = [];
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const progressBar = document.querySelector(".progress");

function selectOption(questionIndex, answer, element) {
  answers[questionIndex] = answer;
  const options = slides[currentSlide].querySelectorAll(".option");
  options.forEach((opt) => opt.classList.remove("selected"));
  element.classList.add("selected");
}

function nextSlide() {
  if (currentSlide < slides.length - 1 && answers[currentSlide]) {
    slides[currentSlide].classList.remove("active");
    currentSlide++;
    slides[currentSlide].classList.add("active");
    progressBar.style.width = `${((currentSlide + 1) / slides.length) * 100}%`;
  } else {
    alert("Please select an option before proceeding.");
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    slides[currentSlide].classList.remove("active");
    currentSlide--;
    slides[currentSlide].classList.add("active");
    progressBar.style.width = `${((currentSlide + 1) / slides.length) * 100}%`;
  }
}

async function submitToBackend() {
  if (answers.length === 3) {
    const formData = {
      interests: answers[0],
      skills: answers[1],
      goals: answers[2],
    };
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      localStorage.setItem("recommendations", JSON.stringify(data));
      window.location.href = "/recommendations";
    } catch (error) {
      console.error("Fetch error:", error);
      alert("Failed to get recommendations.");
    }
  } else {
    alert("Please complete all steps.");
  }
}

// Recommendations Page
if (document.getElementById("recommendations")) {
  const recommendations = JSON.parse(
    localStorage.getItem("recommendations") || "[]"
  );
  const container = document.getElementById("recommendations");
  recommendations.forEach((career) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h3>${career.name}</h3>
      <p>${career.summary}</p>
      <a href="/career?name=${career.name
        .toLowerCase()
        .replace(" ", "-")}">Learn More</a>
    `;
    container.appendChild(div);
  });
}

// Career Details Page
if (document.getElementById("careerTitle")) {
  const params = new URLSearchParams(window.location.search);
  const careerName = params.get("name");
  const details = {
    "software-development": {
      skills: "JS, HTML, CSS",
      roadmap: "Learn JS → Projects → Internships",
      trends: "25% growth",
    },
    "data-science": {
      skills: "Python, SQL, Stats",
      roadmap: "Learn Python → Datasets → Jobs",
      trends: "37% growth",
    },
    devops: {
      skills: "Linux, Docker, AWS",
      roadmap: "Learn Linux → Cloud Certs",
      trends: "Cloud demand",
    },
    "machine-learning": {
      skills: "Python, TensorFlow",
      roadmap: "Learn ML → Projects",
      trends: "40% AI growth",
    },
    cybersecurity: {
      skills: "Networking, Kali",
      roadmap: "Learn Networking → Certs",
      trends: "Rising demand",
    },
    "ui-ux-design": {
      skills: "Figma, Adobe XD",
      roadmap: "Learn Tools → Portfolio",
      trends: "UX focus",
    },
  };
  document.getElementById("careerTitle").textContent = careerName.replace(
    "-",
    " "
  );
  document.getElementById("skills").textContent =
    details[careerName]?.skills || "N/A";
  document.getElementById("roadmap").textContent =
    details[careerName]?.roadmap || "N/A";
  document.getElementById("trends").textContent =
    details[careerName]?.trends || "N/A";
}
