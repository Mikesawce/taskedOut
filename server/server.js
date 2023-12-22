require('dotenv').config();

// Import dependencies
const express = require('express'); 
const app = express();
const cors = require('cors'); 
const db = require('./db/db.js');
const todoRoutes = require('./routes/todoRoutes.js');

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', todoRoutes);

// Error handling
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: `Internal Server Error` });
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
})
