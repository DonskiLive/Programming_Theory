
const Button = ({clickHandler})=>{
    return(
        <button onClick = {clickHandler}>click me</button>
    )
}


// <button onClick = {(e)=> console.log(e)}>click me</button> version 1

// function clickHandler(e){console.log(e)} version2

export default Button