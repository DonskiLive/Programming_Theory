import React from 'react';
import withContext from '../context/withContext';

const PostViewComponent = props =>{
    console.log(props)
    const post = props.context.posts.find(p=> p.postId ===props.match.params.id);
    return(
        <div style = {{marginTop:'20px', width:'59%'}}>
            <small style ={{ marginRight: '10px'}}>{post.author}</small>
            <small>{post.date}</small>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <hr/>
            {
                post.comments.map((c,i)=>
                <div key = {i} style = {{border:'1px solid black', padding:'5px', marginBottom: '10px'}}>
                    <p><b>{c.author}</b>: <small>{c.text}</small></p>
                </div>)
            }
            <hr/>
            <form onSubmit = {e =>{
                e.preventDefault();
                props.context.addComment(post.postId, e.target.author.value, e.target.text.value);
                e.target.author.value = '';
                e.target.text.value = '';
            }}>
                <input type='text' name = 'author' placeholder = 'name' /><br/>
                <textarea name = 'text' placeholder = 'message'/><br/>
                <button>addComment</button>
            </form>
        </div>
    )
}

export default withContext(PostViewComponent);

