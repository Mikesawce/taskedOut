import React, { useState } from "react";


const LoginForm = ({ handleLoginSubmit }) => {
    //local state for login form
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        
        //pass the username and password to the handleLoginSubmit function prop
        handleLoginSubmit(username, password);
    }
    
    return (
        <form onSubmit={handleLogin}>
            <label>
                Username:
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </label>
            <button type="submit">Login</button>
        </form>
    )
};

export default LoginForm;