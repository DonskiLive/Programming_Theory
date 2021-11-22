import Type from './BooksActionTypes';
import { startLoading, stopLoading } from '../appReducer/AppActionsCreator';
import { getBooksFromLocalStorage, addBookToStorage, addCommentToBook } from '../../data/books';

export const getAllBooks = ()=>{
    return dispatch =>{
        dispatch(startLoading())
        setTimeout(()=>{
            try{
                dispatch(_getAllBooks())
                dispatch(stopLoading())
            }catch(e){
                console.log(e.message)
            }
        }, 2000)
    }
}

export const addBookToBooks = (book) =>{
    return dispatch =>{
        dispatch(startLoading())
        setTimeout(()=>{
            try{
                addBookToStorage(book)
                dispatch(_addBook(book))
                dispatch(stopLoading())
            }catch(e){
                console.log(e.message)
            }
        },2000)
    }
}

export const addComment = (bookId, comment) =>{
    return dispatch =>{
        dispatch(startLoading())
        setTimeout(()=>{
            try{
                addCommentToBook(bookId, comment)
                dispatch(_addComment(bookId, comment))
                dispatch(stopLoading())
            }catch(e){
                console.log(e.message)
            }
        }, 1000)
    }
}

const _getAllBooks = ()=>{
    return{
            type: Type.getAllBooks,
            payload: getBooksFromLocalStorage()
    }
}

const _addBook = (book)=>{
    return{
        type: Type.addBook,
        payload:book
    }
}

const _addComment = (bookId, comment) =>{

    return{
        type: Type.addCommentToBook,
        payload:{
            bookId,
            comment
        }
    }
}

