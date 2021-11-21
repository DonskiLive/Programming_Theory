import '../css/Counter.css'

const CounterF = ({ id, like, dislike, onLikeClickHandler, onDislikeClickHandler }) => {
	return (
		<div className="counter">
			<div className="rating-counter">
				<div className='rating-like' onClick={e => onLikeClickHandler(e, id)}><span>{like}</span></div>
				<div className='rating-dislike' onClick={e => onDislikeClickHandler(e, id)}><span>{dislike}</span></div>
			</div>	
			<h3>{goodOrBad(like, dislike)} Total rating: {like - dislike}</h3>
		</div>
	)
}

function goodOrBad(like, dislike){
	const result = like-dislike
	if (result > 0) return <span>&#128515;</span>
	else if (result < 0) return <span>&#128520;</span>
	else return <span>&#128527;</span>
}

export default CounterF