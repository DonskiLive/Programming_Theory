import './PostView.css'
import { AppContext } from "../../App"
import commentRender from '../comment/Comment.js'
import CommentForm from '../commentForm/CommentForm'

export default function PostView(props) {
	return (
		<AppContext.Consumer >
			{cnt => {
				console.log(props)
				const index = props.match.path.split('/')[2]
				const postsTmp = cnt.posts.find(p => p.postId === index)
				return (
					<div className="post-view">
						<button className="back-btn" onClick={()=>{props.history.push('/post')}}>Back</button>
						<h3>{postsTmp.author ?? 'no data'}</h3>
						<p className="post-date">{postsTmp.date ?? 'no data'} </p>
						<h2>{postsTmp.title ?? 'no data'}</h2>
						<p>{postsTmp.content ?? 'no data'}</p>
						<hr className="divider" />
						{postsTmp.comments.map((comment, index) => <div key={index}>{commentRender(comment)}</div>)}
						{CommentForm(index)}
					</div>
				)
			}}
		</AppContext.Consumer>)
}