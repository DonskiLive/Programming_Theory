import {combineReducers} from 'redux';
import counterReducer from './counter/counterReducer';
import postReducer from './posts/postsReducer';
import placeHolderReducer from './placeHolderReducer';

export default combineReducers({
    counterReducer,
    postReducer,
    placeHolderReducer
})