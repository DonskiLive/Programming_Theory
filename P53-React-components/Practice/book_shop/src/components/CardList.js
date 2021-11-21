import Card from "./Card"
import '../css/CardList.css'

const CardList = ({cards}) => {
	return (
		<div className="card-list">
			{cards.map(card => <Card 
			key={card.id}
			id={card.id}
			iNumber={card.iNumber} 
			title = {card.title}
			author={card.author}
			yearIssue={card.yearIssue}
			genre={card.genre}
			src={card.src}/>)}
		</div>
	)
}
export default CardList