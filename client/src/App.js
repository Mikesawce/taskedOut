import "./App.css";

import React, { useState, useEffect } from "react";
import axios from "axios";

import TodoList from "./components/TodoList.jsx";
import LoginForm from "./components/LoginForm.jsx";


const App = () => {
  const [todos, setTodos] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  
  useEffect(() => {
    const apiUrl = 'http://localhost:3000/api/todos'
    const fetchTodos = async () => {
      try {
        const res = await axios.get(apiUrl);
        setTodos(res.data);
      } catch (err) {
        console.error("Error finding todos", err);
      }
    };

    fetchTodos();
  }, []);

  const handleLogin = () => {
    setLoggedIn((prev) => !prev);
  }

  const handleLoginSubmit = async (username, password) => {

    const loginUrl = 'http://localhost:3000/api/login'
    const body = {
      username: username,
      password: password
    }

    try {
      const res = await axios.post(loginUrl, body);
      setLoggedIn(true);
    } catch (err) {
      console.error("Error logging in", err);
    }
  }

	return (
    <div className="App">
      {!loggedIn ? (
        <LoginForm handleLoginSubmit={handleLoginSubmit} />
      ) : (
        <>
          <button onClick={handleLogin}>Logout</button>
          <TodoList todos={todos} />
        </>
      )
      }
    </div>
    
	);
};

export default App;
