import Type from './AppActionTypes';

const init = {
    isLoading: false
}

const AppReducer = (state = init, {type}) =>{
    switch(type){
        case Type.showLoader:
            return{
                ...state,
                isLoading: true  
            }
        case Type.hideLoader:
            return{
                ...state,
                isLoading:false
            }    
        default:return state
    }
}

export default AppReducer