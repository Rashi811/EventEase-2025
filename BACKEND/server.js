require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const authRoutes = require('./Routes/authRoutes');
const eventRoutes = require('./Routes/eventRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB (REMOVE deprecated options)
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(`MongoDB Connection Error: ${err}`));

// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
