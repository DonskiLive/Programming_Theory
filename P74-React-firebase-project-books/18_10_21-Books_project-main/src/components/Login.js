import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import Error from './Error'
import { useDispatch, useSelector } from 'react-redux'
import { bookSelector, resetError} from '../store/books/booksReducer'
import {authSelector, authSuccessAction, loginAction} from '../store/app/authReducer'
import { useEffect } from 'react'


const Login = () => {
    const dispatch = useDispatch()
    dispatch(resetError())
    
    useEffect(() => {
            dispatch(authSuccessAction())
        // eslint-disable-next-line
    }, [dispatch])

    const currentLevel = useSelector(authSelector).currentLevel
    const error = useSelector(authSelector).error
    const loading = useSelector(bookSelector).loading

    const [logData, setLogData] = useState({ level: '', password: '', showPassword: false })

    const onChangeHandler = ({ target }) => {
        setLogData({ ...logData, [target.name]: target.value })
    }

    const handleClickShowPassword = () => {
        setLogData({ ...logData, showPassword: !logData.showPassword });
    };

    return (
        <div className = 'container-fluid' style = {{backgroundImage: 'linear-gradient(rgb(200, 200, 200, 0.5), rgb(255, 255, 255))', minHeight: 'calc(100vh - 57px)', height: 'fit-content', backgroundRepeat:'none', backgroundSize: 'cover', paddingTop:"10px"}}>
        <>{loading ? <div className="text-center my-5">
            <div className="spinner-grow mt-3" style={{ width: '2rem', height: '2rem', color: 'black' }} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow mx-3 mt-3" style={{ width: '2rem', height: '2rem', color: 'black' }} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow mt-3" style={{ width: '2rem', height: '2rem', color: 'black' }} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div> : <>
            {currentLevel && <Redirect to='/books' />}
            <div className='container my-5'>
                <div className='col-6 mx-auto'>
                    {error ? <Error message={error} /> : <div className = 'alert' style={{opacity: '0'}}>Reserved space for errors</div>}
                    <h2 className="text-center">Сhange your access level</h2>
                    <input
                        className="form-control mt-3"
                        type="text"
                        name="level"
                        placeholder="Type access level"
                        onChange={onChangeHandler}
                        value={logData.level}
                    />
                    <div className="d-flex" style={{ position: 'relative' }}>
                        <input
                            className="form-control my-3"
                            style={{ display: "inline" }}
                            type={logData.showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Type password"
                            value={logData.password}
                            onChange={onChangeHandler}
                        />
                        {logData.showPassword ? <svg onClick={handleClickShowPassword} style={{ position: 'absolute', right: '10px', top: '24px', cursor: 'pointer' }} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                        </svg>  : <svg onClick={handleClickShowPassword} style={{ position: 'absolute', right: '10px', top: '24px', cursor: 'pointer' }} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                            <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                            <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                        </svg>}
                    </div>
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-dark"
                            onClick={() => {
                                dispatch(loginAction(logData.level, logData.password))
                                setLogData({ level: '', password: '' })
                            }}
                        >Login</button>
                    </div>
                </div>
            </div>
        </>}</>
        </div>
    )
}

export default Login