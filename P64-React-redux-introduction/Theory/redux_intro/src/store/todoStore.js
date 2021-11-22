import { createStore } from 'redux';
import todoReducer from './todoReducer';

const todoStore = createStore(todoReducer)

export default todoStore