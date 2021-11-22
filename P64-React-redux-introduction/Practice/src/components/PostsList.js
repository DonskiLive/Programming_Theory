import Post from './Post';
import { connect } from 'react-redux'

const PostsList = ({ posts }) => {
	return (
		<ul className="container col-12 p-2">
			{!posts.length ? <h2>Write first Post</h2> : <h2>Posts</h2>}
			
			{posts.map((post, index) =>
				<li className="row list-unstyled border rounded-3 bg-light p-2 mb-3" key={index}>
					<Post post={post} />
				</li>)
			}
		</ul>
	)
}

const mapStateToProps = state => {
	return {
		posts: state.posts
	}
}

export default connect(mapStateToProps)(PostsList)