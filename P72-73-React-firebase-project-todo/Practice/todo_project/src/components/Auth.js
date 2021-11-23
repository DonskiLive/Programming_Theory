import {useState} from 'react'
import { loginAction, registrationAction } from '../todo_store/authReducer'
import {useDispatch, useSelector} from 'react-redux'
import {errorSelector} from '../todo_store/authReducer'

const Auth = ()=>{
	const [state, setState] = useState({email: '', password: ''})

	const onChangeHandler =(e)=>{
		setState({...state, [e.target.name]: e.target.value})
	}

	const error = useSelector(errorSelector)
	const dispatch = useDispatch()

	return(
		<div>
			{error ? <h3 style={{color:'red'}}>{error}</h3> : <h3 style={{opacity: '0'}}>Space for Errors</h3>}
			<form className="row login">
				<input type = 'email' name='email' placeholder = 'type email' value={state.email} onChange={(e)=> {onChangeHandler(e)}}/>
				<input type = 'password' name='password' placeholder = 'type password' value={state.password} onChange={(e)=> {onChangeHandler(e)}}/>
				<div className='login-btns'>
				<button type="submit" name='reg' 
				onClick={(e)=>{
					e.preventDefault(); 
					dispatch(registrationAction(state.email, state.password))
					setState({email: '', password: ''})
					}}>Registration</button>
				<button type="submit" name='login' 
				onClick={(e)=>{
					e.preventDefault(); 
					dispatch(loginAction(state.email, state.password))
					setState({email: '', password: ''})
					}}>Login</button>
				</div>
			</form>
		</div>
	)
}

export default Auth