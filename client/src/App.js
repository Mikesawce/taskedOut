import "./App.css";

import React, { useState, useEffect } from "react";
import axios from "axios";

import TodoList from "./components/TodoList.jsx";
import LoginForm from "./components/LoginForm.jsx";


const App = () => {

  const [todos, setTodos] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user_id, setUser_id] = useState(null);
  
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

    if(loggedIn && user_id) {
      fetchTodos();
    }
  }, [loggedIn, user_id]);

  const handleLogout = () => {
    setLoggedIn(false);
    setUser_id(null);
    console.log(loggedIn, user_id);
  }

  const handleLoginSubmit = async (username, password) => {

    const loginUrl = 'http://localhost:3000/login'
    const body = {
      username: username,
      password: password
    }

    try {
      const res = await axios.post(loginUrl, body);
      console.log(res.data);
      setUser_id(res.data.id);
      setLoggedIn(true);
    } catch (err) {
      console.error("Error logging in", err);
    }
  }

	return (
    <div className="App">
      {!loggedIn ? (
        <>
          <LoginForm handleLoginSubmit={handleLoginSubmit} />
        </>
      ) : (
        <>
          <button onClick={handleLogout}>Logout</button>
          <TodoList todos={todos} />
        </>
      )
      }
    </div>
    
	);
};

export default App;
