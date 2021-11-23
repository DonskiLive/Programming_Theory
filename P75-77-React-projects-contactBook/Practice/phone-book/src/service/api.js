import axios from 'axios'

const client = axios.create({
    baseURL:'http://dev.phonebook-1.telran-edu.de'
})

client.interceptors.response.use(
    response => {
        if(response.config.url.startsWith('/api/user/login')){
            localStorage.setItem('TOKEN', response.headers['access-token'])
        }
        return response
    },
    error=>{
        if(error.response.status === 401){
            localStorage.removeItem('TOKEN')
        }
        return Promise.reject(error) 
    }
    
)

client.interceptors.request.use(
    config =>{
        if(
            !config.url.startsWith('/api/user')
        ){
            config.headers = {
                'Access-Token':localStorage.getItem('TOKEN') || ''
            }
        }
        return config
    },
    error =>{
        return Promise.reject(error)
    }
)

export const registration = async ({email, password})=>{
    try{
        const response = await client.post('/api/user', {email, password});
        await client.get(`/api/user/activation/${response.data}`)
        console.log(response)
    }catch(error){
        throw new Error('user is alredy exist')
    }
}

export const login = async ({email, password}) =>{
    try{
        await client.post('/api/user/login', {email, password})
        console.log('login success')
    }catch(error){
        throw new Error ('wrong email or password')
    }
}

export const getAllContacts = async ()=>{
    try{
        const response = await client.get('/api/my-contacts')
        console.log(response)
        return response.data
    }catch(error){
        console.log(error)
    }
}

export const addNewContact = async (contact)=>{
    try{
        const response = await client.post('/api/my-contacts', contact)
        console.log(response)
        return response.data
    }catch(error){
        console.dir(error)
        throw new Error(error.response.data.message)
    }
}

export const updateMyContact = async (contact)=>{
    try{
        const response = await client.put('/api/my-contacts', contact)
        console.log(response)
        return response.data
    }catch(error){
        console.dir(error)
        throw new Error(error.response.data.message)
    }
}

export const deleteMyContact = async (id) =>{
    try{
        await client.delete(`/api/my-contacts/${id}`)
    }catch(error){
        throw new Error(error.response.data.message)
    }
}