import { useState } from 'react'
import '../css/Counter.css'

const Counter = () => {
	const [count, setCount] = useState(0)
	const inc=()=> {
		if(count < 10) setCount(count + 1)
	}
	const dec =()=> {
		if(count > 0) setCount(count - 1)
	}
	return (
		<div className="counter">
			<h4>Select quantity: </h4>
			<span>{count}</span>
			<button className="btnMin" onClick={dec}>-</button>
			<button className="btnPlus" onClick={inc}>+</button>
		</div>
	)
}

export default Counter