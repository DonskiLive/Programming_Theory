import TodoRow from './TodoRow';
import {connect} from 'react-redux'
import { REMOVE_TODO, CHANGE_STATUS } from '../store/actionsType';


const TodoList = ({todos, changeStatus, removeTodo})=>{
    console.log(todos)
    return(
        <ul>
            {todos.map((todo, index)=>
                <li key = {index}>
                    <TodoRow todo = {todo} 
                             index = {index}
                             changeStatus = {changeStatus}
                             removeTodo = {removeTodo} />
                </li>
            )}
        </ul>
    )
}

const mapStateToProps = state =>{
    
    return{
        todos: state.todos 
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        changeStatus: (index, status) => dispatch({type:CHANGE_STATUS, payload:{index, status}}),
        removeTodo: (index)=> dispatch({type:REMOVE_TODO, payload:{index}})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);