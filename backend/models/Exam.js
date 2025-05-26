const mongoose = require('mongoose');

const timetableSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  moduleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Module' },
  day: String,
  timeSlot: String
});

module.exports = mongoose.model('Timetable', timetableSchema);
