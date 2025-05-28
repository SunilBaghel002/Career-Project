// Career Data
const careerData = [
  {
    id: 1,
    title: "Software Developer",
    icon: "💻",
    salary: "$70,000 - $150,000",
    salaryRange: "60-120+",
    experience: "Entry to Senior",
    experienceLevel: ["entry", "mid", "senior"],
    shortDescription:
      "Design, build, and maintain software applications and systems.",
    fullDescription:
      "Software developers create applications that allow users to perform specific tasks on computers or other devices. They may also develop the underlying systems that run the devices or control networks.",
    responsibilities: [
      "Writing and testing code",
      "Debugging and troubleshooting software issues",
      "Collaborating with cross-functional teams",
      "Implementing software updates and fixes",
      "Documenting software specifications",
    ],
    requiredSkills: [
      "JavaScript",
      "Python",
      "Java",
      "C#",
      "Git",
      "Problem-solving",
      "Logical thinking",
    ],
    education:
      "Bachelor's degree in Computer Science or related field, or equivalent practical experience. Some positions may accept self-taught developers with strong portfolios.",
    industryOutlook:
      "Excellent job prospects with 22% growth expected over the next decade, much faster than average. High demand for full-stack developers and specialists in cloud computing.",
    careerPath: [
      {
        title: "Junior Developer",
        description:
          "Entry-level position focused on learning fundamentals and contributing to established codebases under supervision.",
      },
      {
        title: "Mid-Level Developer",
        description:
          "Independent work on significant features, mentoring juniors, and deeper architectural understanding.",
      },
      {
        title: "Senior Developer",
        description:
          "Leading development efforts, making high-level architectural decisions, and mentoring team members.",
      },
      {
        title: "Lead Developer / Architect",
        description:
          "Defining technical direction, system design, and best practices for development teams.",
      },
    ],
    roadmap: {
      stages: [
        {
          title: "Beginner (0-6 Months)",
          icon: "fas fa-seedling",
          objectives: "Learn foundational programming concepts and tools.",
          skills: [
            "Programming basics",
            "Python/JavaScript",
            "Git",
            "Algorithms",
          ],
          projects: ["Simple Calculator", "To-Do List"],
          resources: [
            { name: "FreeCodeCamp", url: "https://freecodecamp.org" },
            { name: "Codecademy", url: "https://codecademy.com" },
            { name: "GitHub Docs", url: "https://docs.github.com" },
          ],
        },
        {
          title: "Intermediate (6-18 Months)",
          icon: "fas fa-laptop-code",
          objectives:
            "Build practical applications and understand software development workflows.",
          skills: ["OOP", "Web Dev (HTML/CSS/JS)", "SQL", "APIs"],
          projects: ["Personal Portfolio", "Blog Platform"],
          resources: [
            { name: "MDN Web Docs", url: "https://developer.mozilla.org" },
            { name: "The Odin Project", url: "https://www.theodinproject.com" },
            { name: "SQLZoo", url: "https://sqlzoo.net" },
          ],
        },
        {
          title: "Advanced (18-36 Months)",
          icon: "fas fa-brain",
          objectives:
            "Master complex systems and contribute to real-world projects.",
          skills: ["React", "Node.js", "Testing", "Cloud Basics"],
          projects: ["RESTful API", "Full-Stack Application"],
          resources: [
            { name: "React Official Docs", url: "https://reactjs.org/docs" },
            {
              name: "You Don’t Know JS",
              url: "https://github.com/getify/You-Dont-Know-JS",
            },
            {
              name: "AWS Free Tier Tutorials",
              url: "https://aws.amazon.com/free",
            },
          ],
        },
        {
          title: "Expert (36+ Months)",
          icon: "fas fa-trophy",
          objectives: "Lead projects, optimize systems, and mentor others.",
          skills: [
            "System Design",
            "DevOps",
            "Advanced Algorithms",
            "Leadership",
          ],
          projects: ["Scalable Microservice", "Mentorship Project"],
          resources: [
            {
              name: "Designing Data-Intensive Applications",
              url: "https://dataintensive.net",
            },
            {
              name: "Kubernetes.io Tutorials",
              url: "https://kubernetes.io/docs/tutorials",
            },
            { name: "LeetCode", url: "https://leetcode.com" },
          ],
        },
      ],
    },
    marketTrends:
      "The demand for software developers continues to grow, with a particular emphasis on cloud computing, mobile development, and AI integration. Full-stack developers are highly sought after.",
  },
  {
    id: 2,
    title: "Data Analyst",
    icon: "📊",
    salary: "$60,000 - $120,000",
    salaryRange: "60-120",
    experience: "Entry to Senior",
    experienceLevel: ["entry", "mid", "senior"],
    shortDescription:
      "Interpret data to help organizations make informed decisions.",
    fullDescription:
      "Data analysts collect, process, and perform statistical analyses on large datasets. They help organizations understand trends, patterns, and insights to drive business strategies.",
    responsibilities: [
      "Collecting and cleaning data",
      "Performing statistical analyses",
      "Creating data visualizations",
      "Generating reports and dashboards",
      "Collaborating with stakeholders to understand data needs",
    ],
    requiredSkills: [
      "Excel",
      "SQL",
      "Python/R",
      "Data Visualization",
      "Statistics",
      "Critical Thinking",
    ],
    education:
      "Bachelor's degree in Statistics, Mathematics, Computer Science, or related field. Certifications in data analysis tools are beneficial.",
    industryOutlook:
      "Strong demand with 25% growth projected over the next decade. Increasing need for data-driven decision-making across industries.",
    careerPath: [
      {
        title: "Junior Data Analyst",
        description:
          "Focus on data cleaning, basic analysis, and report generation under supervision.",
      },
      {
        title: "Data Analyst",
        description:
          "Independent analysis, creating dashboards, and presenting insights to stakeholders.",
      },
      {
        title: "Senior Data Analyst",
        description:
          "Leading analysis projects, mentoring junior analysts, and influencing business strategies.",
      },
      {
        title: "Data Analytics Manager",
        description:
          "Overseeing analytics teams, setting strategic goals, and ensuring data quality.",
      },
    ],
    roadmap: {
      stages: [
        {
          title: "Beginner (0-6 Months)",
          icon: "fas fa-seedling",
          objectives: "Learn data basics and essential tools.",
          skills: ["Excel", "SQL", "Data Visualization", "Basic Statistics"],
          projects: ["Excel Data Analysis", "SQL Queries"],
          resources: [
            { name: "Excel Easy", url: "https://www.excel-easy.com" },
            { name: "Mode SQL Tutorial", url: "https://mode.com/sql-tutorial" },
            {
              name: "Tableau Training",
              url: "https://www.tableau.com/learn/training",
            },
          ],
        },
        {
          title: "Intermediate (6-18 Months)",
          icon: "fas fa-chart-bar",
          objectives: "Develop advanced analysis and visualization skills.",
          skills: [
            "Advanced SQL",
            "Python/R",
            "Tableau/Power BI",
            "Statistical Analysis",
          ],
          projects: ["Dashboard Creation", "A/B Testing Analysis"],
          resources: [
            { name: "DataCamp", url: "https://www.datacamp.com" },
            {
              name: "Coursera - Data Analysis with Python",
              url: "https://www.coursera.org/learn/data-analysis-with-python",
            },
            {
              name: "Power BI Learning",
              url: "https://docs.microsoft.com/en-us/power-bi/learning/",
            },
          ],
        },
        {
          title: "Advanced (18-36 Months)",
          icon: "fas fa-brain",
          objectives:
            "Master big data tools and advanced analytics techniques.",
          skills: [
            "Big Data Tools",
            "Machine Learning Basics",
            "Advanced Visualization",
          ],
          projects: ["Big Data Analysis", "Predictive Modeling"],
          resources: [
            {
              name: "edX - Big Data Analytics",
              url: "https://www.edx.org/course/big-data-analytics",
            },
            { name: "Kaggle", url: "https://www.kaggle.com" },
            { name: "D3.js Tutorials", url: "https://d3js.org" },
          ],
        },
        {
          title: "Expert (36+ Months)",
          icon: "fas fa-trophy",
          objectives: "Lead data strategy and mentor others.",
          skills: ["Data Strategy", "Leadership", "Advanced Analytics"],
          projects: ["Data-Driven Business Strategy", "Mentorship Program"],
          resources: [
            {
              name: "Harvard Business Review - Data Strategy",
              url: "https://hbr.org/topic/data-strategy",
            },
            {
              name: "LinkedIn Learning - Leadership",
              url: "https://www.linkedin.com/learning/topics/leadership-and-management",
            },
            {
              name: "Advanced Analytics with Spark",
              url: "https://www.oreilly.com/library/view/advanced-analytics-with/9781491912751/",
            },
          ],
        },
      ],
    },
    marketTrends:
      "Data analytics is crucial for businesses, with a growing need for analysts who can interpret complex data and provide actionable insights. Skills in big data and machine learning are increasingly valuable.",
  },
  {
    id: 3,
    title: "Data Scientist",
    icon: "🔬",
    salary: "$80,000 - $160,000",
    salaryRange: "60-120+",
    experience: "Mid to Senior",
    experienceLevel: ["mid", "senior"],
    shortDescription:
      "Use data to solve complex problems and drive innovation.",
    fullDescription:
      "Data scientists use advanced analytics, machine learning, and statistical methods to extract insights from data. They work on predictive modeling, data mining, and big data analysis.",
    responsibilities: [
      "Developing machine learning models",
      "Performing data mining and exploration",
      "Creating data visualizations",
      "Collaborating with cross-functional teams",
      "Communicating findings to stakeholders",
    ],
    requiredSkills: [
      "Python/R",
      "Machine Learning",
      "Statistics",
      "Data Wrangling",
      "SQL",
      "Communication",
    ],
    education:
      "Master's degree in Data Science, Statistics, Computer Science, or related field. PhD is often preferred for advanced roles.",
    industryOutlook:
      "Very high demand with 31% growth projected. Increasing need for AI and machine learning expertise across industries.",
    careerPath: [
      {
        title: "Junior Data Scientist",
        description:
          "Assist in data analysis, model development, and reporting under supervision.",
      },
      {
        title: "Data Scientist",
        description:
          "Independent work on complex data projects, model deployment, and stakeholder communication.",
      },
      {
        title: "Senior Data Scientist",
        description:
          "Lead data science projects, mentor junior scientists, and influence strategic decisions.",
      },
      {
        title: "Chief Data Scientist",
        description:
          "Oversee data science strategy, lead research initiatives, and drive innovation.",
      },
    ],
    roadmap: {
      stages: [
        {
          title: "Beginner (0-6 Months)",
          icon: "fas fa-seedling",
          objectives: "Learn programming, statistics, and data basics.",
          skills: ["Python/R", "Statistics", "Data Wrangling", "SQL"],
          projects: ["Data Cleaning", "Basic Statistical Analysis"],
          resources: [
            {
              name: "DataCamp - Introduction to Python",
              url: "https://www.datacamp.com/courses/intro-to-python-for-data-science",
            },
            {
              name: "Khan Academy - Statistics",
              url: "https://www.khanacademy.org/math/statistics-probability",
            },
            {
              name: "SQL for Data Science",
              url: "https://www.coursera.org/learn/sql-for-data-science",
            },
          ],
        },
        {
          title: "Intermediate (6-18 Months)",
          icon: "fas fa-chart-line",
          objectives: "Develop machine learning and data visualization skills.",
          skills: [
            "Machine Learning Basics",
            "Data Visualization",
            "Advanced SQL",
          ],
          projects: ["Predictive Modeling", "Interactive Dashboards"],
          resources: [
            {
              name: "Andrew Ng's Machine Learning",
              url: "https://www.coursera.org/learn/machine-learning",
            },
            {
              name: "Tableau Training",
              url: "https://www.tableau.com/learn/training",
            },
            {
              name: "Advanced SQL for Data Science",
              url: "https://www.datacamp.com/courses/intermediate-sql",
            },
          ],
        },
        {
          title: "Advanced (18-36 Months)",
          icon: "fas fa-brain",
          objectives: "Master deep learning and big data technologies.",
          skills: ["Deep Learning", "Big Data", "Model Deployment"],
          projects: ["Neural Network Implementation", "Big Data Analysis"],
          resources: [
            {
              name: "Deep Learning Specialization",
              url: "https://www.coursera.org/specializations/deep-learning",
            },
            {
              name: "Apache Spark Tutorials",
              url: "https://spark.apache.org/docs/latest/",
            },
            {
              name: "MLflow Documentation",
              url: "https://mlflow.org/docs/latest/index.html",
            },
          ],
        },
        {
          title: "Expert (36+ Months)",
          icon: "fas fa-trophy",
          objectives: "Lead research and innovation in data science.",
          skills: ["Advanced Algorithms", "Research", "Leadership"],
          projects: ["Cutting-Edge Research", "Data Science Strategy"],
          resources: [
            {
              name: "arXiv - Machine Learning Papers",
              url: "https://arxiv.org/list/stat.ML/recent",
            },
            {
              name: "Harvard Business Review - Data Science",
              url: "https://hbr.org/topic/data-science",
            },
            {
              name: "Leadership in Data Science",
              url: "https://www.linkedin.com/learning/leadership-and-management",
            },
          ],
        },
      ],
    },
    marketTrends:
      "Data science is at the forefront of technological innovation, with a strong focus on AI, machine learning, and big data. Expertise in these areas is highly sought after.",
  },
  {
    id: 4,
    title: "Machine Learning Engineer",
    icon: "🤖",
    salary: "$90,000 - $180,000",
    salaryRange: "60-120+",
    experience: "Mid to Senior",
    experienceLevel: ["mid", "senior"],
    shortDescription: "Design and implement machine learning systems.",
    fullDescription:
      "Machine learning engineers develop algorithms and models that enable machines to learn from data. They work on building, training, and deploying ML models for various applications.",
    responsibilities: [
      "Designing and developing ML models",
      "Training and tuning models",
      "Deploying models to production",
      "Collaborating with data scientists and engineers",
      "Monitoring and maintaining ML systems",
    ],
    requiredSkills: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "TensorFlow/PyTorch",
      "Cloud Platforms",
      "Software Engineering",
    ],
    education:
      "Bachelor's or Master's degree in Computer Science, Machine Learning, or related field. Strong programming and mathematical skills are essential.",
    industryOutlook:
      "Rapidly growing field with 33% growth projected. High demand for expertise in deep learning and AI applications.",
    careerPath: [
      {
        title: "Junior ML Engineer",
        description:
          "Assist in model development, data preprocessing, and testing under supervision.",
      },
      {
        title: "ML Engineer",
        description:
          "Independent work on model design, training, and deployment.",
      },
      {
        title: "Senior ML Engineer",
        description:
          "Lead ML projects, optimize models, and mentor junior engineers.",
      },
      {
        title: "ML Architect",
        description:
          "Design ML system architectures, set technical direction, and innovate new solutions.",
      },
    ],
    roadmap: {
      stages: [
        {
          title: "Beginner (0-6 Months)",
          icon: "fas fa-seedling",
          objectives: "Learn programming and basic ML concepts.",
          skills: ["Python", "Linear Algebra", "Basic ML Algorithms"],
          projects: ["Linear Regression", "Classification Models"],
          resources: [
            {
              name: "Python for Data Science",
              url: "https://www.datacamp.com/courses/intro-to-python-for-data-science",
            },
            {
              name: "Khan Academy - Linear Algebra",
              url: "https://www.khanacademy.org/math/linear-algebra",
            },
            {
              name: "Scikit-Learn Tutorials",
              url: "https://scikit-learn.org/stable/tutorial/index.html",
            },
          ],
        },
        {
          title: "Intermediate (6-18 Months)",
          icon: "fas fa-robot",
          objectives: "Develop skills in supervised and unsupervised learning.",
          skills: [
            "Supervised Learning",
            "Unsupervised Learning",
            "Feature Engineering",
          ],
          projects: ["Image Classification", "Clustering Analysis"],
          resources: [
            {
              name: "Andrew Ng's Machine Learning",
              url: "https://www.coursera.org/learn/machine-learning",
            },
            { name: "Fast.ai", url: "https://www.fast.ai" },
            {
              name: "Feature Engineering for Machine Learning",
              url: "https://www.oreilly.com/library/view/feature-engineering-for/9781491953235/",
            },
          ],
        },
        {
          title: "Advanced (18-36 Months)",
          icon: "fas fa-brain",
          objectives: "Master deep learning and reinforcement learning.",
          skills: [
            "Neural Networks",
            "Reinforcement Learning",
            "Cloud ML Services",
          ],
          projects: ["Deep Learning Model", "RL Agent"],
          resources: [
            {
              name: "Deep Learning Specialization",
              url: "https://www.coursera.org/specializations/deep-learning",
            },
            { name: "OpenAI Gym", url: "https://gym.openai.com" },
            {
              name: "AWS Machine Learning",
              url: "https://aws.amazon.com/machine-learning/",
            },
          ],
        },
        {
          title: "Expert (36+ Months)",
          icon: "fas fa-trophy",
          objectives: "Lead ML research and development.",
          skills: [
            "Advanced ML Techniques",
            "Model Optimization",
            "Leadership",
          ],
          projects: ["State-of-the-Art Model", "ML System Architecture"],
          resources: [
            {
              name: "arXiv - Machine Learning Papers",
              url: "https://arxiv.org/list/cs.LG/recent",
            },
            {
              name: "ML System Design",
              url: "https://www.oreilly.com/library/view/designing-machine-learning/9781492039570/",
            },
            {
              name: "Leadership in Tech",
              url: "https://www.linkedin.com/learning/topics/leadership-and-management",
            },
          ],
        },
      ],
    },
    marketTrends:
      "Machine learning is revolutionizing industries, with a strong demand for engineers who can build and deploy scalable ML systems. Expertise in deep learning and cloud platforms is particularly valuable.",
  },
  {
    id: 5,
    title: "DevOps Engineer",
    icon: "🚀",
    salary: "$80,000 - $140,000",
    salaryRange: "60-120+",
    experience: "Mid to Senior",
    experienceLevel: ["mid", "senior"],
    shortDescription: "Bridge the gap between development and operations.",
    fullDescription:
      "DevOps engineers focus on automating and streamlining the software development process. They work on continuous integration, delivery, and deployment, ensuring efficient and reliable software releases.",
    responsibilities: [
      "Setting up CI/CD pipelines",
      "Managing cloud infrastructure",
      "Automating deployment processes",
      "Monitoring system performance",
      "Collaborating with development and operations teams",
    ],
    requiredSkills: [
      "Linux",
      "Scripting (Bash/Python)",
      "CI/CD Tools",
      "Containerization (Docker)",
      "Cloud Platforms",
      "Monitoring Tools",
    ],
    education:
      "Bachelor's degree in Computer Science, Information Technology, or related field. Certifications in cloud platforms and DevOps tools are beneficial.",
    industryOutlook:
      "High demand with 24% growth projected. Increasing adoption of cloud computing and automation drives the need for DevOps expertise.",
    careerPath: [
      {
        title: "Junior DevOps Engineer",
        description:
          "Assist in setting up and maintaining CI/CD pipelines and infrastructure under supervision.",
      },
      {
        title: "DevOps Engineer",
        description:
          "Independent work on automation, deployment, and monitoring.",
      },
      {
        title: "Senior DevOps Engineer",
        description:
          "Lead DevOps projects, optimize processes, and mentor junior engineers.",
      },
      {
        title: "DevOps Architect",
        description:
          "Design DevOps strategies, implement best practices, and drive innovation.",
      },
    ],
    roadmap: {
      stages: [
        {
          title: "Beginner (0-6 Months)",
          icon: "fas fa-seedling",
          objectives: "Learn Linux, scripting, and version control.",
          skills: ["Linux Basics", "Scripting (Bash/Python)", "Git"],
          projects: ["Script Automation", "Git Workflow"],
          resources: [
            { name: "Linux Journey", url: "https://linuxjourney.com" },
            {
              name: "Learn Python the Hard Way",
              url: "https://learnpythonthehardway.org",
            },
            { name: "Pro Git Book", url: "https://git-scm.com/book/en/v2" },
          ],
        },
        {
          title: "Intermediate (6-18 Months)",
          icon: "fas fa-tools",
          objectives: "Develop skills in CI/CD and containerization.",
          skills: ["CI/CD Pipelines", "Docker", "Configuration Management"],
          projects: ["CI/CD Setup", "Dockerized Application"],
          resources: [
            {
              name: "Jenkins Documentation",
              url: "https://www.jenkins.io/doc/",
            },
            {
              name: "Docker Get Started",
              url: "https://docs.docker.com/get-started/",
            },
            {
              name: "Ansible Tutorials",
              url: "https://docs.ansible.com/ansible/latest/user_guide/index.html",
            },
          ],
        },
        {
          title: "Advanced (18-36 Months)",
          icon: "fas fa-cloud",
          objectives: "Master cloud platforms and orchestration.",
          skills: [
            "Kubernetes",
            "Cloud Platforms (AWS/Azure/GCP)",
            "Infrastructure as Code",
          ],
          projects: ["Kubernetes Deployment", "Cloud Infrastructure Setup"],
          resources: [
            {
              name: "Kubernetes Documentation",
              url: "https://kubernetes.io/docs/home/",
            },
            {
              name: "AWS Certified DevOps Engineer",
              url: "https://aws.amazon.com/certification/certified-devops-engineer-professional/",
            },
            {
              name: "Terraform Documentation",
              url: "https://www.terraform.io/docs/index.html",
            },
          ],
        },
        {
          title: "Expert (36+ Months)",
          icon: "fas fa-trophy",
          objectives: "Lead DevOps strategy and innovation.",
          skills: ["Architecture Design", "Security", "Leadership"],
          projects: ["DevOps Strategy Implementation", "Security Audit"],
          resources: [
            {
              name: "The Phoenix Project",
              url: "https://itrevolution.com/the-phoenix-project/",
            },
            {
              name: "OWASP DevSecOps",
              url: "https://owasp.org/www-project-devsecops/",
            },
            {
              name: "Leadership in DevOps",
              url: "https://www.linkedin.com/learning/devops-foundations-leadership",
            },
          ],
        },
      ],
    },
    marketTrends:
      "DevOps is essential for modern software development, with a focus on automation, cloud-native technologies, and security. Skills in Kubernetes and cloud platforms are highly valued.",
  },
  // Add more careers as needed
];

