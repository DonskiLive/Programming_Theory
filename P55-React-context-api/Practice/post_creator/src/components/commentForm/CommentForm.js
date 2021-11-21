import './CommentForm.css'
import trash from './trash.png';
import { AppContext } from "../../App.js"

const CommentForm = () => {
	return (
		<AppContext.Consumer >
			{cnt => {
				function formClickHandler(e) {
					e.preventDefault()
					const form = document.forms.addCommentForm
					if (form.name.value !== '' && form.commentText.value !== '') {
						cnt.addComment(cnt.postId, form.name.value, form.commentText.value)
						formReset()
					} else { alert('Before adding a comment, please fill all required fields!') }
				}
				function formReset() {
					document.forms.addCommentForm.reset()
				}
				return (
					<>
						<h2>Leave your message:</h2>
						<form className="comment-form" name="addCommentForm" action="#">
							<input type="text" name="name" className="comment-name" placeholder="type your name:" />
							<textarea type="text" name="commentText" className="comment-input" placeholder="type your message:"></textarea>
							<div className="btn-container">
								<button className="add-btn" onClick={formClickHandler}>Add comment</button>
								<img src={trash} className="form-trash" alt="imgTrash" title="Clean form" onClick={formReset} />
							</div>
						</form>
					</>
				)
			}}
		</AppContext.Consumer>
	)
}

export default CommentForm