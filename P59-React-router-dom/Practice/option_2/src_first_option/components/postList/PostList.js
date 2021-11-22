import './PostList.css'
import PostListRow from '../postListRow/PostListRow.js'

import { AppContext } from "../Post.js"
import commentRender from '../comment/Comment.js'
import CommentForm from '../commentForm/CommentForm'

const PostList = ({ author, date, title, content, comments, onBackHandler}) => {
	return (
		<AppContext.Consumer >
			{cnt => {
				function renderPostView() {
					if (cnt.postId !== null) {
						return (
							<div className="post-view">
								<button className="back-btn" onClick={onBackHandler}>Back</button>
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
				}

				return (
					<div className="col-lg-12 mx-auto">
						<div className='d-flex justify-content-center mt-3'>
							<div className="posts-container">
								{cnt.posts.map((post, index) =>
									<div className="post-container" key={index}>
										<div className="post-content" onClick={() => { cnt.onPostSelected(post.postId) }}>
											{PostListRow(post)}
										</div>
									</div>
								)}
							</div>
							{renderPostView()}
						</div>
					</div>
				)
			}}
		</AppContext.Consumer>
	)
}

export default PostList