import React, { useEffect } from 'react';
/* import { useDispatch, useSelector } from 'react-redux'; */
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypesSelector';
/* import { fetchUsers } from '../store/action-creators/user'; */

/* interface MapUsers{
	
} */

const UserList: React.FC = () => {
	/* const state = useSelector(state=>state.users) */
	const { users, error, loading } = useTypedSelector(state => state.user)
	/* const dispatch = useDispatch() */
	const { fetchUsers } = useActions()

	useEffect(() => {
		/* dispatch(fetchUsers()) */
		fetchUsers()// eslint-disable-next-line
	}, [])

	if (loading) {
		return <h1>Loading...</h1>
	}
	if (error) {
		return <h1>{error}</h1>
	}

	return (
		<div>
			{users.map(user =>
				<div key={user.id}>{user.name}</div>)}
		</div>
	);
}

export default UserList;
