import Types from './ActionType';

const BASE_URL = 'http://localhost:3000'

export const getMenu = ()=>{
    return (dispatch) =>{
        dispatch({
            type:Types.changeLoader,
            payload: true
        })
        setTimeout(()=>{
            fetch(`${BASE_URL}/menu`)
            .then((res)=>{
                if(res.ok){
                return res.json()
                }
                throw new Error(`Request error! status ${res.status}`)
            })
            .then((data)=>{
                dispatch({
                    type: Types.getMenu,
                    payload: data
                })
               
            }).catch((error)=>{
                dispatch({
                    type:Types.error,
                    payload: error.message
                })
            }).finally(()=>{
                dispatch({
                    type: Types.changeLoader,
                    payload:false
                })
            })

        }, 1500)
    }
}

export const setOrder = (order)=>{
    let id = 0
    const curOrder = {
        id: id++,
        order
    }
    return(dispatch) =>{
        fetch(`${BASE_URL}/orders`, {
            method: 'POST',
            body: JSON.stringify(curOrder),
            headers:{
                'Content-Type' : 'application/json'
            }
        }).then((res)=>{
            if(res.ok){
                return res.json()
            }
            throw new Error (`Request error! status ${res.status}`)
        }).then((data)=>{
 
            dispatch({
                type:Types.setOrder,
                payload:data.id
            })
        }).catch((error)=>{
            dispatch({
                type:Types.error,
                payload: error.message
            })
        })
    }
}

export const addItemToCart = (id)=>{
    return{
        type: Types.addItem,
        payload:id
    }
}

export const removeItemFromCart = (id)=>{
    return {
        type:Types.removeItem,
        payload:id
    }
}

export const clearCart = ()=>{
    return{
        type: Types.clearCart
    }
}