import { createSlice } from '@reduxjs/toolkit';
import { startLoading, stopLoading } from '../appReducer/AppReducer';
import { getAllTodos, createTodo, updateTodo, deleteTodo } from '../../service/todo.api';

const initialState = {
    todos: []
}

const todoReducer = createSlice({
    name:'todo',
    initialState,
    reducers:{
        setTodo: (state, {payload}) =>{
            state.todos = payload.todos
        },
        addTodo: (state, {payload}) =>{
            state.todos.push(payload)
        },
        changeTodoStatus:(state,{payload})=>{
            state.todos.find(todo => todo._id===payload.id).completed = payload.status
        },
        removeTodo: (state, {payload})=>{
            state.todos = state.todos.filter(todo =>todo._id!==payload.id)
        }
    }
})

export const {addTodo, changeTodoStatus, removeTodo, setTodo} = todoReducer.actions
export default todoReducer.reducer
export const todoSelector = state => state.todo.todos

export const addTodoAction = (title)=>{
    return async dispatch =>{
        dispatch(startLoading())
        try{
            const response = await createTodo(title) 
            dispatch(addTodo({...response})) 
            
        }catch(error){
            console.log(error)
        }finally{
            dispatch(stopLoading())
        }
       
    }
}

export const getAllTodoAction = ()=>{
    return async dispatch =>{
        dispatch(startLoading())
        try{
            const response = await getAllTodos()
            dispatch(setTodo({todos:response}))
        }catch(error){
            console.log(error)
        }
        finally{
            dispatch(stopLoading())
        }
    }
}

export const updateTodoStatusAction = (id, status)=>{
    return async dispatch =>{
        dispatch(startLoading())
        try{
            await updateTodo(id, {completed: status})
            dispatch(changeTodoStatus({id, status}))
        }catch(error){
            console.log(error)
        }finally{
            dispatch(stopLoading())
        }
    }
}

export const removeTodoAction = (id) =>{
    return async dispatch =>{
        dispatch(startLoading())
        try{
            await deleteTodo(id)
            dispatch(removeTodo({id}))
        }catch(error){
            console.log(error)
        }finally{
            dispatch(stopLoading())
        }
    
    }
}

/* const findIndexById = (array, id)=>{
    return array.findIndexById(item => item.id === id)
} */
