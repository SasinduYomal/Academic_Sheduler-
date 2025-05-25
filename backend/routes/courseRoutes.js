const express = require('express');
const router = express.Router();
const {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse
} = require('../controllers/courseController');

const { protect, authorizeRoles } = require('../middlewares/authMiddleware');

router.get('/', protect, getAllCourses);
router.post('/', protect, authorizeRoles('admin'), createCourse);
router.get('/:id', protect, getCourseById);
router.put('/:id', protect, authorizeRoles('admin'), updateCourse);
router.delete('/:id', protect, authorizeRoles('admin'), deleteCourse);

module.exports = router;
