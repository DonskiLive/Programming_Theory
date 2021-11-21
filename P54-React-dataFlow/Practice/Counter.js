import React from "react";
import '../css/Counter.css'

export default class Counter extends React.Component{
	/* 	constructor(props){
			super(props)
			this.state = {
				count: 0
			}
		} */
	state = {
		count: 0,
		title: 'one'
	}
	inc(){
		//this.state.count++ // на stay не льзя делать прямого влияния
		const newState = {...this.state}
		newState.count++
		newState.title = 'two'
		this.setState(newState)
		console.log(this.state.count)
	}

	dec =()=> {
		const newState = {...this.state}
		newState.count--
		this.setState(newState)
		console.log(this.state.count)
	}
	
	render() {
		return (
			<div className="counter">
				<h4>Count: {this.state.count}</h4>
				<button onClick={this.dec}>-</button>
				<button onClick={() => { this.inc() }}>+</button>
			</div>
		)
	}

}
/* export default function Counter(){
	let count = 0
	function inc(){
		count++
		console.log(count)
	}
	return(
		<div className="counter">
			<h4>Count: {count}</h4>
			<button>-</button>
			<button onClick={()=>{inc()}}>+</button>
		</div>
	)
} */

