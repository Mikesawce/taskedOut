import React, { useState } from 'react';

import AddTodo from './AddTodo.jsx';
import TodoList from './TodoList.jsx';
import TodoSort from './TodoSort.jsx';

let Content = ({ username, todos, setTodos, loggedIn, handleDelete, addTodoSubmit, user_id }) => {

    const [showAddTodo, setShowAddTodo] = useState(false);

    const handleShowAddTodo = () => {
        setShowAddTodo(!showAddTodo);
    }

    return (
        <div className='Content'>
            {loggedIn ? <>
                <TodoSort todos={todos} setTodos={setTodos} />
                <TodoList todos={todos} username={username} handleDelete={handleDelete} />
                <button className='add-todo-button' onClick={handleShowAddTodo}>Add Todo</button>
                {showAddTodo && <AddTodo addTodoSubmit={addTodoSubmit} user_id={user_id} setShowAddTodo={setShowAddTodo} />}
            </>
                : <h2 className='welcome-text'>Log in to see your todos!</h2>}
        </div>
            )
}

export default Content;