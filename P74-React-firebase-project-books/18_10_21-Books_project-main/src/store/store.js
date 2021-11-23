import {configureStore} from '@reduxjs/toolkit'
import {combineReducers} from 'redux'
import authReducer from './app/authReducer'
import bookReducer from './books/booksReducer'

const rootReducer = combineReducers({
    book: bookReducer,
    auth: authReducer
})

const store = configureStore({reducer: rootReducer})
export default store