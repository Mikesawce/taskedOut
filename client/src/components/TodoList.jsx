
const TodoList = ({ todos, username }) => {

    return (
        <>
            <h2>{username}'s Todos!</h2>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id} >
                        <strong>{todo.title}</strong> - {todo.description} (priority: {todo.priority})
                    </li>
                ))}
            </ul>
        </>
    )
};

export default TodoList;