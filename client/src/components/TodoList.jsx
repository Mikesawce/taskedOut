
const TodoList = ({ todos, username, handleDelete }) => {

    const handleDeleteSubmit = (e) => {
        e.preventDefault();
        handleDelete(e);
    }

    return (
        <>
            <h2>{username}'s Todos!</h2>
            <div className="tableHead">
                <span className="deleteBtn"></span>
                <span className="Title">Title</span>
                <span className="Description">Description</span>
                <span className="Priority">Priority</span>
            </div>            
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <button id={todo.id} onClick={(e) => handleDeleteSubmit(e)} className="deleteBtn">✗</button>
                        <span className="Title">{todo.title}</span>
                        <span className="Description">{todo.description}</span>
                        <span className="Priority">{todo.priority}-PlaceHolderForPriorityIcon</span>
                    </li>
                ))}
            </ul>
        </>
    )
};

export default TodoList;