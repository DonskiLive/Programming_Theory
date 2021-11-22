import {createStore, applyMiddleware} from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk'



const store = createStore(rootReducer, applyMiddleware(thunk));

export default store

/* function logger(store){
    return function(dispatch){
      return function (action){
        console.log('logger: ', store.getState())
        return dispatch(action)
      }
    }
  } */