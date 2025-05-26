const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: String,
  description: String,
  facultyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Faculty' }
});

module.exports = mongoose.model('Course', courseSchema);
