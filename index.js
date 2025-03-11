const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
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
  interests: [String],
  skills: [String],
  goals: [String],
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

// Authentication Middleware
const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Access denied" });
  }

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ error: "Invalid token" });
  }
};

// Auth Routes
app.post("/api/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    // Generate token
    const token = jwt.sign({ userId: user._id }, JWT_SECRET);
    res.json({ token, userId: user._id });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: "Registration failed" });
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    // Validate password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ error: "Invalid password" });
    }

    // Generate token
    const token = jwt.sign({ userId: user._id }, JWT_SECRET);
    res.json({ token, userId: user._id });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Login failed" });
  }
});

// Expanded Hardcoded Data
const hardcodedCareers = [
  // ... your existing hardcoded careers data ...
];

// Enhanced Recommendation Logic with User Context
async function getRecommendations(interests, skills, goals, userId) {
  const matchedCareers = [];

  // Your existing matching logic
  // ... (keep your current getRecommendations implementation) ...

  const recommendations = [...new Set(matchedCareers.filter((c) => c))].slice(
    0,
    4
  );

  // Save recommendations to user profile if userId is provided
  if (userId) {
    try {
      const user = await User.findById(userId);
      if (user) {
        user.interests = interests.split(",");
        user.skills = skills.split(",");
        user.goals = goals.split(",");
        await user.save();
      }
    } catch (error) {
      console.error("Error saving user preferences:", error);
    }
  }

  return recommendations;
}

// Protected Routes
app.get("/api/profile", authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId)
      .select("-password")
      .populate("recommendedCareers");
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Error fetching profile" });
  }
});

// Update existing submit endpoint to handle authentication
app.post("/api/submit", authenticateToken, async (req, res) => {
  const { interests, skills, goals } = req.body;
  try {
    let recommendations;
    if (mongoose.connection.readyState === 1) {
      const careers = await Career.find();
      recommendations = await getRecommendations(
        interests,
        skills,
        goals,
        req.user.userId
      ).map((c) => careers.find((db) => db.name === c.name) || c);
    } else {
      recommendations = await getRecommendations(
        interests,
        skills,
        goals,
        req.user.userId
      );
    }
    res.json(recommendations);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Routes
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "index.html"))
);
app.get("/login", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "login.html"))
);
app.get("/register", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "register.html"))
);
app.get("/input", authenticateToken, (req, res) =>
  res.sendFile(path.join(__dirname, "views", "input.html"))
);
app.get("/recommendations", authenticateToken, (req, res) =>
  res.sendFile(path.join(__dirname, "views", "recommendations.html"))
);
app.get("/career", authenticateToken, (req, res) =>
  res.sendFile(path.join(__dirname, "views", "career.html"))
);

// Database seeding function (optional)
async function seedDatabase() {
  try {
    await Career.deleteMany({});
    await Career.insertMany(hardcodedCareers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Seeding error:", error);
  }
}
// seedDatabase(); // Uncomment to seed

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
