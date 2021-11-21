import React from 'react';

export default class Input extends React.Component{

state = {
    input: '',
    name: 'Ivan'
}

buttonClickHandler = ()=>{
    console.log(this.state.input);
    this.setState({...this.state, input: ''})
}

inputHandler = (e)=>{
    this.setState({...this.state, input: e.target.value})
    console.log(this.state.input)
}

inputNameHandler = (e)=>{
    this.setState({...this.state, name: e.target.value})
    console.log(this.state.name)
}

 render(){
     return(
         <>
         <input 
            type = 'text'
            placeholder = 'some text'
            value = {this.state.input}
            onChange = {this.inputHandler}
            onKeyDown = {(e)=>{
                if(e.key === 'Enter'){
                    console.log(this.state.input)
                    this.setState({...this.state, input: ''})
                }
            }}
         />
         <input 
            type = 'text'
            placeholder = 'type name'
            value = {this.state.name}
            onChange = {this.inputNameHandler}
            onKeyDown = {(e)=>{
                if(e.key === 'Enter'){
                    console.log(this.state.name)
                    this.setState({...this.state, name: ''})
                }
            }}
         />
         <button onClick ={this.buttonClickHandler}>send</button>
         </>
     )
 }
}