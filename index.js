const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

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

// User Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  otp: { type: String },
  otpExpires: { type: Date },
  preferences: {
    currentStatus: String,
    education: String,
    field: String,
    techSkills: [String],
    otherTechSkills: String,
    businessSkills: [String],
    otherBusinessSkills: String,
    healthcareSkills: [String],
    otherHealthcareSkills: String,
    generalSkills: String,
    experienceYears: Number,
    workEnvironment: String,
    workValues: String,
    careerGoals: String,
    strengths: [String],
  },
  recommendedCareers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Career" }],
});

const User = mongoose.model("User", userSchema);

// Career Schema
const careerSchema = new mongoose.Schema({
  name: String,
  summary: String,
  skills: String,
  roadmap: String,
  trends: String,
});

const Career = mongoose.model("Career", careerSchema);

// Nodemailer Setup
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Function to Generate 6-Digit OTP
const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// Function to Send OTP Email
const sendOTPEmail = async (email, otp) => {
  console.log(`OTP sent to ${email}: ${otp}`);
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Your OTP for Career AI Verification",
    html: `
      <h2>Your OTP Code</h2>
      <p>Your OTP code is <b>${otp}</b>. It is valid for 10 minutes.</p>
      <p>Please enter this code to verify your account.</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};

// Authentication Middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log("Authorization Header:", authHeader);
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    console.log("No token provided");
    return res.status(401).json({ error: "Access denied: No token provided" });
  }
  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified;
    console.log("Token verified, user:", req.user);
    next();
  } catch (error) {
    console.log("Invalid token:", error.message);
    res.status(403).json({ error: "Invalid token" });
  }
};

// Auth Routes
app.post("/api/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ error: "Email already registered" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const otp = generateOTP();
    const otpExpires = new Date(Date.now() + 10 * 60 * 1000);

    const user = new User({
      name,
      email,
      password: hashedPassword,
      otp,
      otpExpires,
    });

    await user.save();
    await sendOTPEmail(email, otp);

    res
      .status(200)
      .json({ message: "OTP sent to your email", userId: user._id });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: "Registration failed" });
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "User not found" });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword)
      return res.status(400).json({ error: "Invalid password" });

    const otp = generateOTP();
    const otpExpires = new Date(Date.now() + 10 * 60 * 1000);

    user.otp = otp;
    user.otpExpires = otpExpires;
    await user.save();

    await sendOTPEmail(user.email, otp);

    res
      .status(200)
      .json({ message: "OTP sent to your email", userId: user._id });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Login failed" });
  }
});

app.post("/api/verify-otp", async (req, res) => {
  try {
    const { userId, otp } = req.body;
    const user = await User.findById(userId);
    if (!user) return res.status(400).json({ error: "User not found" });

    if (user.otp !== otp || user.otpExpires < new Date()) {
      return res.status(400).json({ error: "Invalid or expired OTP" });
    }

    user.otp = undefined;
    user.otpExpires = undefined;
    await user.save();

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({ token, userId: user._id });
  } catch (error) {
    console.error("OTP verification error:", error);
    res.status(500).json({ error: "OTP verification failed" });
  }
});

app.post("/api/resend-otp", async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await User.findById(userId);
    if (!user) return res.status(400).json({ error: "User not found" });

    const otp = generateOTP();
    const otpExpires = new Date(Date.now() + 10 * 60 * 1000);

    user.otp = otp;
    user.otpExpires = otpExpires;
    await user.save();

    await sendOTPEmail(user.email, otp);

    res.status(200).json({ message: "OTP resent to your email" });
  } catch (error) {
    console.error("Resend OTP error:", error);
    res.status(500).json({ error: "Failed to resend OTP" });
  }
});

// Recommendation Logic
async function getRecommendations(userData) {
  const careers = await Career.find();
  const matchedCareers = careers.filter((career) => {
    const skillsMatch =
      userData.techSkills?.some((skill) =>
        career.skills.toLowerCase().includes(skill.toLowerCase())
      ) ||
      userData.businessSkills?.some((skill) =>
        career.skills.toLowerCase().includes(skill.toLowerCase())
      ) ||
      userData.healthcareSkills?.some((skill) =>
        career.skills.toLowerCase().includes(skill.toLowerCase())
      ) ||
      userData.generalSkills
        ?.toLowerCase()
        .includes(career.skills.toLowerCase());
    const fieldMatch =
      userData.field?.toLowerCase() === career.name.toLowerCase();
    return skillsMatch || fieldMatch;
  });

  return matchedCareers.slice(0, 4);
}

// Protected Routes
app.get("/api/profile", authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId)
      .select("-password")
      .populate("recommendedCareers");
    if (!user) {
      console.log("User not found for ID:", req.user.userId);
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.status(500).json({ error: "Error fetching profile" });
  }
});

app.post("/api/submit", authenticateToken, async (req, res) => {
  console.log("Received /api/submit request:", req.body);
  try {
    const user = await User.findById(req.user.userId);
    if (!user) {
      console.log("User not found for ID:", req.user.userId);
      return res.status(404).json({ error: "User not found" });
    }

    user.preferences = { ...req.body };
    user.recommendedCareers = [];
    const recommendations = await getRecommendations(req.body);
    user.recommendedCareers = recommendations.map((career) => career._id);
    await user.save();

    console.log("Preferences saved for user:", user._id);
    res.status(200).json({
      success: true,
      message: "Preferences saved successfully",
      recommendations: recommendations.map((career) => ({
        name: career.name,
        summary: career.summary,
        skills: career.skills,
        roadmap: career.roadmap,
        trends: career.trends,
      })),
    });
  } catch (error) {
    console.error("Error in /api/submit:", error);
    res.status(500).json({ error: "Failed to save preferences" });
  }
});

// Routes
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "index.html"))
);
app.get("/auth", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "auth.html"))
);
app.get("/input", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "input.html"))
);
app.get("/dashboard", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "dashboard.html"))
);
app.get("/recommendations", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "recommendations.html"))
);
app.get("/career", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "career.html"))
);
app.get("/landing", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "landing.html"))
);
app.get("/video", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "video.html"))
);
app.get("/chatbot", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "chatbot.html"))
);
// Database Seeding
async function seedDatabase() {
  try {
    await Career.deleteMany({});
    await Career.insertMany([
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
    ]);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Seeding error:", error);
  }
}
seedDatabase();

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
