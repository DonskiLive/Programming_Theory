import { createSlice } from '@reduxjs/toolkit'
import { login, logout } from '../../service/authService'
import { load, loaded, resetError } from '../books/booksReducer'

const initialState = {
	auth: localStorage.getItem('USER_LEVEL_ID') !== null,
	currentLevel: null,
	error: null
}

const authReducer = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		authSuccess: (state, { payload }) => {
			state.currentLevel = payload
		},
		logoutApp: (state) => {
			state.currentLevel = null;
		},
		setError: (state, { payload }) => {
			state.error = payload
		},
		clearError: state => {
			state.error = null
		}
	}
})

export default authReducer.reducer
export const { setError, clearError, authSuccess, logoutApp } = authReducer.actions
export const authSelector = state => state.auth

export function loginAction(email, password) {
	return async dispatch => {
		dispatch(load())
		dispatch(resetError())
		try {
			await login(email, password);
			dispatch(authSuccessAction())
		} catch (error) {
			console.log(error)
			dispatch(setError(error.message.split(' ').slice(1, -1).join(' ') + ' (Access denied)'))
		} finally {
			dispatch(loaded())
		}
	}
}

export const authSuccessAction = () => {
	return dispatch => {
		switch (localStorage.getItem('USER_LEVEL_ID')) {
			case 'RlBTloFPN6an79nO3Ne1hf6WAwD2': dispatch(authSuccess({ name: 'Admin', level: 'admin' })); break;
			case 'whSksfyMcddQAKsTbah08jqheju2': dispatch(authSuccess({ name: 'Prime', level: 'prime' })); break;
			default: dispatch(authSuccess(null));
		}
	}
}

export const logoutAction = () => {
	return async dispatch => {
		dispatch(load())
		dispatch(resetError())
		try {
			await logout()
			dispatch(logoutApp())
		} catch (e) {
			console.log(e.message)
		} finally {
			dispatch(loaded())
		}
	}
}