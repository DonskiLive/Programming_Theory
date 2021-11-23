import { useState } from 'react'
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { bookRemoverAction, bookSelector, updateBookAction } from '../store/books/booksReducer';
import Error from './Error';

const BookEditor = ({ match }) => {
    const dispatch = useDispatch()
    const books = useSelector(bookSelector).books
    const error = useSelector(bookSelector).error
    const history = useHistory()
    const bookId = +match.params.id
    const [book, setBook] = useState(findBookById(books, bookId));

    const changeFieldHandler = event => {
        setBook({ ...book, [event.target.name]: event.target.value })
    }

    const submitHandler = event => {
        event.preventDefault()
        let bookExist = books.find(b => b.title.toLowerCase().trim() === book.title.toLowerCase().trim())
        if(bookExist && bookExist.id === bookId){
            bookExist = false
        }
        dispatch(updateBookAction(books, book, bookExist))
    }

    return (
        <div className='container-fluid' style={{ backgroundImage: 'linear-gradient(rgb(200, 200, 200, 0.5), rgb(255, 255, 255))', minHeight: 'calc(100vh - 57px)', height: 'fit-content', backgroundRepeat: 'none', backgroundSize: 'cover', paddingTop: "10px" }}>
            <>{!books.length ? <Redirect to='/books' /> :
                <div className='container d-flex mt-4' style={{ minWidth: '800px' }}>
                    <div className='me-5 ' style={{ width: '40%' }}>
                        <div style={{ height: '75vh', minHeight: '400px', textAlign: 'center' }}>
                        {error.bookUpdate && <Error message={error.bookUpdate} />}
                            <h3 className="card-title">{book.title}</h3>
                            {book.cover ? <img src={book.cover} className="mx-auto" alt="..." style={{ maxWidth: '100%', height: '100%' }} /> :
                                <svg xmlns="http://www.w3.org/2000/svg" width="12rem" height="12rem" fill="currentColor" className="bi bi-book mx-auto" viewBox="0 0 16 16">
                                    <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                                </svg>}
                        </div>
                    </div>
                    <div className="d-flex justify-content-end position-relative" style={{ width: '60%', marginTop: '35px' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-octagon-fill position-absolute text-danger" viewBox="0 0 16 16" onClick={() => {
                            if (window.confirm(`You really want to delete this book: ${book.title}?`)) {
                                dispatch(bookRemoverAction(books, bookId))
                                history.push(`/books`)
                            }
                        }} style={{ top: "-20px", right: "0", cursor: "pointer" }}>
                            <path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
                        </svg>
                        <form onSubmit={submitHandler} style={{ width: '100%' }}>
                            <div className="form-group">
                                <label>Book title</label>
                                <input type="text"
                                    className="form-control"
                                    name="title"
                                    value={book.title}
                                    required
                                    onChange={changeFieldHandler}
                                    autoFocus />
                            </div>
                            <div className="form-group">
                                <label>Author</label>
                                <input type="text"
                                    className="form-control"
                                    name="author"
                                    value={book.author}
                                    required
                                    onChange={changeFieldHandler} />
                            </div>
                            <div className="form-group">
                                <label>Year of issue</label>
                                <input type="text"
                                    className="form-control"
                                    name="yearIssue"
                                    value={book.yearIssue}
                                    onChange={changeFieldHandler} />
                            </div>
                            <div className="form-group">
                                <label>Genre</label>
                                <input type="text"
                                    className="form-control"
                                    name="genre"
                                    value={book.genre}
                                    onChange={changeFieldHandler} />
                            </div>
                            <div className="form-group">
                                <label>Cover</label>
                                <input type="text"
                                    className="form-control"
                                    name="cover"
                                    value={book.cover}
                                    onChange={changeFieldHandler} />
                            </div>
                            <div className="form-group">
                                <label>Download link</label>
                                <input type="text"
                                    className="form-control"
                                    name="pdf"
                                    value={book.pdf}
                                    onChange={changeFieldHandler} />
                            </div>
                            <div className="form-group mb-2">
                                <label>Content</label>
                                <textarea type="text" className="form-control" name="text"
                                    value={book.text}
                                    onChange={changeFieldHandler}></textarea>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-dark w-100 mt-2">Save changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            }
            </>
        </div>
    )
}

const findBookById = (booksArr, id) => {
    return booksArr.find(book => book.id === id)
}

export default BookEditor