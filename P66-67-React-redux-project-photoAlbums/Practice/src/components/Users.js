import User from './User';
import {connect} from 'react-redux'

const Users = ({ history, currentUser, users, loading }) => {
    return (
        <div className='container'>
            {loading ? <div className="text-center my-5">
                <div className="spinner-grow mt-3" style={{ width: '2rem', height: '2rem', color: 'blue' }} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow mx-3 mt-3" style={{ width: '2rem', height: '2rem', color: 'blue' }} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow mt-3" style={{ width: '2rem', height: '2rem', color: 'blue' }} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div> : <h1 className='text-center my-5'>{users.length ? 'All our users' : 'You can be first one!'}</h1>}
            <div className="row">
                {users.map(user => <User key={user.id} user={user} currentUser={currentUser}/>)}
            </div>
            {!currentUser && <>
                <hr />
                <div className='d-grid gap-2 col-4 mx-auto'>
                    <button className='btn btn-primary'
                        onClick={() => history.push('/registration')}>
                        Registration
                    </button>
                </div> 
            </>
            }
        </div>
    )
}

const mapStateToProps = ({ usersReducer }) => {
	return {
		currentUser: usersReducer.currentUser,
		users: usersReducer.users,
        loading: usersReducer.loading
	}
}

export default connect(mapStateToProps)(Users)
