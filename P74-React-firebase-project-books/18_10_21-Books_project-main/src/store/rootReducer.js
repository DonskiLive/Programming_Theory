/* import {combineReducers} from 'redux' */
import {combineReducers} from 'redux'
import bookReducer from './books/booksReducer'

const rootReducer = combineReducers({
    bookReducer
})

export default rootReducer