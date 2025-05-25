const express = require('express');
const router = express.Router();
const {
  createFaculty,
  getAllFaculty,
  getFacultyById,
  updateFaculty,
  deleteFaculty
} = require('../controllers/facultyController');

const { protect, authorizeRoles } = require('../middlewares/authMiddleware');

router.get('/', protect, getAllFaculty);
router.post('/', protect, authorizeRoles('admin'), createFaculty);
router.get('/:id', protect, getFacultyById);
router.put('/:id', protect, authorizeRoles('admin'), updateFaculty);
router.delete('/:id', protect, authorizeRoles('admin'), deleteFaculty);

module.exports = router;
