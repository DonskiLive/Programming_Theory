//import {useState } from 'react'

const PostForm = ({addPost})=>{
    /* const[post, setPost] = useState({
        title:'',
        text:'',
        author:'',
    })

    const onInputHandler = (event)=>{
        setPost({...post, [event.target.name]: event.target.value})
    } */

    return(
      <form style = {{width:'50%', flexShrink:'0', marginLeft:'30px', marginTop:'20px'}}
            onSubmit = {e =>{
                e.preventDefault();
                addPost({
                    title:e.target.title.value,
                    text: e.target.text.value,
                    author: e.target.author.value
                })
                /* for (let element of e.target){
                    if(element.nodeName !== 'button')
                    element.value = ''
                } */
                e.target.reset()

            }}>
            <input type ='text' name = 'title'/>
            <br />
            <textarea name = 'text'/>
            <br />
            <input type ='text' name = 'author'/>
            <br />
            <button type = 'submit'>add post</button>
        </form> 
    )
}

export default PostForm


/* <form style = {{width:'50%', flexShrink:'0', marginLeft:'30px', marginTop:'20px'}}
              onSubmit = {e =>{
                  e.preventDefault();
                  addPost(post);
                  setPost({
                    title:'',
                    text:'',
                    author:'',
                  })
              }}>
            <input type ='text' name = 'title'
                    value = {post.title}
                    onChange = {onInputHandler}/>
            <br/>        
            <textarea name = 'text'
                      value = {post.text}
                    onChange = {onInputHandler}/>
            <br/>  
            <input type ='text' name = 'author'
                    value = {post.author}
                    onChange = {onInputHandler}/>
            <br/>          
            <button type = 'submit'>add post</button>
        </form>  */     