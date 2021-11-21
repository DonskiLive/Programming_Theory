import '../css/Counter.css';
import React from 'react';

export default class Counter extends React.Component{

    state ={
        count: 0,
        

    }

    /* constructor(props){
        super(props);
        this.state = {
            count:0
        }
    } */
    
    //let count = 0

     inc = ()=>{
        const newState = {...this.state};
        newState.count++;
        //newState.title = 'two'
        this.setState(newState)
        console.log(this.state.count)
    }

    dec(){
        const newState = {...this.state};
        newState.count--;
        this.setState(newState)
        console.log(this.state.count)
    }

    render(){
        return(
            <div className = 'counter'>
                <h4>Count: {this.state.count} </h4>
                <button onClick = {this.inc}>+</button>
                <button onClick = {()=>this.dec()}>-</button>
            </div>
        )
    }
}

    

