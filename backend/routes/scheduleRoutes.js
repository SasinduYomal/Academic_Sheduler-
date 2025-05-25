const express = require('express');
const router = express.Router();
const {
  createSchedule,
  getAllSchedules,
  getScheduleById,
  updateSchedule,
  deleteSchedule
} = require('../controllers/scheduleController');

const { protect, authorizeRoles } = require('../middlewares/authMiddleware');

router.get('/', protect, getAllSchedules);
router.post('/', protect, authorizeRoles('admin'), createSchedule);
router.get('/:id', protect, getScheduleById);
router.put('/:id', protect, authorizeRoles('admin'), updateSchedule);
router.delete('/:id', protect, authorizeRoles('admin'), deleteSchedule);

module.exports = router;
