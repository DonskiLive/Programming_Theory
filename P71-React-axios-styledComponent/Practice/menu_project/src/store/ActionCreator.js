import Types from './ActionType';
import axios from 'axios'

const client = axios.create({
    baseURL: "http://localhost:3000"
})

export const getMenu = () => {
    return (dispatch) => {
        dispatch({ type: Types.changeLoader, payload: true })
        setTimeout(() => {
            client.get('/menu')
                .then(response => {
                    dispatch({ type: Types.getMenu, payload: response.data })
                }).catch((error) => {
                    dispatch({ type: Types.error, payload: error.message })
                }).finally(() => {
                    dispatch({ type: Types.changeLoader, payload: false })
                })
        }, 1500)
    }
}

export const setOrder = (order) => {
    let id = 0
    const curOrder = {
        id: id++,
        order
    }
    return (dispatch) => {
        console.log(curOrder)
        client.post('/orders', JSON.stringify(curOrder), { headers: { 'Content-Type': 'application/json' } })
        /* client.post('/orders', curOrder) */
            .then(({ data }) => {
                console.log(data.id)
                dispatch({ type: Types.setOrder, payload: data.id })
            }).catch((error) => {
                dispatch({ type: Types.error, payload: error.message })
            })
    }
}

export const addItemToCart = (id) => {
    return {
        type: Types.addItem,
        payload: id
    }
}

export const removeItemFromCart = (id) => {
    return {
        type: Types.removeItem,
        payload: id
    }
}

export const clearCart = () => {
    return {
        type: Types.clearCart
    }
}

export const searchCategory =(value)=>{
	return{
		type: Types.searchCategory,
		payload: value
	}
}