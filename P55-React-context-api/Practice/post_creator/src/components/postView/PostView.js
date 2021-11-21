import './PostView.css'
import commentRender from '../comment/Comment.js'
import CommentForm from '../commentForm/CommentForm'

export default function PostView({ author, date, title, content, comments, onBackHandler, postId}) {
	return (
		<div className="post-view">
			<button className="back-btn" onClick={onBackHandler}>Back</button>
			<h3>{author ?? 'no data'}</h3>
			<p className="post-date">{date ?? 'no data'} </p>
			<h2>{title ?? 'no data'}</h2>
			<p>{content ?? 'no data'}</p>
			<hr className="divider" />
			{comments.map((comment, index) => <div key={index}>{commentRender(comment)}</div> )}
			{CommentForm()}
		</div>
	)
}