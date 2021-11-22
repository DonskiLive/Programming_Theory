const init = {
    posts: [],
    loading: false,
    error: null
}

export default function placeHolderReducer(state = init, {type, payload}){
    switch(type){
        case 'LOAD':
            return {...state, loading: true, error: null}
        case 'SET_DATA':
            return {...state, loading: false, posts: payload.posts}
        case 'ERROR':  
            return{...state, loading:false, error: payload.error}   
        default: return state;
    }
}