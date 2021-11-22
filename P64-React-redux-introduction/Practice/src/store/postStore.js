import {createStore} from 'redux'
import postReducer from './postReducer'


const postStore = createStore(postReducer)

export default postStore