// DOM Elements
const careerGrid = document.getElementById("career-grid");
const careerSearch = document.getElementById("career-search");
const salaryFilter = document.getElementById("salary-filter");
const experienceFilter = document.getElementById("experience-filter");
const modal = document.getElementById("career-modal");
const modalContent = document.getElementById("modal-content-container");
const closeButton = document.querySelector(".close-button");

// Initialize the career grid
function initializeCareerGrid() {
  renderCareerCards(careerData);
  setupEventListeners();
}

// Render career cards
function renderCareerCards(careers) {
  careerGrid.innerHTML = "";
  if (careers.length === 0) {
    careerGrid.innerHTML =
      '<p class="no-results">No careers match your search criteria.</p>';
    return;
  }
  careers.forEach((career) => {
    const card = document.createElement("div");
    card.className = "career-card";
    card.dataset.id = career.id;
    card.innerHTML = `
                    <div class="card-icon">${career.icon}</div>
                    <div class="card-content">
                        <h3 class="card-title">${career.title}</h3>
                        <div class="card-salary">Salary: ${career.salary}</div>
                        <div class="card-experience">Experience: ${career.experience}</div>
                        <p class="card-description">${career.shortDescription}</p>
                    </div>
                `;
    careerGrid.appendChild(card);
  });
}

