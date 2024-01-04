
import React, { useState } from 'react';

let AddTodo = ({ addTodoSubmit, user_id, setShowAddTodo }) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('');
    
    const handleAddTodo = (e) => {
        e.preventDefault();
        console.log(e.target.value);

        addTodoSubmit(title, description, priority, user_id);
        setShowAddTodo(false);
    }

    return (
        <>
            <form className='add-todo-form' onSubmit={handleAddTodo}>
                <label htmlFor='title'>Title</label>
                    <input type='text' id='title' value={title} onChange={e => setTitle(e.target.value)}/>
                <label htmlFor='description'>Description</label>
                    <input type='text' id='description' value={description} onChange={e => setDescription(e.target.value)}/>
                <label htmlFor='priority'>Priority</label>
                    <input type='text' id='priority' value={priority} onChange={e => setPriority(e.target.value)}/>
                <button type='submit'>Add Todo</button>
            </form>
        </>
    )
}

export default AddTodo;