const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Timetable = sequelize.define('Timetable', {
  day: DataTypes.STRING,
  timeSlot: DataTypes.STRING
});

module.exports = Timetable;
