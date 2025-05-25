const express = require('express');
const router = express.Router();
const {
  createClassroom,
  getAllClassrooms,
  getClassroomById,
  updateClassroom,
  deleteClassroom
} = require('../controllers/classroomController');

const { protect, authorizeRoles } = require('../middlewares/authMiddleware');

router.get('/', protect, getAllClassrooms);
router.post('/', protect, authorizeRoles('admin'), createClassroom);
router.get('/:id', protect, getClassroomById);
router.put('/:id', protect, authorizeRoles('admin'), updateClassroom);
router.delete('/:id', protect, authorizeRoles('admin'), deleteClassroom);

module.exports = router;
