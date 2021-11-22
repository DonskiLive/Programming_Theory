import {connect} from 'react-redux';
import { loadPost } from '../../store/posts/ActionCreator';

const PlaceHolderPosts = ({posts, loading, error, load})=>{
    return(
        <>
        <button onClick = {load} disabled = {loading}>Load</button>
        { loading ? <h2>Loading...</h2> 
            : 
           <ul>
               {posts.map ((post)=> <li key = {post.id}>{post.title}</li>)}
           </ul> 
        }
        {
            error && <h3>Error: {error}</h3>
        }
        </>
    )
}

const mapStateToProps = ({placeHolderReducer}) =>{
    return{
        posts: placeHolderReducer.posts,
        loading: placeHolderReducer.loading,
        error: placeHolderReducer.error
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        load: ()=>dispatch(loadPost())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaceHolderPosts)