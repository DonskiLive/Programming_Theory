import Post from "./Post"
import '../css/PostList.css'

const PostList = ({ posts, onLikeClickHandler, onDislikeClickHandler }) => {
	return (
		<div className="post-list">
			{posts.map(post => <Post
				key={post.id}
				post={post}
				onLikeClickHandler={onLikeClickHandler}
				onDislikeClickHandler={onDislikeClickHandler}
			/>)}
		</div>
	)
}
export default PostList