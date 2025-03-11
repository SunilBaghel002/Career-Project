const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Career Schema
const careerSchema = new mongoose.Schema({
  name: String,
  summary: String,
  skills: String,
  roadmap: String,
  trends: String,
});
const Career = mongoose.model("Career", careerSchema);

// Expanded Hardcoded Data
const hardcodedCareers = [
  {
    name: "Software Development",
    summary: "Build applications and websites.",
    skills: "JavaScript, HTML, CSS",
    roadmap: "Learn JS → Build projects → Internships",
    trends: "25% job growth (2023)",
  },
  {
    name: "Data Science",
    summary: "Analyze data for insights.",
    skills: "Python, SQL, Statistics",
    roadmap: "Learn Python → Study stats → Datasets",
    trends: "37% job growth (2023)",
  },
  {
    name: "DevOps",
    summary: "Manage infrastructure and deployments.",
    skills: "Linux, Docker, AWS",
    roadmap: "Learn Linux → Master Docker → Cloud certs",
    trends: "Growing cloud demand",
  },
  {
    name: "Machine Learning",
    summary: "Develop AI models.",
    skills: "Python, TensorFlow, Math",
    roadmap: "Learn ML basics → Projects → Research",
    trends: "AI jobs up 40% (2023)",
  },
  {
    name: "Cybersecurity",
    summary: "Protect systems from threats.",
    skills: "Networking, Kali Linux, Ethics",
    roadmap: "Learn networking → Certs → Practice",
    trends: "Critical demand rising",
  },
  {
    name: "UI/UX Design",
    summary: "Design user-friendly interfaces.",
    skills: "Figma, Adobe XD, Design",
    roadmap: "Learn tools → Build portfolio → Freelance",
    trends: "Growing UX focus",
  },
];

// Enhanced Recommendation Logic
function getRecommendations(interests, skills, goals) {
  const matchedCareers = [];

  // Match based on interests
  interests = interests.toLowerCase();
  if (interests.includes("coding") || interests.includes("software"))
    matchedCareers.push(hardcodedCareers[0]); // Software Dev
  if (interests.includes("data") || interests.includes("analytics"))
    matchedCareers.push(hardcodedCareers[1]); // Data Science
  if (interests.includes("infrastructure") || interests.includes("cloud"))
    matchedCareers.push(hardcodedCareers[2]); // DevOps
  if (interests.includes("ai") || interests.includes("machine"))
    matchedCareers.push(hardcodedCareers[3]); // Machine Learning
  if (interests.includes("security") || interests.includes("cyber"))
    matchedCareers.push(hardcodedCareers[4]); // Cybersecurity
  if (interests.includes("design") || interests.includes("ui"))
    matchedCareers.push(hardcodedCareers[5]); // UI/UX

  // Match based on skills
  skills = skills.toLowerCase();
  if (skills.includes("javascript") || skills.includes("html"))
    matchedCareers.push(hardcodedCareers[0]);
  if (skills.includes("python") || skills.includes("sql"))
    matchedCareers.push(hardcodedCareers[1]);
  if (skills.includes("linux") || skills.includes("docker"))
    matchedCareers.push(hardcodedCareers[2]);
  if (skills.includes("tensorflow") || skills.includes("math"))
    matchedCareers.push(hardcodedCareers[3]);
  if (skills.includes("networking") || skills.includes("kali"))
    matchedCareers.push(hardcodedCareers[4]);
  if (skills.includes("figma") || skills.includes("xd"))
    matchedCareers.push(hardcodedCareers[5]);

  // Match based on goals
  goals = goals.toLowerCase();
  if (goals.includes("salary") || goals.includes("growth"))
    matchedCareers.push(hardcodedCareers[0], hardcodedCareers[1]);
  if (goals.includes("remote") || goals.includes("cloud"))
    matchedCareers.push(hardcodedCareers[2]);
  if (goals.includes("innovation") || goals.includes("research"))
    matchedCareers.push(hardcodedCareers[3]);
  if (goals.includes("security") || goals.includes("protection"))
    matchedCareers.push(hardcodedCareers[4]);
  if (goals.includes("creative") || goals.includes("design"))
    matchedCareers.push(hardcodedCareers[5]);

  // Return unique recommendations, up to 4
  return [...new Set(matchedCareers.filter((c) => c))].slice(0, 4);
}

// Routes
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "index.html"))
);
app.get("/input", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "input.html"))
);
app.get("/recommendations", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "recommendations.html"))
);
app.get("/career", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "career.html"))
);

// API Endpoint
app.post("/api/submit", async (req, res) => {
  const { interests, skills, goals } = req.body;
  try {
    let recommendations;
    if (mongoose.connection.readyState === 1) {
      const careers = await Career.find();
      recommendations = getRecommendations(interests, skills, goals).map(
        (c) => careers.find((db) => db.name === c.name) || c
      );
    } else {
      recommendations = getRecommendations(interests, skills, goals);
    }
    res.json(recommendations);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Seed MongoDB (optional)
async function seedDatabase() {
  await Career.deleteMany({});
  await Career.insertMany(hardcodedCareers);
  console.log("Database seeded");
}
// seedDatabase(); // Uncomment to seed

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
