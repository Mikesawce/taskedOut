
const TodoSort = ({ todos, setTodos }) => {
    
        const handleSort = (e) => {
            e.preventDefault();
            let sortedTodos = [...todos];
            sortedTodos.sort((a, b) => {
                return a.priority - b.priority;
            });
            setTodos(sortedTodos);
        }
    
        return (
            <div className="todo-sort">
                <button onClick={handleSort}>Sort by Priority</button>
            </div>
        )
}

export default TodoSort;