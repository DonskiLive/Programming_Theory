import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { IUser } from '../types/types';
import List from './List';
import UserItem from './UserItem';
import UserList from './UserList';

const UserPage: FC = () => {
	/*   const users: IUser[] = [
	{
	  id: 1, name: "Leanne Graham", email: "Sincere@april.biz",
	  address: {
		street: "Kulas Light", city: "Gwenborough", zipcode: "92998-3874"
	  }
	},
	{
	  id: 2, name: "Ervin Howell", email: "Shanna@melissa.tv",
	  address: {
		street: "Victor Plains", city: "Wisokyburgh", zipcode: "90566-7771"
	  }
	}
  ]; */

	const [users, setUsers] = useState<IUser[]>([])
	const navigate = useNavigate()

	useEffect(() => {
		fetchUsers()
	}, [])

	async function fetchUsers() {
		try {
			const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
			setUsers(response.data)
		} catch (e) {
			alert(e)
		}
	}

	return (
		<div>
			Rendered via UserList component:
			<UserList users={users} />
			Rendered via List component:
			<List items={users} renderItem={(user: IUser) => <UserItem onClick={(user)=>navigate(`/users/${user.id}`)} user={user} key={user.id} />} />
		</div>
	)
}

export default UserPage