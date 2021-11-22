import './PostList.css'
import PostListRow from '../postListRow/PostListRow.js'
import { Link } from "react-router-dom"
import { AppContext } from "../../App"

const PostList = () => {
	return (
		<AppContext.Consumer >
			{cnt => {
				return (
					<div className="posts-container">
						{cnt.posts.map((post, index) =>
							<div className="post-container" key={index}><Link to={`/post/${post.postId}`}>
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