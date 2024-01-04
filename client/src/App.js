import "./App.css";

import React, { useState, useEffect } from "react";
import axios from "axios";

import LoginForm from "./components/LoginForm.jsx";
import Footer from "./components/Footer.jsx";
import Content from "./components/Content.jsx";

const App = () => {
	const [todos, setTodos] = useState([]);
	const [loggedIn, setLoggedIn] = useState(false);
	const [user_id, setUser_id] = useState(null);
	//local state for username
	const [username, setUsername] = useState("");

	useEffect(() => {
		const fetchTodos = async () => {
			const apiUrl = `http://localhost:3000/todos/user/${user_id}`;
			try {
				const res = await axios.get(apiUrl);
				setTodos(res.data);
			} catch (err) {
				console.error("Error finding todos", err);
			}
		};

		if (loggedIn && user_id) {
			fetchTodos();
		}
	}, [loggedIn, user_id]);

	const handleDelete = async (e) => {
		const deleteUrl = `http://localhost:3000/todos/${e.target.id}`;

		try {
			const res = await axios.delete(deleteUrl);
      console.log(res.data)
      const updatedTodos = await axios.get(`http://localhost:3000/todos/user/${user_id}`)
			setTodos(updatedTodos.data);
		} catch (err) {
			console.error(err);
		}
	};

	const handleLogout = () => {
		setLoggedIn(false);
		setUser_id(null);
		console.log(loggedIn, user_id);
	};

	const handleLoginSubmit = async (username, password) => {
		const loginUrl = "http://localhost:3000/login";
		const body = {
			username: username,
			password: password,
		};

		try {
			const res = await axios.post(loginUrl, body);
			console.log(res.data);
			setUser_id(res.data.id);
			setLoggedIn(true);
			setUsername(username);
		} catch (err) {
			console.error("Error logging in", err);
		}
	};

	const addTodoSubmit = async (title, description, priority) => {
		const postUrl = "http://localhost:3000/todos";
		const body = {
			title: title,
			description: description,
			priority: priority,
			user_id: user_id,
		};

		try {
			const res = await axios.post(postUrl, body);
      console.log(res.data);
      const updatedTodos = await axios.get(`http://localhost:3000/todos/user/${user_id}`)
			setTodos(updatedTodos.data);
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div className="App">
			{/* conditional rendering for login form */}
			<div className="Header">
				{!loggedIn ? (
					<>
						<LoginForm handleLoginSubmit={handleLoginSubmit} />
					</>
				) : (
					<>
						<button onClick={handleLogout}>Logout</button>
					</>
				)}
			</div>

			<Content
				username={username}
				todos={todos}
				loggedIn={loggedIn}
				handleDelete={handleDelete}
				addTodoSubmit={addTodoSubmit}
				user_id={user_id}
			/>
			<Footer />
		</div>
	);
};

export default App;
