import { counterActionType as Types} from './ActionType';

export const incCount = ()=>{
    return{
        type:Types.inc
    }
}

export const decCount = ()=>{
    return{
        type:Types.dec
    }
}

export const addNum = (num)=>{
    return{
        type:Types.addNum,
        payload:{
            num
        }
    }
}

export const subNum = (num) =>{
    return {
        type: Types.subNum,
        payload:{
            num
        }
    }
}

export const incCounterAsync = ()=>{
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch({
                type:Types.inc
            })
        }, 3000)
    }
   
    
}