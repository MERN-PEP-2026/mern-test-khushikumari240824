const router = require("express").Router();
const {
  createCourse,
  getCourses,
  deleteCourse,
} = require("../controllers/courseController");

const auth = require("../middleware/authMiddleware");

router.post("/", auth, createCourse);
router.get("/", auth, getCourses);
router.delete("/:id", auth, deleteCourse);

module.exports = router;