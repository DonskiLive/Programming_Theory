import {db} from './../config/firebase-config'

import {doc, getDoc, setDoc, updateDoc, arrayUnion} from 'firebase/firestore'

export const addTodoItem = async (title, uid)=> {
    try{
        const docRef = doc(db, 'todos', uid)
        const docData = await getDoc(docRef)

        if(docData.exists()){
            await updateDoc(docRef, {
                todos: arrayUnion({
                    title,
                    status: false
                })
            })
        }else{
            await setDoc(docRef, {todos: [{title, status:false}]})
        }


    }catch (error){
        console.log(error)
    }
}

export const getAllTodos = async (uid) =>{
    try{
        const docRef = doc(db, 'todos', uid)
        const docData = await getDoc(docRef)
        if(docData.exists()){
            console.log(docData.data())
            return docData.data();
        } 
        return {todos: []}
    }catch(error){
        console.log(error.message)
    }
}

export const changeTodos = async (todos, uid)=>{
    try{
        const docRef = doc(db, 'todos', uid)
        await updateDoc(docRef, {todos:[...todos]})
    }catch(error){
        console.log(error)
    }
}