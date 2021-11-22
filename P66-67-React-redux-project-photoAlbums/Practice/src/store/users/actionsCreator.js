import Types from './actionTypes'
import * as UsersData from '../../data/usersData'

export const initialState = () => {
	const users = UsersData.getUsers()
	return (dispatch) => {
		if (users.length) {
			dispatch({ type: Types.load })
			try {
				setTimeout(() => {
					const data = {
						users: UsersData.getUsers(),
						currentUser: UsersData.getCurrentUser()
					}
					dispatch({ type: Types.initState, payload: { ...data } })
				}, 2000)
			} catch (e) {
				dispatch({ type: Types.error, payload: e.message })
				console.log(e.message)
			}
		} else { dispatch({ type: Types.logout }); UsersData.resetCurrentUser() }
	}
}

export const login = (logData) => {
	return (dispatch) => {
		dispatch({ type: Types.load })
		setTimeout(() => {
			try {
				const currentUser = changeCurrentUser(logData)
				if (currentUser) {
					dispatch({ type: Types.login, payload: currentUser })
				} else {
					throw new Error('login or password is wrong')
				}
			} catch (e) {
				dispatch({ type: Types.error, payload: e.message })
			}
		}, 2000)
	}
}

export const logout = () => {
	UsersData.resetCurrentUser()
	return ({
		type: Types.logout
	})
}

export const registration = (user) => {
	return (dispatch) => {
		dispatch({ type: Types.load })
		setTimeout(() => {
			try {
				const newUser = createUser(user)
				if (newUser) {
					dispatch({ type: Types.registration, payload: newUser })
				} else {
					throw new Error('user with specified e-mail already exist')
				}
			} catch (e) {
				dispatch({ type: Types.error, payload: e.message })
			}
		}, 2000)
	}
}

const changeCurrentUser = (logData) => {
	const user = UsersData.login(logData)
	if (user) {
		UsersData.setCurrentUserLocalStorage(user)
		return user
	}
	return false
}

const createUser = user => {
	const users = UsersData.getUsers()
	const isMailExist = users.some(u => u.email === user.email)
	if (!isMailExist) {
		user = { ...user, id: Date.now() }
		users.push(user)
		UsersData.setUsersToLocalStorage(users)
		UsersData.setCurrentUserLocalStorage(user)
		return user
	}
	return null
}