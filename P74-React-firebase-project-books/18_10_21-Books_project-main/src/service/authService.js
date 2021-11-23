import { fb } from '../config/firebase-config'
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";


const auth = getAuth(fb)

export const login = async(email, password)=>{
	try {
 		const response = await signInWithEmailAndPassword(auth, email, password)
		localStorage.setItem('USER_LEVEL_ID', response.user.uid)
	} catch (error) {
		await Promise.reject(error)
	}
}

export const logout = async()=>{
	try{
		localStorage.removeItem('USER_LEVEL_ID')
		await signOut(auth)
	}catch(error){
		await Promise.reject(error)
	}
}