import React from 'react'
import ToDoItemsButtons from "./ToDoItemsButtons";


const ToDoItem = ({todo}) => {

    return (
        <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className={todo.completed ? 'text-danger text-decoration-line-through': ''} >{todo.title}</div>
            <ToDoItemsButtons id={todo._id} completed = {todo.completed}/>
        </li>
    )
}
export default ToDoItem