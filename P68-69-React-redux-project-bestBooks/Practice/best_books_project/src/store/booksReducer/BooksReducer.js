import Type from './BooksActionTypes';

const init = {
    books:[]
}

const BooksReducer = (state = init, {type, payload})=>{
    switch(type){
        case Type.getAllBooks:
            return {...state, books: [...payload]}
        case Type.addBook:
            return{ ...state, books: [...state.books, payload]} 
        case Type.addCommentToBook:
            return _addComment(state, payload.bookId, payload.comment)     
        default: return state     
    }
}

const _addComment = (state, id, comment)=>{
    const newBooks = [...state.books]
    const index = newBooks.findIndex(b => b.id === id)
    const book = {...newBooks[index]}
    book.comments = [...book.comments, comment]
    book.rate = (book.comments.reduce((sum, comment)=>sum += +comment.note, 0)/ book.comments.length).toFixed(1)
    newBooks[index] = book
    return{
        ...state,
        books: newBooks
    }
}

export default BooksReducer