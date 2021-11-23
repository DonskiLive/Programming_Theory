//import TodoActionType from './TodoActionType';
import { createSlice } from '@reduxjs/toolkit';
import { addTodoItem, changeTodos, getAllTodos } from '../../service/todoService';
import { startLoading, stopLoading } from '../appReducer/AppReducer';

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
            state.todos.push({title:payload.title, status:false})
        },
        changeTodoStatus:(state,{payload})=>{
            console.log(payload)
            state.todos[payload.index].status = payload.status
        },
        removeTodo: (state, {payload})=>{
            state.todos.splice(payload.index, 1)
        },
        clearTodo: (state)=>{
            state.todos =[]
        }
    }
})

export const {addTodo, changeTodoStatus, removeTodo, setTodo, clearTodo} = todoReducer.actions
export default todoReducer.reducer
export const todoSelector = state => state.todo.todos

export const addTodoAction = (title, uid)=>{
    return async dispatch =>{
        dispatch(startLoading())
        try{
            const response = await addTodoItem(title, uid) // db
            console.log(response)
            dispatch(addTodo({title}))  //state
            
        }catch(error){
            console.log(error)
        }finally{
            dispatch(stopLoading())
        }
       
    }
}

export const getAllTodoAction = (uid)=>{
    return async dispatch =>{
        dispatch(startLoading())
        try{
            const response = await getAllTodos(uid)
            dispatch(setTodo({todos:response.todos}))
        }catch(error){
            console.log(error)
        }
        finally{
            dispatch(stopLoading())
        }
    }
}

export const updateTodoStatusAction = (index, status, todos, uid)=>{
    return async dispatch =>{
        dispatch(startLoading())
        try{
            const newTodos = [...todos]
            const newTodo = {title: todos[index].title, status}
            newTodos.splice(index,1,newTodo)
            await changeTodos(newTodos, uid)
            dispatch(changeTodoStatus({index,status}))
        }catch(error){
            console.log(error)
        }finally{
            dispatch(stopLoading())
        }
    }
}

export const removeTodoAction = (index, todos, uid) =>{
    return async dispatch =>{
        dispatch(startLoading())
        try{
            const newTodos = [...todos]
            newTodos.splice(index,1)
            await changeTodos(newTodos, uid)
            dispatch(removeTodo({index}))
        }catch(error){
            console.log(error)
        }finally{
            dispatch(stopLoading())
        }
    
    }
}


/* const init = {
    todos: []
}

const todoReducer = (state = init, { type, payload }) => {
    switch (type) {
        case TodoActionType.addTodo:
            return { ...state, todos: [...state.todos, payload.todo]}
        case TodoActionType.changeStatus:
            return changeTodoSatus(state, payload.index, payload.status)
        case TodoActionType.removeTodo:
            return removeTodoByIndex(state, payload.index)
        default: return state
    }
}

const changeTodoSatus = (state, index, status) => {
    const tmpTodos = [...state.todos]
    tmpTodos[index] = { ...tmpTodos[index], status: status }
    return { ...state, todos: tmpTodos }
}

const removeTodoByIndex = (state, index) => {
    const tmpTodos = [...state.todos]
    tmpTodos.splice(index, 1)
    return {...state, todos: tmpTodos}
}

export default todoReducer */