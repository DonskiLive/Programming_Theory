import { createSlice } from '@reduxjs/toolkit'
import { addBookItem, changeBook, getAllBooks } from '../../service/bookService';

const initialState = {
    books: [],
    searchedBooks: [],
    loading: false,
    error: {
        bookCreator: null,
        bookUpdate: null,
        login: null
    }
}

const bookReducer = createSlice({
    name: 'book',
    initialState,
    reducers: {
        setBooks: (state, { payload }) => {
            state.books = payload;
            state.loading = false;
        },
        bookCreator: (state, { payload }) => {
            state.books.push(payload);
            state.loading = false;
        },
        bookRemover: (state, { payload }) => {
            state.books = payload.books;
            state.loading = false;
        },
        bookSearch: (state, { payload }) => {
            state.searchedBooks = payload.books;
            state.loading = false;
        },
        editBook: (state, { payload }) => {
            state.books = payload.books;
            state.loading = false;
        },
        load: (state) => {
            state.loading = true;
            state.error = { bookCreator: null, login: null }
        },
        loaded: (state) => {
            state.loading = false;
        },
        error: (state, { payload }) => {
            state.loading = false;
            state.error = payload
        },
        resetError: (state) => {
            state.error.bookCreator = null
            state.error.bookUpdate = null
            state.error.login = null
        }
    }
})

export default bookReducer.reducer;
export const { initState, setBooks, loaded, bookCreator, bookRemover, bookSearch, editBook, load, error, resetError } = bookReducer.actions;
export const bookSelector = state => state.book;

export const getAllBookAction = () => {
    return async dispatch => {
        dispatch(load())
        try {
            const response = await getAllBooks()
            dispatch(setBooks(response.books))
        } catch (error) {
            console.log(error)
        }
    }
}

export const bookCreatorAction = (book, bookExist) => {
    return async dispatch => {
        dispatch(load())
        try {
            if (!bookExist) {
                const newBook = { ...book, id: Date.now() }
                const response = await addBookItem(newBook)
                console.log(response)
                dispatch(bookCreator(newBook))
            } else {
                throw new Error('Book with specified title is already exist')
            }
        } catch (e) {
            dispatch(error({ bookCreator: e.message }))
        }
    }
}

export const bookRemoverAction = (books, id) => {
    return async dispatch => {
        dispatch(load())
        try {
            const newBooks = [...books]
            const index = newBooks.findIndex(book => book.id === id)
            newBooks.splice(index, 1)
            if (newBooks) {
                await changeBook(newBooks)
                dispatch(bookRemover({ books: [...newBooks] }))
            } else {
                throw new Error('Error during delete of specified book')
            }
        } catch (e) {
            console.log(e.message)
        }
    }
}

export const updateBookAction = (books, data, bookExist) => {
    return async dispatch => {
        dispatch(load())
            try {
                if (!bookExist) {
                    const newBooks = [...books]
                    const index = newBooks.findIndex(book => book.id === data.id)
                    newBooks[index] = data;
                    await changeBook(newBooks)
                    dispatch(editBook({ books: [...newBooks] }))
                } else {
                    throw new Error('Book with specified title is already exist')
                }
            } catch (e) {
                dispatch(error({ bookUpdate: e.message }))
            }
    }
}

export const bookSearchAction = (filteredBooks) => {
    return dispatch => {
        dispatch(load())
        try {
            dispatch(bookSearch({ books: [...filteredBooks] }))
        } catch (e) {
            console.log(e.message)
        }
    }
}