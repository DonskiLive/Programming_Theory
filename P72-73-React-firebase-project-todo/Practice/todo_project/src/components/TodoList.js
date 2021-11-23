import { todoSelector, removeTodoAction, getAllTodoAction, updateTodoStatusAction } from '../todo_store/todoReducer/TodoReducer'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

const TodoList = () => {
    const todos = useSelector(todoSelector)
    console.log(todos)
    const dispatch = useDispatch()
    let actualUserId = localStorage.getItem('USER_ID')
    useEffect(() => {
        dispatch(getAllTodoAction(actualUserId))
    }, [dispatch, actualUserId])
    return (
        <ul>
            {
                todos.map((todo, index) =>
                    <li key={index}>
                        <div className='row'>
                            <input className='check_box' type="checkbox"
                                checked={todo.status}
                                onChange={(e) => dispatch(updateTodoStatusAction(index, e.target.checked, todos, actualUserId))} />
                            <span style={{ textDecoration: todo.status ? 'line-through' : 'none' }}>{todo.title}</span>
                            <button onClick={() => dispatch(removeTodoAction(index, todos, actualUserId))}>Remove</button>
                        </div>
                    </li>)
            }
        </ul>
    )
}

export default TodoList