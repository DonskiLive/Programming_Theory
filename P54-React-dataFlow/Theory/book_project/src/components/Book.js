import '../css/Book.css'
//import Button from './Button'
import Counter from './CounterF'

export default function Book({book:{id,title, author, yearIssue, genre, cover, price, quantity}, onDecClickHandler, onIncClickHandler}){
   
    return(
        <div className = 'card'>
            <h2>{title}</h2>
            <h5>{author}</h5>
            <p>Genre: {genre}, year of issue: {yearIssue}</p>
            <img src={cover}  alt = {title}/>
            <h3>Price: {price} </h3>
            <Counter id = {id}
                     quantity = {quantity}
                     onDecClickHandler = {onDecClickHandler}
                     onIncClickHandler = {onIncClickHandler}
                     />
            <h3 style={{color:'red'}}>Total: {price * quantity} &euro;</h3>         
        </div>
    )
}

/* function clickHandler(e, className){
    console.log(e.nativeEvent);
    e.target.parentNode.querySelector('img').classList.toggle(className)
}
function titleClickHandler(e){
    e.target.style.color = 'red'
} */

//<Button clickHandler = {(e)=>clickHandler(e, 'w100')}/>
//export default function Card({title, subtitle, text='unknown'}) -> version 1
//<p>{text ? text : 'unknown'}</p>   -> version 2