
import TodoList from './TodoList.jsx';

let Content = ({ username, todos, loggedIn, handleDelete }) => {

    return (
        <div className='Content'>
            {loggedIn ? <TodoList todos={todos} username={username} handleDelete={handleDelete} /> : <h2 className='welcome-text'>Log in to see your todos!</h2>}
        </div>
            )
}

export default Content;