import './PostList.css'
import PostListRow from '../postListRow/PostListRow.js'
import {Link} from "react-router-dom"
import { AppContext } from "../Post.jsx"

const PostList = ({ author, date, title, content, comments, onBackHandler}) => {
	return (
		<AppContext.Consumer >
			{cnt => {
				/* function renderPostView() {
					if (cnt.postId !== null) {
						return (
							<div className="post-view">
								<Link exact={`true`} to={`/post`}><button className="back-btn">Back</button></Link>
								<h3>{author ?? 'no data'}</h3>
								<p className="post-date">{date ?? 'no data'} </p>
								<h2>{title ?? 'no data'}</h2>
								<p>{content ?? 'no data'}</p>
								<hr className="divider" />
								{comments.map((comment, index) => <div key={index}>{commentRender(comment)}</div>)}
								{CommentForm()}
							</div>
						)
					}
				} */

				return (
	

							<div className="posts-container">
								{cnt.posts.map((post, index) =>
									<div className="post-container" key={index}><Link exact={`true`} to={`/post/${post.postId}`}>
										<div className="post-content">
											{PostListRow(post)}
										</div></Link>
									</div>
								)}
							</div>


				)
			}}
		</AppContext.Consumer>
	)
}

export default PostList