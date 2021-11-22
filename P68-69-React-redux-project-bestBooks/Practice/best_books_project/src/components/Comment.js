const Comment = ({comment}) =>{
    return(
        <div className = 'card border-0'>
            <div className = 'card-body'>
                <h4 className = 'card-title'>Comment by: {comment.name} </h4>
                <p className = 'card-text'>{comment.text}</p>
                <p className = 'card-text'>Note: {comment.note}</p>
            </div>
            <hr />

        </div>
    )
}

export default Comment