import { Link, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { initialState, logout } from '../store/users/actionsCreator'
import { useEffect } from 'react'

const Auth = ({ currentUser, loading, initial, users, logout }) => {

/* 	useEffect(() => {
		if (users.length === 0) initial()
	})
 */
	useEffect(()=>{
        if(users.length === 0)
        initial() // eslint-disable-next-line
    },[])

	const history = useHistory()

	return (
		<>
			{loading ? <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> : currentUser ? <>
				<li className="text-white me-3 list-unstyled">{`Hi, ${users.length ? currentUser.fName : 'guest'}!`}</li>
				<li className="text-white list-unstyled"
					onClick={() => {
						logout()
						history.push('/')
					}}
					style={{ cursor: 'pointer' }}
				>Logout</li>
			</> :
				<>
					<li className="text-white me-3 list-unstyled">Hi, guest!</li>
					<Link className='nav-item' to="/login">Login</Link>
				</>
			}
		</>
	)
}

const mapStateToProps = ({ usersReducer }) => {
	return {
		currentUser: usersReducer.currentUser,
		loading: usersReducer.loading,
		users: usersReducer.users
	}
}

const mapDispatchToProps = dispatch => {
	return {
		initial: () => dispatch(initialState()),
		logout: () => dispatch(logout())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)

