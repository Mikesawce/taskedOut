// dotenv .config() reads the .env file and saves the environment variables
require('dotenv').config();

// Import dependencies
const express = require('express');
const app = express();
const cors = require('cors'); 
const knex = require('knex'); // This is a query builder
const knexConfig = require('./knexfile.js'); // This is the knex configuration file for the database
const db = knex(knexConfig); // This is the database connection
// const todoRoutes = require('./routes/todoRoutes.js');

// Middleware
app.use(cors());
app.use(express.json());

// Routes
// app.use('/todos', todoRoutes);

const PORT = process.env.PORT || 6969;
app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
})