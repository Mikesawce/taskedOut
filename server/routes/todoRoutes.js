const express = require('express');
const router = express.Router();

// Import the controller
const todoController = require('../controllers/todoController.js');

// Get all
router.get('/todos', todoController.getAllTodos);
// Get one
router.get('/todos/:id', todoController.getOneTodo);
// Create one
router.post('/todos', todoController.createTodo);
// Edit one
router.patch('/todos/:id', todoController.editTodo);
// Delete one
router.delete('/todos/:id', todoController.deleteTodo);

module.exports = router;