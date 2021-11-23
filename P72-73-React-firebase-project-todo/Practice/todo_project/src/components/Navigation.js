import { useDispatch, useSelector } from 'react-redux'
import { appSelector } from '../todo_store/appReducer/AppReducer'
import { clearTodo } from '../todo_store/todoReducer/TodoReducer'

import { Link, NavLink, useHistory } from 'react-router-dom'
import { logoutAction } from '../todo_store/appReducer/AppReducer'

const Navigation = () => {
	const authorizedUser = useSelector(appSelector).auth
	const history = useHistory()
	const dispatch = useDispatch()

	return (
		<nav className="navbar navbar-expand bg-dark">
			<div className="container">
				<ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
					<li className="nav-item py-2">
						<NavLink exact to="/" className="navLinks">
							Home
						</NavLink>
					</li>
					{authorizedUser && <li className="nav-item py-2 ms-4">
						<NavLink to="/todo" className="navLinks">
							Todo Cabinet
						</NavLink>
					</li>}
				</ul>
				{authorizedUser ? <>
					<li className="text-white me-4 list-unstyled">{`You are logged as: USER`}</li>
					<li className="text-white list-unstyled"
						onClick={() => {
							dispatch(logoutAction())
							clearTodo()
							history.push('/')
						}}
						style={{ cursor: 'pointer' }}
					>Logout</li>
				</> :
					<>
						<li className="text-white me-3 list-unstyled">Hi, Guest!</li>
						<Link className='nav-item navLinks' to="/todo">Login</Link>
					</>
				}
			</div>
		</nav>
	)
}

export default Navigation