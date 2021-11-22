const Post = ({post}) => {
	return(
		<div className="mx-2 text-start">
            <p>Author: {post.author} <span className="px-3">({post.date})</span></p>
            <h4>{post.title}</h4>
            <p style={{textAlign: 'justify', paddingRight: '15px'}}>{post.text}</p>
        </div>
	)
}

export default Post;