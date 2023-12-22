import React from "react";

const NavBar = ({ isLoggedIn, onLogin }) => {

    return (
        <header>
            <h1>HI!</h1>
            <button onClick={onLogin}>{isLoggedIn ? 'Logout' : 'Login'}</button>
        </header>
    )
}

export default NavBar;