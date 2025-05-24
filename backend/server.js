const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
require('dotenv').config();

// Route & Middleware imports
const authRoutes = require('./routes/authRoutes');      // ✅ Auth routes
const classRoutes = require('./routes/classRoutes')   // ✅ Class schedule routes
const protect = require('./middleware/authMiddleware'); // ✅ JWT protect middleware

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/auth', authRoutes);         // ✅ Auth
app.use('/api/classes', classRoutes);     // ✅ Class schedules

// Protected test route
app.get('/api/private', protect, (req, res) => {
  res.json({ message: `Welcome ${req.user.name}, you're authenticated!` });
});

// Default root route
app.get('/', (req, res) => {
  res.send('Academic Scheduler Backend Running');
});

// Server port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
