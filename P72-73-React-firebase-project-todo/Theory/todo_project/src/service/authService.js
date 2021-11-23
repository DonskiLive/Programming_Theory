import {fb} from './../config/firebase-config'
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut} from 'firebase/auth'

const auth = getAuth(fb)

export const login = async(email, password)=>{
    try{
           
        const response = await signInWithEmailAndPassword(auth, email, password);
        console.log(response)
        localStorage.setItem('USER_ID', response.user.uid)

    }catch(error){
        console.log(error)
        await Promise.reject(error)
    }
}

export const registration = async (email, password)=>{
    try{
        const response = await createUserWithEmailAndPassword(auth, email, password);
        console.log(response)
        localStorage.setItem('USER_ID', response.user.uid)

    }catch(error){
        console.log(error.message)
        await Promise.reject(error)
    }
}

export const logout = async ()=>{
    console.log('logout service')
    try{
        await signOut(auth)
        localStorage.removeItem('USER_ID')
    }catch(error){
        console.log(error.message)
        await Promise.reject(error)
    }
}



/* export async function login(email, password){
    try{
           
        const response = await signInWithEmailAndPassword(auth, email, password);
        console.log(response)
        localStorage.setItem('USER_ID', response.user.uid)

    }catch(error){
        console.log(error)
        await Promise.reject(error)
    }
} */