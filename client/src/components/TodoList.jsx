import React from "react";


const TodoList = ({ todos }) => {

    return (
        <>
            <h2>Your tasks!</h2>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <strong>{todo.title}</strong> - {todo.description} (priority: {todo.priority})
                    </li>
                ))}
            </ul>
        </>
    )
};

export default TodoList;