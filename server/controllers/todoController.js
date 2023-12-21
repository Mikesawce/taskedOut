const db = require('../server.js')

const getAllTodos = async (req, res, next) => {
    try {
        const todos = await db('todos').select('*'); // select * from todos
        res.status(200).json(todos);
    } catch (err) {
        next(err);
    }
}

const getOneTodo = async (req, res, next) => {
    const { id } = req.params;
    try {
        const todo = await db('todos').select('*').where({ id }); // select * from todos where id = req.params.id
        id ? res.status(200).json(todo) : res.status(404).json({ message: `Todo not found` }); 
    } catch (err) {
        next(err);
    }
}

const createTodo = async (req, res, next) => {
    try {
        const todo = await db('todos').insert({ todo: req.body.todo }).returning('*'); // insert into todos (todo) values (req.body.todo) returning *
        todo !== null ? res.status(200).json(todo) : res.status(400).json({ message: `Please enter a todo` }); 
    } catch (err) {
        next(err);
    }
}

const editTodo = async (req, res, next) => {
    const { id } = req.params;
    try {
        const todo = await db('todos').update({ todo: req.body.todo }).where({ id }).returning('*'); // update todos set todo = req.body.todo where id = req.params.id returning *
        const updatedTodo = await db('todos').select('*').where({ id });
        id && updatedTodo ? res.status(200).json(todo) : res.status(500).json({ message: `Failed to update` }); 
    } catch (err) {
        next(err);
    }
}

const deleteTodo = async (req, res, next) => {
    const { id } = req.params;
    try {
        const todo = await db('todos').del().where({ id }).returning('*'); // delete from todos where id = req.params.id returning *
        id ? res.status(200).json({ message: `Todo deleted` }) : res.status(404).json({ message: `Todo not found` }); 
    } catch (err) {
        next(err);
    }
}

module.exports = {
    getAllTodos,
    getOneTodo,
    createTodo,
    editTodo,
    deleteTodo
}