require('dotenv').config();

// Import dependencies
const express = require('express'); 
const app = express();
const cors = require('cors'); 
const db = require('./db/db.js');
const todoRoutes = require('./routes/todoRoutes.js');
const path = require('path');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/build')));

// Routes
app.use('/api', todoRoutes);

// Serve React app
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/public', 'index.html'));
})

// Error handling
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: `Internal Server Error` });
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
})
