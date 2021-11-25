import React, {useEffect} from 'react'
import ToDoItem from "./ToDoItem";
import { useSelector, useDispatch } from 'react-redux';
import { todoSelector, getAllTodoAction } from '../store/todoReducer/TodoReducer';

const ToDoList = () => {

    const todos = useSelector(todoSelector)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllTodoAction())
    },[dispatch])

    return (
        <ul className="list-group">
            {todos.map(t=> {
                return (<ToDoItem key={t._id} todo={t}/>)
            })}
        </ul>
    )
}


export default ToDoList