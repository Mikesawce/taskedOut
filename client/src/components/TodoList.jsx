
const TodoList = ({ todos, username, handleDelete }) => {

    const handleDeleteSubmit = (e) => {
        e.preventDefault();
        handleDelete(e);
    }

    return (
        <>
            <h2 style={{marginBottom: '5rem', marginTop: '-35rem'}}>{username}'s Todos!</h2>
            <div className="tableHead">
                <span className="deleteBtn"></span>
                <span className="title">Title</span>
                <span className="description">Description</span>
                <span className="priority">Priority</span>
            </div>            
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <button id={todo.id} onClick={(e) => handleDeleteSubmit(e)} className="deleteBtn">✗</button>
                        <span className="title">{todo.title}</span>
                        <span className="description">{todo.description}</span>
                        <span className="priority">{todo.priority}-PlaceHolderForPriorityIcon</span>
                    </li>
                ))}
            </ul>
        </>
    )
};

export default TodoList;