import { Link, useHistory } from 'react-router-dom'
import { useEffect } from 'react'
/* import { resetCurrentLevel } from '../data/booksData' */
import { useDispatch, useSelector } from 'react-redux'
import { bookSelector, getAllBookAction } from '../store/books/booksReducer'
import { logoutAction } from '../store/app/authReducer'
import { authSelector, authSuccessAction } from '../store/app/authReducer'

const Auth = () => {
    const dispatch = useDispatch()
    const loading = useSelector(bookSelector).loading
    const books = useSelector(bookSelector).books
    const currentLevel = useSelector(authSelector).currentLevel
    const history = useHistory()

    useEffect(() => {
        dispatch(authSuccessAction())
        if (books.length === 0)
            dispatch(getAllBookAction())
            // eslint-disable-next-line
    }, [dispatch])

    return (
        <>
            {loading ? <span className="spinner-border spinner-border-sm me-2 text-light" role="status" aria-hidden="true"></span> : currentLevel ? <>
                <li className="text-white me-4 list-unstyled">{`Logged with access level: ${currentLevel.name}`} </li>
                <li className="text-white list-unstyled"
                    onClick={() => {
                        dispatch(logoutAction())
/*                         resetCurrentLevel() */
                        history.push('/')
                    }}
                    style={{ cursor: 'pointer' }}
                >Logout</li>
            </> :
                <>
                    <li className="text-white me-4 list-unstyled">Actual access level: Standard</li>
                    <Link className='nav-item' to="/login">Login</Link>
                </>
            }
        </>
    )
}

export default Auth