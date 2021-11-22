import * as Types from './actionsType'

const initState = {
    posts:[] 
}

export default function postReducer(state = initState, {type, payload}){
    switch(type){
        case Types.ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {title: payload.formData.title, text: payload.formData.text, author: payload.formData.author, date: new Date().toDateString()}]
            }
        default:
            return state;
    }
}