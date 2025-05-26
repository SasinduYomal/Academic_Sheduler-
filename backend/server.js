const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');

const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => res.send("Academic Scheduler API running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
