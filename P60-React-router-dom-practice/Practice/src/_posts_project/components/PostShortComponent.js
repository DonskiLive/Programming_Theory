import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import withContext from '../context/withContext';

const PostShortComponent = (props) => {
    console.log(props)
    const post = props.context.posts[props.index];
    return (
        <Link to = {`/posts/${post.postId}`} style ={{textDecoration: 'none', color:"black"}} >
        <div style ={{border:'1px solid black', padding:'10px', marginBottom: '10px' }}
            >
            <small style ={{ marginRight: '10px'}}>{post.author}</small>
            <small>{post.date}</small>
            <h2>{post.title}</h2>
            <p>{post.shortDesc}</p>
            <span>Comments: {post.comments.length}</span>
        </div>
        </Link>
    )
}

export default withContext(PostShortComponent);

//export default withRouter(withContext(PostShortComponent));


        /* <div style={{ border: '1px solid black', padding: '10px', marginBottom: '10px' }}
        onClick={() => props.history.push(`/posts/${post.postId}`)}>
        <small style={{ marginRight: '10px' }}>{post.author}</small>
        <small>{post.date}</small>
        <h2>{post.title}</h2>
        <p>{post.shortDesc}</p>
        <span>Comments: {post.comments.length}</span>
    </div>  */  