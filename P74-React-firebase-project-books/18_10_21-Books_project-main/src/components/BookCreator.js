import { useState } from 'react'
import Error from './Error'
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { bookCreatorAction, bookSelector } from '../store/books/booksReducer';
import { clearError } from '../store/app/authReducer';

const BookCreator = () => {
    const dispatch = useDispatch()
    dispatch(clearError())
    const error = useSelector(bookSelector).error
    const loading = useSelector(bookSelector).loading
    const books = useSelector(bookSelector).books
    const history = useHistory()

    const [formData, setFormData] = useState({
        title: '',
        author: '',
        yearIssue: '',
        genre: '',
        cover: '',
        text: '',
        pdf: ''
    })

    const changeFieldHandler = event => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const submitHandler = event => {
        event.preventDefault()
        const bookExist = books.find(b => b.title.toLowerCase().trim() === formData.title.toLowerCase().trim())
        dispatch(bookCreatorAction(formData, bookExist))
        if (!bookExist) {
            setFormData({ ...formData, title: '', author: '', yearIssue: '', genre: '', cover: '', text: '', pdf: '' })
            history.push(`/books`)
        }
    }

    return (
        <div className='container-fluid' style={{ backgroundImage: 'linear-gradient(rgb(200, 200, 200, 0.5), rgb(255, 255, 255))', minHeight: 'calc(100vh - 57px)', height: 'fit-content', backgroundRepeat: 'none', backgroundSize: 'cover', paddingTop: "10px" }}>
            <>{loading ? <div className="text-center my-5">
                <div className="spinner-grow mt-3" style={{ width: '2rem', height: '2rem', color: 'black' }} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow mx-3 mt-3" style={{ width: '2rem', height: '2rem', color: 'black' }} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow mt-3" style={{ width: '2rem', height: '2rem', color: 'black' }} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div> : <>
                <div className="container mt-4">
                    <div className="w-50 mx-auto">
                        {error.bookCreator && <Error message={error.bookCreator} />}
                        <form onSubmit={submitHandler}>
                            <div className="form-group">
                                <label>Book title *</label>
                                <input type="text"
                                    className="form-control"
                                    name="title"
                                    value={formData.title}
                                    required
                                    onChange={changeFieldHandler} />
                            </div>
                            <div className="form-group">
                                <label>Author *</label>
                                <input type="text"
                                    className="form-control"
                                    name="author"
                                    value={formData.author}
                                    required
                                    onChange={changeFieldHandler} />
                            </div>
                            <div className="form-group">
                                <label>Year of issue</label>
                                <input type="text"
                                    className="form-control"
                                    name="yearIssue"
                                    value={formData.yearIssue}
                                    onChange={changeFieldHandler} />
                            </div>
                            <div className="form-group">
                                <label>Genre</label>
                                <input type="text"
                                    className="form-control"
                                    name="genre"
                                    value={formData.genre}
                                    onChange={changeFieldHandler} />
                            </div>
                            <div className="form-group">
                                <label>Cover</label>
                                <input type="text"
                                    className="form-control"
                                    name="cover"
                                    value={formData.cover}
                                    onChange={changeFieldHandler} />
                            </div>
                            <div className="form-group">
                                <label>Download link</label>
                                <input type="text"
                                    className="form-control"
                                    name="pdf"
                                    value={formData.pdf}
                                    onChange={changeFieldHandler} />
                            </div>
                            <div className="form-group mb-2">
                                <label>Content</label>
                                <textarea type="text" className="form-control" name="text"
                                    value={formData.text}
                                    onChange={changeFieldHandler}></textarea>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-dark w-100 mt-2">Add new book</button>
                            </div>
                        </form>
                    </div>
                </div></>
            }
            </>
        </div>
    )
}

export default BookCreator