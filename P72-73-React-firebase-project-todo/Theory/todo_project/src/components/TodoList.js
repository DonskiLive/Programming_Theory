import { updateTodoStatusAction, removeTodoAction, todoSelector, getAllTodoAction, clearTodo } from '../todo_store/todoReducer/TodoReducer';
import { useSelector, useDispatch } from 'react-redux';
import {logoutAction} from '../todo_store/appReducer/AppReducer'
import { useEffect } from 'react';

//const userID = localStorage.getItem('USER_ID')

const TodoList = () => {
    const todos = useSelector(todoSelector)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllTodoAction(localStorage.getItem('USER_ID')))
    }, [dispatch])

    return (
        <>
        <ul>
            {
                todos.map((todo, index) =>
                    <li key={index}>
                        <div className='row'>
                            <input className='check_box' type="checkbox"
                                checked={todo.status}
                                onChange={e => dispatch(updateTodoStatusAction(index, e.target.checked, todos, localStorage.getItem('USER_ID')))} />
                            <span style={{ textDecoration: todo.status ? 'line-through' : 'none' }}>{todo.title}</span>
                            <button onClick={() => dispatch(removeTodoAction(index, todos,localStorage.getItem('USER_ID')))}>Remove</button>
                        </div>
                    </li>)
            }
        </ul>
        <div className = 'row'>
            <button style ={{marginLeft:'auto'}}
                    onClick ={()=>{
                        dispatch(logoutAction())
                        dispatch(clearTodo())
                    }}
            >logout</button>

        </div>
        </>
    )
}


export default TodoList