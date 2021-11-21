import { useContext } from 'react';
import { MyContext } from './App';
//import { MyCnt } from './AppF';

const CounterF = ({ id, quantity }) => {
    const cnt = useContext(MyContext)
    return (
                    <div className='counter'>
                        <h4>Quantity: {quantity} </h4>
                        <button onClick={() => cnt.onDecClickHandler(id)}>-</button>
                        <button onClick={() => cnt.onIncClickHandler(id)}>+</button>
                    </div>
         )
    
}

export default CounterF;


/* <MyContext.Consumer>
            {{onDecClickHandler,onIncClickHandler} => {
                return (
                    <div className='counter'>
                        <h4>Quantity: {quantity} </h4>
                        <button onClick={() => onDecClickHandler(id)}>-</button>
                        <button onClick={() => onIncClickHandler(id)}>+</button>
                    </div>
                )
            }
            }
</MyContext.Consumer> */


/* without Hook
return (
        <MyContext.Consumer>
            {cnt => {
                return (
                    <div className='counter'>
                        <h4>Quantity: {quantity} </h4>
                        <button onClick={() => cnt.onDecClickHandler(id)}>-</button>
                        <button onClick={() => cnt.onIncClickHandler(id)}>+</button>
                    </div>
                )
            }
            }
        </MyContext.Consumer>

    )
 */