import { createSlice } from '@reduxjs/toolkit'
import { login, registration } from '../service/authService'
import { authSuccess, startLoading, stopLoading } from './appReducer/AppReducer'

const initialState = {
	error: null
}

const auth = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setError: (state, { payload }) => {
			state.error = payload
		},
		clearError: state => {
			state.error = null
		}
	}
})

export default auth.reducer
export const { setError, clearError } = auth.actions
export const errorSelector = state => state.auth.error

export function loginAction(email, password) {
	return async dispatch => {
		dispatch(startLoading())
		dispatch(clearError())
		try {
			await login(email, password);
			dispatch(authSuccess())
		} catch (error) {
			dispatch(setError(error.message.split(' ').slice(1, -1).join(' ') + ' (Access denied)'))
		} finally {
			dispatch(stopLoading())
		}
	}
}
export function registrationAction(email, password) {
	return async dispatch => {
		dispatch(startLoading())
		dispatch(clearError())
		try {
			await registration(email, password);
			dispatch(authSuccess())
		} catch (error) {
			dispatch(setError(error.message.split(' ').slice(1, -1).join(' ')))
		} finally {
			dispatch(stopLoading())
		}
	}
}