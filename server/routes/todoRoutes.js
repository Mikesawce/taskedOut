const express = require('express');
const router = express.Router();

// Import the controller
const todoController = require('../controllers/todoController.js');

// Get all
router.get('/todos', todoController.getAllTodos); // working on postman/react
// Get one
router.get('/todos/:id', todoController.getOneTodo); // working on postman
// Create one
router.post('/todos', todoController.createTodo); // working on postman
// Edit one
router.patch('/todos/:id', todoController.editTodo); // working on postman
// Delete one
router.delete('/todos/:id', todoController.deleteTodo); // working on postman
// Sort by priority
router.get('/todos/sort', todoController.sortTodos); // needs work
// Login
router.post('/login', todoController.login);  // working on postman/react
// Get user's todos
router.get('/todos/user/:id/', todoController.getUserTodos); // works on login

module.exports = router;
