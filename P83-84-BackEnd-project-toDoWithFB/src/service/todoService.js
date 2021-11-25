import {db, storage} from './../config/firebase-config'

import {doc, getDoc, setDoc, updateDoc, arrayUnion, serverTimestamp} from 'firebase/firestore'
import { deleteObject, ref } from '@firebase/storage'

export const addTodoItem = async (title, uid, img, date)=> {
    try{
        console.log(img, 'service')
        const docRef = doc(db, 'todos', uid)
        const docData = await getDoc(docRef)

        if(docData.exists()){
            await updateDoc(docRef, {
                date: serverTimestamp(),
                todos: arrayUnion({
                    title,
                    status: false,
                    img,
                    date
                })
            })
        }else{
            await setDoc(docRef, {todos: [{title, status:false, img, date}]})
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

export const changeTodos = async (todos, uid, img)=>{
    try{
        const docRef = doc(db, 'todos', uid)
        await updateDoc(docRef, {todos:[...todos]})
       
        if(img){   
            //const fileName = img.split('?')[0].split('/').splice(-1,1)[0]
            const fileRef = ref(storage, img)
            console.log(fileRef)
            await deleteObject (fileRef)
        }
    }catch(error){
        console.log(error)
    }
}

//https://firebasestorage.googleapis.com/v0/b/personaltodo-2b4ad.appspot.com/o/asset-47.jpg?alt=media&token=6824c474-015a-4d21-9fd5-dc72eb9d2b90
/* 
const catSrc = (str)=>{
    return str.split('?')[0]
} */