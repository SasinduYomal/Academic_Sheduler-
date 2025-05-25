const mongoose = require('mongoose');

const classroomSchema = new mongoose.Schema({
  roomNumber: { type: String, required: true },
  building: { type: String },
  capacity: { type: Number },
});

module.exports = mongoose.model('Classroom', classroomSchema);
