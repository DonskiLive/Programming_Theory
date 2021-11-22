import { ADD_TODO, REMOVE_TODO, CHANGE_STATUS} from './actionsType'

export const addTodo = (text) => {
	return (dispatch) => {
		dispatch({ type: 'LOAD_START' })
		setTimeout(() => {
			dispatch({ type: ADD_TODO, payload: {text} })
			dispatch({ type: 'LOAD_STOP'})
		}, 2000)
	}
}

export const removeTodo = (index) => {
	return (dispatch) => {
		dispatch({ type: 'LOAD_START' })
		setTimeout(() => {
			dispatch({ type: REMOVE_TODO, payload: {index}})
			dispatch({ type: 'LOAD_STOP'})
		}, 2000)
	}
}

export const changeStatus = (index, status) => {
	return {
		type: CHANGE_STATUS, 
		payload:{index, status}
	}
}
