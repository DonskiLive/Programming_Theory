import './PostList.css'
import PostListRow from '../postListRow/PostListRow.js'

import { AppContext } from "../../App.js"

const PostList = () => {
	return (
		<AppContext.Consumer >
			{cnt => {
				return (
					<div className="posts-container">
						{cnt.posts.map((post, index) => 
							<div className="post-container" key={index}>
								<div className="post-content" onClick={()=>{cnt.onPostSelected(post.postId)}}>
									{PostListRow(post)}
								</div>
							</div>
						)}
					</div>
				)
			}}
		</AppContext.Consumer>
	)
}

export default PostList