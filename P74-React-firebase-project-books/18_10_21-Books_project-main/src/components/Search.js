import { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { bookSearchAction, bookSelector } from '../store/books/booksReducer';
import Book from './Book';

const Search = () => {
	const dispatch = useDispatch()
	const books = useSelector(bookSelector).books
	const loading = useSelector(bookSelector).loading
	const currentLevel = useSelector(bookSelector).currentLevel
	const searchedBooks = useSelector(bookSelector).searchedBooks
	const history = useHistory()

	const [input, setInput] = useState({
		title: '', author: ''
	})

	const onChangeHandler = event => {
		setInput({ ...input, [event.target.name]: event.target.value })
		let tempBookArr = books
		if (event.target.name === 'title') {
			tempBookArr = books.filter(book => book.author.toLowerCase().startsWith(input.author.toLowerCase()))
		} else if (event.target.name === 'author') {
			tempBookArr = books.filter(book => book.title.toLowerCase().startsWith(input.title.toLowerCase()))
		}
		const filteredBooks = tempBookArr.filter(book => book[event.target.name].toLowerCase().startsWith(event.target.value.toLowerCase()))
		dispatch(bookSearchAction(filteredBooks))
	}

	if(books.length === 0){
		history.push(`/books`)
	}

	return (
		<div className='container-fluid' style={{ backgroundImage: 'linear-gradient(rgb(200, 200, 200, 0.5), rgb(255, 255, 255))', minHeight: 'calc(100vh - 57px)', height: 'fit-content', backgroundRepeat: 'none', backgroundSize: 'cover', padding: '0px' }}>
			<div className="navbar navbar-expand justify-content-center" style={{ backgroundColor: "rgb(0, 0, 0, .5)" }}>
				<input className="ms-2 mt-1"
				type="text"
				placeholder="Search book by title"
				name="title"
				value={input.title}
				onChange={onChangeHandler}
			/><input className="ms-2 mt-1"
				type="text"
				placeholder="Search book by author"
				name="author"
				value={input.author}
				onChange={onChangeHandler}
			/>
			<svg onClick={() => { setInput({ title: '', author: '' }); dispatch(bookSearchAction(books)) }} style={{ color: "white", marginBottom: "-4px", cursor: 'pointer' }} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-repeat ms-2" viewBox="0 0 16 16">
				<path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
				<path fillRule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z" />
			</svg>
			</div>
			
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
					{searchedBooks.length ? <h1 className='text-center my-3'>Searching result:</h1> : <h1 className='text-center my-3'>No books found <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-emoji-frown mb-2 ms-2" viewBox="0 0 16 16">
						<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
						<path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
					</svg></h1>}
					<div className="row row-cols-2 row-cols-md-4 justify-content-center">
						{searchedBooks.map((book, index) => <Book key={index} book={book} currentLevel={currentLevel} />)}
					</div> </>}
			</div>
		</div>
	)
}

export default Search