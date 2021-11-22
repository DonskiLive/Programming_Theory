import {combineReducers} from 'redux'
import loaderReducer from './loaderReducer'
import todoReducer from './todo/todoReducer'

export default combineReducers({
	todoReducer,
	loaderReducer	
})