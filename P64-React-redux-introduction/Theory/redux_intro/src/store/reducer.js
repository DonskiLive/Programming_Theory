import * as Actions from './actionsType'

const initState = {
    count: 0
}

export default function reducer(state = initState, {type, payload}){
    switch(type){
        case Actions.INC:
            return {...state, count: state.count +1} 
        case Actions.DEC:
            return{...state, count: state.count -1}   
        case Actions.ADD_NUM:
            return{...state, count: state.count + payload.num}
        case Actions.SUB_NUM:
            return{...state, count: state.count - payload.num}         
        default:
            return state;
    }
}