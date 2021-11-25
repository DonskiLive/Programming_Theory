import {combineReducers} from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import appReducer from './appReducer/AppReducer'
import todoReducer from './todoReducer/TodoReducer'

const rootReducer = combineReducers({
    todo: todoReducer,
    app: appReducer
})

const store = configureStore({reducer: rootReducer })

export default store