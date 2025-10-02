const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contactRoutes');

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();

// Connect to Database
connectDB();

// --- MIDDLEWARE SETUP (Correct Order) ---
// 1. Enable CORS
const corsOptions = {
  origin: 'https://kr-mahadev-interiors.vercel.app/', 
};
app.use(cors(corsOptions)); 
// 2. Add the JSON parser **BEFORE** the routes
app.use(express.json()); 

// --- ROUTES ---
// 3. Define your routes **AFTER** the middleware
app.use('/api/contact', contactRoutes);

// Define Port
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});