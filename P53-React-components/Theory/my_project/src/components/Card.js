import '../css/Card.css'
import Button from './Button'
import Counter from './CounterF'

export default function Card({title, subtitle, text, src}){
    return(
        <div className = 'card'>
            <h2>{title}</h2>
            <h5>{subtitle}</h5>
            <p>{text ?? 'unknown'}</p>
            <img src={src}  alt = {title}/>
            <Button clickHandler = {clickHandler}/>
            <Counter/>
        </div>
    )
}

function clickHandler(e){
    console.log(e);
    document.querySelector('.card h2').innerHTML = 'Hello React!'
}


//export default function Card({title, subtitle, text='unknown'}) -> version 1
//<p>{text ? text : 'unknown'}</p>   -> version 2