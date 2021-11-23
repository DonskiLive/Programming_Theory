import Book from './Book';
import { useSelector, useDispatch } from 'react-redux'
import { bookSelector, resetError } from '../store/books/booksReducer';
import { authSelector, clearError } from '../store/app/authReducer';

const Books = () => {
    const dispatch = useDispatch()
    const loading = useSelector(bookSelector).loading
    const books = useSelector(bookSelector).books
    const currentLevel = useSelector(authSelector).currentLevel

    dispatch(resetError())
    dispatch(clearError())

    return (
        <div className = 'container-fluid' style = {{backgroundImage: 'linear-gradient(rgb(200, 200, 200, 0.5), rgb(255, 255, 255))', minHeight: 'calc(100vh - 57px)', height: 'fit-content', backgroundRepeat:'none', backgroundSize: 'cover', paddingTop:"10px"}}>

        <div className='container'>
        {loading ? <div className="text-center my-5">
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
            {books.length ?  <h1 className='text-center my-3'>Our Library:</h1> : <h1 className='text-center my-3'>No books found <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-emoji-frown mb-2 ms-2" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg></h1>}
            <div className="row row-cols-2 row-cols-md-4 justify-content-center">
                {books.map((book, index) => <Book key={index} book={book} currentLevel = {currentLevel} />)}
            </div> </>}
        </div>
        </div>
    )
}

export default Books

