import PostForm from "./PostForm"
import PostsList from "./PostsList"

const PostsPage = () => {
	return (
		<div className='container my-4'>
			<div className='row d-flex justify-content-around'>
				<div className="card col-5 text-center p-3 my-2">
					<PostsList />
				</div>
				<div className="card col-5 text-center p-3 my-2" style={{ height: 'fit-content' }}>
					<PostForm />
				</div>
			</div>
		</div>
	)
}

export default PostsPage