const Classroom = require('../models/Classroom');

exports.createClassroom = async (req, res) => {
  try {
    const classroom = await Classroom.create(req.body);
    res.status(201).json(classroom);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllClassrooms = async (req, res) => {
  try {
    const classrooms = await Classroom.find();
    res.json(classrooms);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getClassroomById = async (req, res) => {
  try {
    const classroom = await Classroom.findById(req.params.id);
    if (!classroom) return res.status(404).json({ message: 'Classroom not found' });
    res.json(classroom);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateClassroom = async (req, res) => {
  try {
    const updated = await Classroom.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteClassroom = async (req, res) => {
  try {
    await Classroom.findByIdAndDelete(req.params.id);
    res.json({ message: 'Classroom deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
