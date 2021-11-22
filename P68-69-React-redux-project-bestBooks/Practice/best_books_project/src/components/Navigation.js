import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand bg-dark">
            <div className="container">
                <div className = "navbar-nav">
                    <NavLink className="nav-link active" to="/">Home</NavLink>
                    <NavLink className="nav-link" to="/books">Books</NavLink>
                    <NavLink className="nav-link" to="/add_book">Add book</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navigation