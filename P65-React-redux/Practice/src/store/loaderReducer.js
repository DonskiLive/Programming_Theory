const init = {
	loading: false
}

export default function loaderReducer(state = init, {type, payload}){
	switch(type){
		case 'LOAD_START':
			return {...state, loading: true, error: null}
		case 'LOAD_STOP':
			return {...state, loading: false}
		default: return state
	}
}