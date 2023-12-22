import "./App.css";

import React, { useState, useEffect } from "react";
import axios from "axios";

import NavBar from "./components/NavBar";
import LoginForm from "./components/LoginForm";
import TodoList from "./components/TodoList";
// import TodoEditForm from './components/TodoEditForm';
import TodoCreate from "./components/TodoCreate";
import TodoSort from "./components/TodoSort";

const App = () => {
	const [isloggedin, setIsloggedin] = useState(false);
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		const fetchTodos = async () => {
			try {
				const res = await axios.get("/api/todos");
				setTodos(res.data);
			} catch (err) {
				console.error("Error finding todos", err);
			}
		};

		fetchTodos();
	}, []);

	const handleLogin = () => {
		setIsloggedin((prev) => !prev);
	};

	const handleLoginFormSubmit = (username, password) => {
		const login = async () => {
			try {
				const res = await axios.post("/api/login", {
					username,
					password,
				});
				console.log(res.data);
				setIsloggedin(true);
			} catch (err) {
				console.error("Error logging in", err);
			}
		};

		login();
	};

	const handleEditTodo = (editedTodo) => {
		const updateTodo = async () => {
			try {
				const res = await axios.put(
					`/api/todos/${editedTodo.id}`,
					editedTodo
				);
				const updatedTodos = todos.map((todo) =>
					todo._id === editedTodo._id ? res.data : todo
				);
				setTodos(updatedTodos);
			} catch (err) {
				console.error("Error updating todo", err);
			}
		};

		updateTodo();
	};

	const handleSortTodos = () => {
		const sortTodos = async () => {
			try {
				const res = await axios.get("/api/todos/sort");
				setTodos(res.data);
			} catch (err) {
				console.error("Error sorting todos", err);
			}
		};

		sortTodos();
	};

	const handleCreateTodo = (newTodo) => {
		const createTodo = async () => {
			try {
				const res = await axios.post("/api/todos", newTodo);
				setTodos([...todos, res.data]);
			} catch (err) {
				console.error("Error creating todo", err);
			}
		};

		createTodo();
	};

	return (
		<div className="App">
			<NavBar isloggedin={isloggedin} handleLogin={handleLogin} />
			{!isloggedin && <LoginForm onLogin={handleLoginFormSubmit} />}

			{isloggedin && (
				<div>
					<TodoCreate onCreate={handleCreateTodo} />
					<TodoSort onSort={handleSortTodos} />
					<TodoList todos={todos} onEdit={handleEditTodo} />
				</div>
			)}
		</div>
	);
};

export default App;
