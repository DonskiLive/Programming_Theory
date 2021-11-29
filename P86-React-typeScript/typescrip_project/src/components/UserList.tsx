import React, { FC } from 'react';
import { useNavigate } from 'react-router';
import { IUser } from '../types/types';
import UserItem from './UserItem';

interface UserListProps {
	users: IUser[]
}

const UserList: FC<UserListProps> = ({users}) => {
	/* users[0].address.city */
	const navigate = useNavigate()
	return (
		<div>
			{users.map(user=>
				<UserItem onClick={(user)=>navigate(`/users/${user.id}`)} key={user.id} user={user}/>
				)}
		</div>
	)
}

export default UserList