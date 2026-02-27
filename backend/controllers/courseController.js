const Course = require("../models/Course");

exports.createCourse = async (req, res) => {
  try {
    const { courseName, courseDescription, instructor } = req.body;

    if (!courseName || !courseDescription || !instructor) {
      return res.status(400).json({ message: "All course fields are required" });
    }

    const course = await Course.create({
      courseName,
      courseDescription,
      instructor,
    });

    return res.status(201).json(course);
  } catch (error) {
    return res.status(500).json({ message: "Could not create course", error: error.message });
  }
};

exports.getCourses = async (req, res) => {
  try {
    const { search } = req.query;

    const query = search
      ? { courseName: { $regex: search, $options: "i" } }
      : {};

    const courses = await Course.find(query).sort({ createdAt: -1 });
    return res.status(200).json(courses);
  } catch (error) {
    return res.status(500).json({ message: "Could not fetch courses", error: error.message });
  }
};

exports.deleteCourse = async (req, res) => {
  try {
    const deletedCourse = await Course.findByIdAndDelete(req.params.id);

    if (!deletedCourse) {
      return res.status(404).json({ message: "Course not found" });
    }

    return res.status(200).json({ message: "Course deleted" });
  } catch (error) {
    return res.status(500).json({ message: "Could not delete course", error: error.message });
  }
};