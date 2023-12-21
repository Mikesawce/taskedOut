require('dotenv').config();

// Import dependencies
const express = require('express'); 
const app = express();
const cors = require('cors'); 
const knex = require('knex');
const knexConfig = require('./knexfile.js'); 
const db = knex(knexConfig); // This is the database connection
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

const PORT = process.env.PORT || 6969;
app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
})