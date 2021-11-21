
const CounterF = ({id, quantity, onIncClickHandler, onDecClickHandler}) =>{

    return(
            <div className = 'counter'>
                <h4>Quantity: {quantity} </h4>
                <button onClick = {()=>onDecClickHandler(id)}>-</button>
                <button onClick = {()=>onIncClickHandler(id)}>+</button>
            </div>

    )
}

export default CounterF;