import * as Actions from './../../store/posts/ActionCreator'
import {connect} from 'react-redux'
import PostList from './PostList'
import PostForm from './PostForm'

const PostPage = ({posts, addPost, removePost})=>{
    return(
        <div style ={{display:'flex'}}>
            <PostList posts = {posts} removePost = {removePost}/>
            <PostForm addPost = {addPost}/>
        </div>
    )
}

const mapStateToProps = ({postReducer}) =>{
    return{
        posts: postReducer.posts
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        addPost: (post)=>dispatch(Actions.addPost(post)),
        removePost: id => dispatch(Actions.removePost(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage)