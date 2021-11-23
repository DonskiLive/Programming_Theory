import { fb } from '../components/config/firebase-config'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

const auth = getAuth(fb)

export const login = async(email, password)=>{
	try {
 		const response = await signInWithEmailAndPassword(auth, email, password)
		console.log(response)
		localStorage.setItem('USER_ID', response.user.uid)
	} catch (error) {
		console.log(error.message);
		await Promise.reject(error)
	}
}

export const registration = async(email, password)=>{
	try {
		const response = await createUserWithEmailAndPassword(auth, email, password)
		console.log(response)
		localStorage.setItem('USER_ID', response.user.uid)
	} catch (error) {
		console.error(error.message);
		await Promise.reject(error)
	}
}

export const logout = async()=>{
	try{
		localStorage.removeItem('USER_ID')
		await signOut(auth)
		
	}catch(error){
		console.error(error.message);
		await Promise.reject(error)
	}
}