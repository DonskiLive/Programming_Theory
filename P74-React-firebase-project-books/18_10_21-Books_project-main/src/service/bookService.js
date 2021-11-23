import { db } from '../config/firebase-config'

import { doc, getDoc, setDoc, updateDoc, arrayUnion } from 'firebase/firestore'

export const addBookItem = async ({ id, title, genre, author, pdf, text, yearIssue, cover }) => {
	try {
		const docRef = doc(db, 'booksdatabase', 'books')
		const docData = await getDoc(docRef)

		if (docData.exists()) {
			await updateDoc(docRef, {
				books: arrayUnion({
					id, title, genre, author, pdf, text, yearIssue, cover
				})
			})
		} else {
			await setDoc(docRef, {
				books: {
					id, title, genre, author, pdf, text, yearIssue, cover
				}
			})
		}
	} catch (error) {
		console.log(error.message)
	}
}

export const getAllBooks = async () => {
	try {
		const docRef = doc(db, 'booksdatabase', 'books')
		const docData = await getDoc(docRef)
		if (docData.exists()) {
			return docData.data()
		}
		return { books: [] }
	} catch (error) {
		console.log(error.message)
	}
}

export const changeBook = async (booksArr) => {
	try {
		const docRef = doc(db, 'booksdatabase', 'books')
		await updateDoc(docRef, { books: [...booksArr] })
	} catch (error) {
		console.log(error)
	}
}