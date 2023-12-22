// import React, { useState } from "react";


// const TodoCreate = ({ onCreate }) => {

//     const [newTodo, setNewTodo] = useState({
//         title: "",
//         description: "",
//         priority: 1
//     });

//     const handleInputChange = (e) => {

//         const { name, value } = e.target;
//         setNewTodo({
//             ...newTodo,
//             [name]: value
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         onCreate(newTodo);

//         setNewTodo({
//             title: "",
//             description: "",
//             priority: 1
//         });
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <label>
//                 Title:
//                 <input type="text" name="title" value={newTodo.title} onChange={handleInputChange} />
//             </label>
//             <label>
//                 Description:
//                 <input type="text" name="description" value={newTodo.description} onChange={handleInputChange} />
//             </label>
//             <label>
//                 Priority:
//                 <input type="number" name="priority" value={newTodo.priority} onChange={handleInputChange} />
//             </label>
//             <button type="submit">Create</button>
//         </form>
//     )
// };

// export default TodoCreate;