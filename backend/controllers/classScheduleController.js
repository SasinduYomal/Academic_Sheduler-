const ClassSchedule = require('../models/ClassSchedule');

// Create class schedule
exports.createClass = async (req, res) => {
  try {
    const newClass = new ClassSchedule({
      ...req.body,
      createdBy: req.user._id
    });
    const savedClass = await newClass.save();
    res.status(201).json(savedClass);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating class', error: err.message });
  }
};

// Get all class schedules
exports.getAllClasses = async (req, res) => {
  try {
    const classes = await ClassSchedule.find().populate('createdBy', 'name email');
    res.status(200).json(classes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching classes', error: err.message });
  }
};

// Update class schedule
exports.updateClass = async (req, res) => {
  try {
    const updated = await ClassSchedule.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updated) {
      return res.status(404).json({ message: 'Class not found' });
    }
    res.status(200).json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating class', error: err.message });
  }
};

// Delete class schedule
exports.deleteClass = async (req, res) => {
  try {
    const deleted = await ClassSchedule.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Class not found' });
    }
    res.status(200).json({ message: 'Class deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error deleting class', error: err.message });
  }
};
