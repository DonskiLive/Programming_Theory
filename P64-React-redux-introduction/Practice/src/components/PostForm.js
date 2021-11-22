import { useState } from 'react'
import { ADD_POST } from '../store/actionsType';
import { connect } from 'react-redux'

const PostForm = ({addPost}) => {

	const [formData, setFormData] = useState({
		title: '',
		text: '',
		author: ''
	})

	const changeFieldHandler = event => {
		setFormData({ ...formData, [event.target.name]: event.target.value })
	}

	const submitHandler = event => {
		event.preventDefault()
		if (!formData.title.trim() || !formData.text.trim() || !formData.author.trim()) {
			alert('form is not compleat!')
		} else {
			addPost(formData)
			setFormData({ ...formData, title: '', text: '', author: '' })
		}
	}

	return (
		<div className="col-12 p-2">
			<h2 className="mb-4">Create new Post</h2>
			<form onSubmit={submitHandler}>
				<div className="form-group mb-3">
					<label>Post title</label>
					<input type="text"
						className="form-control"
						name="title"
						value={formData.title}
						placeholder="write title" 
						onChange={changeFieldHandler} />
				</div>
				<div className="form-group mb-3">
					<label>Post content</label>
					<textarea type="text" className="form-control" name="text" 
					value={formData.text} 
					placeholder="write text" 
					onChange={changeFieldHandler}></textarea>
				</div>
				<div className="form-group mb-4">
					<label>Author</label>
					<input type="text"
						className="form-control"
						name="author"
						value={formData.author}
						placeholder="write your name"
						onChange={changeFieldHandler} />
				</div>
				<div className="form-group">
					<button type="submit" className="btn btn-primary w-100">Add post</button>
				</div>
			</form>
		</div>
	)
}

const mapDispatchToProps = dispatch =>{
    return{
        addPost: (formData) => dispatch({type: ADD_POST, payload:{formData}})
    }
}

export default connect(null, mapDispatchToProps)(PostForm)