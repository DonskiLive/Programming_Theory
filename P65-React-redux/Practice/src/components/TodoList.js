import TodoRow from './TodoRaw';
import { connect } from 'react-redux'
import { removeTodo, changeStatus } from '../store/todo/actionCreator'

const TodoList = ({ todos, loading, changeStatus, removeTodo }) => {
    return (
        <>{loading ?
            <>
                <div className="spinner-grow mt-3" style={{ width: '2rem', height: '2rem', color: 'blue' }} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow mx-3 mt-3" style={{ width: '2rem', height: '2rem', color: 'blue' }} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow mt-3" style={{ width: '2rem', height: '2rem', color: 'blue' }} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </> :
            <ul className="ps-0">
                {todos.map((todo, index) => {
                    return (
                        <li key={index} className="row list-unstyled border rounded-3 bg-light p-2 mb-3">
                            <TodoRow todo={todo}
                                index={index}
                                changeStatus={changeStatus}
                                removeTodo={removeTodo} />
                        </li>
                    )
                })}
            </ul>}
        </>
    )
}

const mapStateToProps = ({ todoReducer, loaderReducer }) => {
    return {
        todos: todoReducer.todos,
        loading: loaderReducer.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeStatus: (index, status) => dispatch(changeStatus(index, status)),
        removeTodo: (index) => dispatch(removeTodo(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);