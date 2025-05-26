const sequelize = require('../config/db');
const User = require('./User');
const Faculty = require('./Faculty');
const Course = require('./Course');
const Module = require('./Module');
const Classroom = require('./Classroom');
const Exam = require('./Exam');
const Timetable = require('./Timetable');

// Define relationships
Course.belongsTo(Faculty);
Module.belongsTo(Course);
Exam.belongsTo(Module);
Exam.belongsTo(Classroom);
Timetable.belongsTo(User, { as: 'student' });
Timetable.belongsTo(Module);

// Sync models with DB
sequelize.sync({ alter: true })
  .then(() => console.log("Tables synced"))
  .catch(err => console.log("Sync failed", err));

module.exports = {
  sequelize,
  User,
  Faculty,
  Course,
  Module,
  Classroom,
  Exam,
  Timetable
};
