
const EditTodo = ({ todoId, editTodoSubmit }) => {

    const handleClick = (e) => {
        e.preventDefault();
        console.log(todoId);
        editTodoSubmit(todoId);
    }

    return (
        <>
            <button id={todoId} className="editBtn" onClick={handleClick}>Edit</button>
        </>
    )
}

export default EditTodo;