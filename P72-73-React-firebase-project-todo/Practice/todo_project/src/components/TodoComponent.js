import Header from './Header';
import TodoList from './TodoList';
import { useSelector } from 'react-redux'
import Loader from './Loader';
import { appSelector } from '../todo_store/appReducer/AppReducer'
import Auth from './Auth';
import '../App.css';

const TodoComponent = () => {
	const isLoading = useSelector(appSelector).isLoading
	const authorizedUser = useSelector(appSelector).auth

	return (
		<div className="App">
				<div className="todo-container">
					{authorizedUser ? <> <Header />
						<hr />
						<TodoList /> </> : <Auth />}
				</div>
			{isLoading && <Loader />}
		</div>
	)
}

export default TodoComponent