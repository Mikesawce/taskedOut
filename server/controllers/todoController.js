const db = require("../db/db.js");

module.exports = {
	getAllTodos: async (req, res, next) => {
		try {
			const todos = await db("todos").select("*"); // select * from todos
			res.status(200).json(todos);
        } catch (err) {
            console.error(err);
			next(err);
		}
	},

	getOneTodo: async (req, res, next) => {
		const { id } = req.params;
		try {
			const todo = await db("todos").select("*").where({ id }); // select * from todos where id = req.params.id
			id
				? res.status(200).json(todo)
				: res.status(404).json({ message: `Not Found` });
        } catch (err) {
            console.error(err);
			next(err);
		}
	},

	createTodo: async (req, res, next) => {
        const { title, description, priority, user_id } = req.body;
        console.log(req.body)

		try {
			const todo = await db("todos")
				.insert({
					title: title,
					description: description,
					priority: priority,
					user_id: user_id,
				})
				.returning("*");

			title && description && priority && user_id
				? res.status(201).json(todo)
				: res
						.status(500)
						.json({ message: `Please review all requirements` });
		} catch (err) {
			console.error(err);
			next(err);
		}
	},

	editTodo: async (req, res, next) => {
		const { id } = req.params;
		const { title, description, priority, completed, user_id } = req.body;

		try {
			const todo = await db("todos")
                .update({
                    title: title,
                    description: description,
                    priority: priority,
                    completed: completed,
                    user_id: user_id
                })
				.where({ id })
				.returning("*");

			const updatedTodo = await db("todos").select("*").where({ id });

			todo.length > 0 && updatedTodo.length > 0
				? res.status(200).json(updatedTodo)
				: res.status(500).json({ message: `Operation Failed` });
        } catch (err) {
            console.error(err);
			next(err);
		}
	},

	deleteTodo: async (req, res, next) => {
		const { id } = req.params;
		try {
			const deletedTodo = await db("todos").del().where({ id }).returning("*"); // delete from todos where id = req.params.id returning *
			id && deletedTodo.length > 0
				? res.status(200).json({ message: `Todo deleted` })
				: res.status(404).json({ message: `Todo not found` });
        } catch (err) {
            console.error(err);
			next(err);
		}
	},

	sortTodos: async (req, res, next) => {
		try {
			const todos = await db("todos").select("*").orderBy("priority", "desc"); // select * from todos order by priority desc
			res.status(200).json(todos);
		} catch (err) {
			console.error(err);
			next(err);
		}
	},
};