// Filter careers
function filterCareers() {
  const searchTerm = careerSearch.value.toLowerCase();
  const salaryRange = salaryFilter.value;
  const experienceLevel = experienceFilter.value;

  const filteredCareers = careerData.filter((career) => {
    const matchesSearch =
      career.title.toLowerCase().includes(searchTerm) ||
      career.shortDescription.toLowerCase().includes(searchTerm);
    let matchesSalary = true;
    if (salaryRange !== "all") {
      matchesSalary = career.salaryRange.includes(salaryRange);
    }
    let matchesExperience = true;
    if (experienceLevel !== "all") {
      matchesExperience = career.experienceLevel.includes(experienceLevel);
    }
    return matchesSearch && matchesSalary && matchesExperience;
  });

  renderCareerCards(filteredCareers);
}

// Show career details in modal
function showCareerDetails(careerId) {
  const career = careerData.find((c) => c.id === parseInt(careerId));
  if (!career) return;

  modalContent.innerHTML = `
                <div class="career-detail">
                    <h2>${career.icon} ${career.title}</h2>
                    <div class="detail-stats">
                        <div class="stat">
                            <div class="stat-title">Salary Range</div>
                            <div class="stat-value">${career.salary}</div>
                        </div>
                        <div class="stat">
                            <div class="stat-title">Experience Level</div>
                            <div class="stat-value">${career.experience}</div>
                        </div>
                        <div class="stat">
                            <div class="stat-title">Industry Outlook</div>
                            <div class="stat-value">🔥 High Growth</div>
                        </div>
                    </div>
                    <div class="detail-section">
                        <h3>Overview</h3>
                        <p>${career.fullDescription}</p>
                    </div>
                    <div class="detail-section">
                        <h3>Key Responsibilities</h3>
                        <ul>${career.responsibilities
                          .map(
                            (resp) =>
                              `<li><i class="fas fa-check"></i> ${resp}</li>`
                          )
                          .join("")}</ul>
                    </div>
                    <div class="detail-section">
                        <h3>Required Skills</h3>
                        <div class="skill-list">${career.requiredSkills
                          .map(
                            (skill) => `<span class="skill-tag">${skill}</span>`
                          )
                          .join("")}</div>
                    </div>
                    <div class="detail-section">
                        <h3>Education and Certification</h3>
                        <p>${career.education}</p>
                    </div>
                    <div class="detail-section">
                        <h3>Industry Outlook</h3>
                        <p>${career.industryOutlook}</p>
                    </div>
                    <div class="detail-section">
                        <h3>Market Trends</h3>
                        <p>${career.marketTrends}</p>
                    </div>
                    <div class="detail-section career-path">
                        <h3>Career Progression</h3>
                        ${career.careerPath
                          .map(
                            (step) => `
                            <div class="path-step">
                                <h4>${step.title}</h4>
                                <p>${step.description}</p>
                            </div>
                        `
                          )
                          .join("")}
                    </div>
                    <div class="roadmap">
                        <h3>Learning Roadmap</h3>
                        <div class="roadmap-stages">
                            ${career.roadmap.stages
                              .map(
                                (stage) => `
                                <div class="stage-card">
                                    <div class="stage-icon"><i class="${
                                      stage.icon
                                    }"></i></div>
                                    <div class="stage-title">${
                                      stage.title
                                    }</div>
                                    <div class="stage-content">
                                        <p><strong>Objective:</strong> ${
                                          stage.objectives
                                        }</p>
                                        <p><strong>Skills:</strong> ${stage.skills.join(
                                          ", "
                                        )}</p>
                                        <p><strong>Projects:</strong> ${stage.projects.join(
                                          ", "
                                        )}</p>
                                        <p><strong>Resources:</strong> ${stage.resources
                                          .map(
                                            (res) =>
                                              `<a href="${res.url}" target="_blank">${res.name}</a>`
                                          )
                                          .join(", ")}</p>
                                    </div>
                                </div>
                            `
                              )
                              .join("")}
                        </div>
                    </div>
                </div>
            `;
  modal.style.display = "block";
}

// Setup event listeners
function setupEventListeners() {
  careerSearch.addEventListener("input", filterCareers);
  salaryFilter.addEventListener("change", filterCareers);
  experienceFilter.addEventListener("change", filterCareers);

  const searchButton = document.getElementById("search-button");
  searchButton.addEventListener("click", filterCareers);

  careerGrid.addEventListener("click", (e) => {
    const card = e.target.closest(".career-card");
    if (card) showCareerDetails(card.dataset.id);
  });

  closeButton.addEventListener("click", () => (modal.style.display = "none"));
  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "block")
      modal.style.display = "none";
  });
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", initializeCareerGrid);

// Run on page load
window.addEventListener("load", initializeCareerGrid);