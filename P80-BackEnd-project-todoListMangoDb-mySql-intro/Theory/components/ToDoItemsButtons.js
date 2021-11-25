import React from "react";
import { updateTodoStatusAction, removeTodoAction } from '../store/todoReducer/TodoReducer';
import { useDispatch } from 'react-redux';


const ToDoItemsButtons = ({id, completed}) => {
    const dispatch = useDispatch()

    return (
        <div>
            <button
                onClick={()=>dispatch(updateTodoStatusAction(id, !completed))}
                className="btn btn-outline-primary btn-sm mx-2">
                <i className="bi bi-check2-square"></i> Check
            </button>

            <button
                onClick={()=>dispatch(removeTodoAction(id))}
                className="btn btn-outline-danger btn-sm">
                <i className="bi bi-trash"></i> Delete
            </button>
        </div>
    )
}

export default ToDoItemsButtons