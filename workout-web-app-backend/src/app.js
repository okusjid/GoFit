// src/app.js
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
// const workoutRoutes = require('./routes/workoutRoutes');
// const exerciseRoutes = require('./routes/exerciseRoutes');
// const dietRoutes = require('./routes/dietRoutes');
require('./config/environment'); // Ensure environment variables are set

const app = express();
app.use(cors());
app.use(express.json());

// Database Connection
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
// app.use('/api/workouts', workoutRoutes);
// app.use('/api/exercises', exerciseRoutes);
// app.use('/api/diets', dietRoutes);

module.exports = app;
