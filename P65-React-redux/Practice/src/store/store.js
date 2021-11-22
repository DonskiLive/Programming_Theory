import {createStore, applyMiddleware} from 'redux'
import rootReducer from './rootReducer'
import thunk from 'redux-thunk'

const todoStore = createStore(rootReducer, applyMiddleware(thunk))

export default todoStore