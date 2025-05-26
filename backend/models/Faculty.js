const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
  name: String,
  description: String
});

module.exports = mongoose.model('Faculty', facultySchema);
