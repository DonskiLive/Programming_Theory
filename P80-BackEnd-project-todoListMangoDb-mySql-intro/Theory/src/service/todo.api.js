import client from './api';

export const getAllTodos = async ()=>{
    try{
        const response = await client.get('/todos')
        return response.data
    }catch(error){
        console.log(error)
    }
}

export const createTodo = async (title)=>{
    try{
        const response = await client.post('/todos', title)
        return response.data
    }catch(error){
        console.log(error)
    }
}

export const updateTodo = async (id, data)=>{
    console.log(data, 'update')
    try{
        const response = await client.put(`/todos/${id}`, data)
        return response.data
    }catch(error){
        console.log(error)
    }
}

export const deleteTodo = async (id)=>{
    try{
        const response = await client.delete(`/todos/${id}`)
        return response.data
    }catch(error){
        console.log(error)
    }
}