const PostList = ({posts, removePost})=>{
    return(
        <ul style ={{width:'50%', flexShrink:'0', borderRight: '1px solid black'}}>
            {posts.map((post)=>{
                const date = new Date(post.id)
                return(
                    <li key = {post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.text}</p>
                        <p>posted by {post.author}</p>
                        <p>created: {date.toLocaleDateString()}</p>
                        <button onClick = {()=> removePost(post.id)}>remove</button>
                        <hr />
                    </li>
                )
            })}
        </ul>
    )
}

export default PostList