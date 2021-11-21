import '../css/Post.css'
import Counter from './CounterF'

export default function Post({post:{id, title, text, author, date, like, dislike}, onLikeClickHandler, onDislikeClickHandler}){ // {title, subtitle, text} = props создание переменной с помощю деструкторизации
	return(
		<div className="post" id = {"post_"+ id}>
			<h2>{title ?? 'no data'}</h2>
			<h5>{text ?? 'no data'}</h5>
			<p>Author: {author ?? 'no data'} </p>
			<p>Public on: {date ?? 'no data'}</p>

			<Counter id={id} 
					like={like}
					dislike={dislike}
					onLikeClickHandler={onLikeClickHandler}
					onDislikeClickHandler={onDislikeClickHandler}/>
		</div>
	)
}