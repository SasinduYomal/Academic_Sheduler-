const express = require('express');
const router = express.Router();
const {
  createClass,
  getAllClasses,
  updateClass,
  deleteClass
} = require('../controllers/classScheduleController');
const protect = require('../middleware/authMiddleware');

// @route   POST /api/classes
router.post('/', protect, createClass);

// @route   GET /api/classes
router.get('/', protect, getAllClasses);

// @route   PUT /api/classes/:id
router.put('/:id', protect, updateClass);

// @route   DELETE /api/classes/:id
router.delete('/:id', protect, deleteClass);

module.exports = router;
