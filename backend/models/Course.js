const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  courseName: String,
  courseDescription: String,
  instructor: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Course", courseSchema);