import { useReducer } from 'react'

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
            <div className = 'item_block'>
                {state.userOrder ? <>
                <h3 className = 'my-5'>Your order:</h3>
                <div className = 'card'>
                    <div className = 'card-body'>
                        {state.userOrder.order.map((item, index)=>
                            <div className = 'mb-3' key = {index}>
                                <h5>{item.title}</h5>
                                <span>Quantity: {item.count}, </span>
                                <span>price: {item.price * item.count}</span>
                            </div>
                        )}
                        <hr />
                        <h6>Total: {state.userOrder.order.reduce((total, item)=>total += item.count * item.price, 0)} $</h6>
                    </div> 
                    <button className = 'btn btn-dark mb-3 w-100'
                            onClick = {()=>dispatch({type:'closeOrder'})}>close</button>
                </div>
                </>:
                <>
                {state.error && <h3 className = 'my-2 text-danger'>{state.error}, try one more time</h3>}
                <h3 className = 'my-5'>Your order's number:</h3>
                <form className = 'input-group mb-3'
                        onSubmit = {(e)=>{
                            e.preventDefault()
                            const id = e.target.orderNumber.value
                            e.target.reset()
                            return getOrderById(dispatch, id)
                        }}  >
                    <input type = 'number' className = 'form-control' placeholder = 'type number of your order' name = 'orderNumber' required/>
                    <button type ='submit' className = 'btn btn-dark'>View my order</button>
                </form>
                </>}
            </div>

        </div>
    )
}

const getOrderById = (dispatch, id) =>{
    
    fetch(`http://localhost:3000/orders/${id}`)
    .then((res)=>{
        if(res.ok){
            return res.json()
        }
        throw new Error ('wrong order number')
    }).then(data=>dispatch({type:'getOrder', payload:data}))
    .catch((error)=>dispatch({type: 'error', payload:error.message}))
}

export default Order