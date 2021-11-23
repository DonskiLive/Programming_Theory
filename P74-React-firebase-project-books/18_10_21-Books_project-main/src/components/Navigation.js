import { NavLink } from 'react-router-dom'
import Auth from './Auth'
import { useDispatch, useSelector } from 'react-redux'
import { bookSearchAction, bookSelector } from '../store/books/booksReducer'

const Navigation = () => {
    const dispatch = useDispatch()
	const books = useSelector(bookSelector).books

    return (
        <nav className="navbar navbar-expand" style={{ backgroundColor: "rgb(0, 0, 0, .9)", zIndex: '10' }}>
            <div className="container">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                    <li className="nav-item">
                        <NavLink exact to="/">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/books">
                            Books
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/bookCreator">
                            Add book
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/search" onClick={()=>dispatch(bookSearchAction(books))}>
                            Find book
                        </NavLink>
                    </li>
                </ul>
                <Auth />
            </div>
        </nav>
    )
}

export default Navigation