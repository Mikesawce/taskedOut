import "./App.css";

import React, { useState, useEffect } from "react";
import axios from "axios";

import TodoList from "./components/TodoList.jsx";


const App = () => {
  const [todos, setTodos] = useState([]);
  console.log(todos);
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await axios.get("/api/todos");
        setTodos(res.data);
      } catch (err) {
        console.error("Error finding todos", err);
      }
    };
    console.log(todos);
    fetchTodos();
  }, [todos]);


	return (
    <div className="App">
      <TodoList todos={todos} />
    </div>
    
	);
};

export default App;
