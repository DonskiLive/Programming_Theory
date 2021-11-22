import {counterActionType as Types}from './ActionType'

const init = {
    count:0
}

export default function counterReducer(state = init, {type, payload}){
    switch(type){
        case Types.inc: return {...state, count: state.count +1}
        case Types.dec: return {...state, count: state.count -1}
        case Types.addNum: return{...state, count: state.count + payload.num}
        case Types.subNum: return{...state, count:state.count - payload.num}
        default:return state
    }
}