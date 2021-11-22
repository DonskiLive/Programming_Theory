import { useReducer } from 'react'
import axios from 'axios'

const reducer = (state, {type, payload})=>{
    switch(type){
        case 'getOrder':
            return {...state, userOrder: payload, error:null}
        case 'error':{
            return{
                ...state, error:payload
            }
        }
        case 'closeOrder':
            return{
                ...state, userOrder: null, error:null
            }
        default :
        return state    
    }
} 

const Order = ()=>{

    const [state, dispatch] = useReducer(
        reducer,
        {  userOrder: null,
           error: null
        }
    )

    return(
        <div className ='item_page text-center'>
            <div className = 'item_order'>
                {state.userOrder ? <>
                <h3 className = 'my-2'>Your order:</h3>
                <div className = 'card'>
                    <div className = 'card-body'>
                        {state.userOrder.order.map((item, index)=>
                            <div className = 'mb-3' key = {index}>
                                <h5>{item.title}</h5>
                                <span>Quantity: {item.count}, </span>
                                <span>price: {item.price * item.count} {'\u20AC'}</span>
                            </div>
                        )}
                        <hr />
                        <h5><b>Total: {state.userOrder.order.reduce((total, item)=>total += item.count * item.price, 0)} {'\u20AC'}</b></h5>
                    </div> 
                    <button className = 'btn btn-dark mb-3 w-100'
                            onClick = {()=>dispatch({type:'closeOrder'})}>close</button>
                </div>
                </>:
                <>
                
                <h3 className = 'my-5'>Type your order number:</h3>
                <form className = 'input-group mb-2'
                        onSubmit = {(e)=>{
                            e.preventDefault()
                            const id = e.target.orderNumber.value
                            e.target.reset()
                            return getOrderById(dispatch, id)
                        }}  >
                    <input type = 'number' className = 'form-control' placeholder = 'type number of your order' name = 'orderNumber' required/>
                    <button type ='submit' className = 'btn btn-dark'>View my order</button>
                </form>
                {state.error && <h3 className = 'mt-5 text-danger'>{state.error}, try one more time</h3>}
                </>}
            </div>

        </div>
    )
}

const client = axios.create({
    baseURL: "http://localhost:3000"
})

const getOrderById = (dispatch, id) =>{
    client.get(`/orders/${id}`)
    .then(response=>
        dispatch({type:'getOrder', payload: response.data }))
        .catch((error)=>dispatch({type: 'error', payload: "Wrong order number" /* error.message */}))
/*     fetch(`http://localhost:3000/orders/${id}`)
    .then((res)=>{
        if(res.ok){
            return res.json()
        }
        throw new Error ('wrong order number')
    }).then(data=>dispatch({type:'getOrder', payload:data}))
    .catch((error)=>dispatch({type: 'error', payload:error.message})) */
}

export default Order