import {useState} from 'react';

const CounterF = () =>{
    const [count, setCount] = useState(0);

    const inc = ()=>{
        setCount(count + 1)
        console.log(count)
    }

    const dec=()=>{
       setCount(count - 1);
       console.log(count)
    }

    return(
            <div className = 'counter'>
                <h4>Count: {count} </h4>
                <button onClick = {inc}>+</button>
                <button onClick = {dec}>-</button>
            </div>

    )
}

export default CounterF;