import { useContext } from 'react';
import { AppContext } from '../App';
import User from './User';
//import { useHistory } from 'react-router-dom';

const Users = ({ history }) => {
    const { users, currentUser } = useContext(AppContext);
    //const history = useHistory() 
    return (
        <div className='container'>
            <h1 className='text-center my-5'>{users.length ? 'All our users' : 'You can be first one!'}</h1>
            <div className="row">
                {users.map(user => <User key={user.id} user={user} />)}
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

export default Users;

//console.log(0 || true || 5 < 3 || null)