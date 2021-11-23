import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { bookSelector } from '../store/books/booksReducer';
import { authSelector } from '../store/app/authReducer';

const BookContent = ({ match }) => {
    const currentLevel = useSelector(authSelector).currentLevel
    const books = useSelector(bookSelector).books
    const bookId = +match.params.id
    const book = findBookById(books, bookId)

    return (
        <div className='container-fluid' style={{ backgroundImage: 'linear-gradient(rgb(200, 200, 200, 0.5), rgb(255, 255, 255))', minHeight: 'calc(100vh - 57px)', height: 'fit-content', backgroundRepeat: 'none', backgroundSize: 'cover', paddingTop: "10px" }}>
            <>{!books.length ? <Redirect to='/books' /> :
                <div className='container d-flex mt-4' style={{ minWidth: '800px' }}>
                    <div className='me-5' style={{ width: '40%' }}>
                        <div style={{ height: '75vh', minHeight: '400px', textAlign: 'center' }}>
                            <h2 className="card-title">{book.title}</h2>
                            {book.cover ? <img src={book.cover} className="mx-auto" alt="..." style={{ maxWidth: '100%', height: '100%' }} /> :
                                <svg xmlns="http://www.w3.org/2000/svg" width="18rem" height="18rem" fill="currentColor" className="bi bi-book mx-auto mt-2" viewBox="0 0 16 16">
                                    <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                                </svg>}
                        </div>
                    </div>
                    <div className="d-flex justify-content-end" style={{ width: '60%', height: '75vh', minHeight: '400px', paddingTop: "8px" }}>
                        <div className="w-100">
                            <h4><b>Author:</b> {book.author}</h4>
                            <p><b>Year of issue:</b> {book.yearIssue}</p>
                            <p><b>Genre:</b> {book.genre}</p>
                            <p className="mb-0"><b>Description:</b></p>
                            <p className="border rounded-3 border-secondary p-3" style={{ textAlign: 'justify', height: '300px', overflow: 'scroll' }}>{book.text}</p>
                            {book.pdf.trim() ? <>{currentLevel ? <span><b>Download now: </b><a href={book.pdf} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'black' }}> <span style={{ borderBottom: '1px solid black' }}>{book.title}</span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download ms-2" viewBox="0 0 16 16">
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                            </svg></a> </span> : <h5>Log-in with <span style={{ color: 'red' }}>"Prime level"</span> and download this book <span style={{ color: 'red' }}>for free!!!</span></h5>}</> : <></>}
                        </div>
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

export default BookContent