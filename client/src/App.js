import './App.css';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './components/NavBar';
import LoginForm from './components/LoginForm';


const App = () => {

  const [isloggedin, setIsloggedin] = useState(false);
  const [todos, setTodos] = useState([]);

  useEffect(() => {

    const fetchTodos = async () => {
      
      try {
        const res = await axios.get('/api/todos');
        setTodos(res.data);

      } catch (err) {
        console.err('Error finding todos', err);
      }
    }

    fetchTodos();

  }, []);

  const handleLogin = () => { 
    setIsloggedin( prev => !prev )
  }

  const handleLoginFormSubmit = (username, password) => {

    const login = async () => {
      try {
        const res = await axios.post('/api/login', { username, password });
        console.log(res.data);
        setIsloggedin(true);

      } catch (err) {
        console.err('Error logging in', err);
      }
    }

    login();
  }

  return (
    <div className="App">
      
      <NavBar
        isloggedin={isloggedin}
        handleLogin={handleLogin}
      />
      {!isloggedin && <LoginForm onLogin={handleLoginFormSubmit} />}

    </div>
  );
}

export default App;
