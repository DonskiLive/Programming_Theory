import {db} from '../components/config/firebase-config'

import {doc, getDoc, setDoc, updateDoc, arrayUnion} from 'firebase/firestore'

export const addTodoItem = async(title, uid)=>{
	try{
		const docRef = doc(db, 'todos', uid) // Link to the data inside firebase database (connected db, name of collection, data according to id (document) from collection) / if there no such collection - we will create it
		const docData = await getDoc(docRef) // to read the data place inside getDoc(created link above)
		if(docData.exists()){
			await updateDoc(docRef, {
				todos: arrayUnion({
					title,
					status: false
				})
			})
		}else{
			await setDoc(docRef, {
				todos: {
					title,
					status: false
				}
			})
		}
	}catch(error){
		console.log(error.message)
	}
}

export const getAllTodos = async(uid)=>{
	try{
		const docRef = doc(db, 'todos', uid)
		const docData = await getDoc(docRef)
		if(docData.exists()){
			return docData.data()
		}
		return {todos: []}
	}catch(error){
		console.log(error.message)
	}
}

export const changeTodos = async(todosArr, uid)=>{
	try{
		const docRef = doc(db, 'todos', uid)
		await updateDoc(docRef, {todos:[...todosArr]})
	}catch(error){
		console.log(error)
	}
}