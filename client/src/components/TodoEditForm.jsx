import React, { useState } from "react";


const TodoEditForm = ({ todo, onEdit }) => {

    const [editedTodo, setEditedTodo] = useState(todo);

    const handleEdit = (e) => {

        const { name, value } = e.target;

        setEditedTodo({
            ...editedTodo,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        onEdit(editedTodo);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input type="text" name="title" value={editedTodo.title} onChange={handleEdit} />
            </label>
            <label>
                Description:
                <input type="text" name="description" value={editedTodo.description} onChange={handleEdit} />
            </label>
            <label> 
                {/* Find way to make it a dropdown/checkbox */}
                Priority:
                <input type="number" name="priority" value={editedTodo.priority} onChange={handleEdit} />
            </label>
            <button type="submit">Edit</button>
        </form>
    )
};

export default TodoEditForm;