import '../css/Card.css'
import Button from './Button'
import Counter from './Counter'

export default function Card({id, src, title, author, yearIssue, genre}){
	return(
		<div className="card" data-index={id}>
			<img src={src} alt={title}/>
			<h2>{title ?? 'no data'}</h2>
			<h5>{author ?? 'no data'}</h5>
			<p>years of issue: {yearIssue ?? 'no data'}, genre: {genre ?? 'no data'}</p>
			<Counter/>
			<Button clickHandler = {clickHandler}/>
		</div>
	)
}

let count = 1;
function clickHandler(e){
	count++
	console.log(e.target.parentNode.dataset.index)
	if(count % 2 === 0){
	e.target.parentNode.style.backgroundColor = "rgba(54, 255, 131, 0.1)"
	e.target.innerHTML = 'remove from cart'
	e.target.style.backgroundColor = 'rgba(255, 0, 0, 0.2)'
	}else{
		e.target.parentNode.style.backgroundColor = "rgba(54, 181, 255, 0.1)"
		e.target.innerHTML = 'put into cart'
		e.target.style.backgroundColor = 'rgba(54, 255, 131, 0.2)'
	}
}