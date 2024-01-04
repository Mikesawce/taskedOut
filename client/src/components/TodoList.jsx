
const TodoList = ({ todos, username, handleDelete }) => {

    

    return (
        <>
            <h2>{username}'s Todos!</h2>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <button id={todo.id} onClick={(e) => handleDelete(e)}>This</button>
                        <span className="Title">{todo.title}</span>
                        <span className="Description">{todo.description}</span>
                        <span className="Priority">{todo.priority}</span>
                    </li>
                ))}
            </ul>
        </>
    )
};

export default TodoList;