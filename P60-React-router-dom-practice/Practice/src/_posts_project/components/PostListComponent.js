import React from 'react';
import withContext from '../context/withContext';
import PostShortComponent from './PostShortComponent';

const PostListComponent = ({context}) =>{
    return(
        <ul style = {{listStyle:'none', padding:'0', marginRight:'50px', cursor:'pointer', width:'40%'}}>
            {context.posts.map((p,i) => 
            <PostShortComponent key = {p.postId}
                                index = {i}
            />)
        }
        </ul>
    )
}

export default withContext(PostListComponent);