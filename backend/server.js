const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.error('MongoDB connection failed:', err.message);
});

// Import routes
const authRoutes = require('./routes/authRoutes');
const scheduleRoutes = require('./routes/scheduleRoutes'); // ✅ Schedule route imported
const courseRoutes = require('./routes/courseRoutes'); // Course routes imported
const facultyRoutes = require('./routes/facultyRoutes'); // Faculty routes imported
const classroomRoutes = require('./routes/classroomRoutes'); // Classroom routes imported

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/schedules', scheduleRoutes); // ✅ Schedule route used
app.use('/api/courses', courseRoutes); // Course routes used
app.use('/api/faculty', facultyRoutes); // Faculty routes used
app.use('/api/classrooms', classroomRoutes); // Classroom routes used

app.get('/', (req, res) => {
  res.send('Academic Scheduler System API running');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
