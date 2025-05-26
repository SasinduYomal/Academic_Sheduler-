const mongoose = require('mongoose');

const moduleSchema = new mongoose.Schema({
  name: String,
  code: String,
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' }
});

module.exports = mongoose.model('Module', moduleSchema);
