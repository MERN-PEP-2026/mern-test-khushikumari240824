const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const courseRoutes = require("./routes/courseRoutes");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);

app.listen(process.env.PORT, () =>
  console.log("Server running")
);