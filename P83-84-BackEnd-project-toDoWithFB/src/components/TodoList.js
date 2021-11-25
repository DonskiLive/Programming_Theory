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
        <ul className = 'd-flex flex-wrap justify-content-between'>
            {
                todos.map((todo, index) =>
                    <li key={index} className='col-6'>
                        <div className='card d-flex flex-column p-3 mb-3'>
                            <div className='card-body'>
                            <img src={todo.img} className='w-75'/>
                            <br/>
                            <input className='check_box' type="checkbox"
                                checked={todo.status}
                                onChange={e => dispatch(updateTodoStatusAction(index, e.target.checked, todos, localStorage.getItem('USER_ID')))} />
                            <span style={{ textDecoration: todo.status ? 'line-through' : 'none' }}>{todo.title}</span>
                            </div>
                            <button className='btn btn-primary w-25 mx-auto' onClick={() => dispatch(removeTodoAction(index, todos,localStorage.getItem('USER_ID'), todo.img))}>Remove</button>
                        </div>
                    </li>)
            }
        </ul>
        <hr/>
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