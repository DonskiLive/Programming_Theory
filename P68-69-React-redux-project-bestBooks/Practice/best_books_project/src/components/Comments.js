import Comment from './Comment'

const Comments = ({comments})=>{
    return(
        comments.length === 0 ? <h4>No comments yet</h4> :
        <ul className = 'list-unstyled w-75 mx-auto'>
            {
                comments.map(comment =>(
                    <li className = 'mb-1 text-start' key ={comment.id}>
                        {<Comment comment = {comment} />}
                    </li>
                ))
            }
        </ul>

    )
}

export default Comments