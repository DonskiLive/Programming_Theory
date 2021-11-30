import React, { useEffect } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypesSelector'

const TodoList: React.FC = () => {
	const { error, page, loading, todos, limit } = useTypedSelector(state => state.todo)
	const { fetchTodos, setTodoPage } = useActions()
	const pages = [1, 2, 3, 4, 5]

	useEffect(() => {
		fetchTodos(page, limit)// eslint-disable-next-line
	}, [page])

	if (loading) {
		return <h1>Loading...</h1>
	}
	if (error) {
		return <h1>{error}</h1>
	}

	return (
		<div>
			{todos.map(todo => <div key={todo.id}>{todo.id} - {todo.title}</div>)}
			<div style={{ display: 'flex' }}>
				{pages.map(p => <div onClick={() => setTodoPage(p)} key={p} style={{ border: p === page ? '2px solid green' : '1px solid grey', padding: 10, cursor: 'pointer' }}>{p}</div>)}
			</div>
		</div>
	)
}

export default TodoList

