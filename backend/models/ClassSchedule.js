const mongoose = require('mongoose');

const classScheduleSchema = new mongoose.Schema({
  courseName: String,
  instructor: String,
  date: Date,
  startTime: String,
  endTime: String,
  location: String,
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
}, { timestamps: true });

module.exports = mongoose.model('ClassSchedule', classScheduleSchema);
