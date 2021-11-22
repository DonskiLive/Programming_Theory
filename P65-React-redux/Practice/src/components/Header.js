import { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../store/todo/actionCreator'


const Header = ({ addTodo, loading }) => {
    const [input, setInput] = useState('')
    const onChangeHandler = ({ target }) => {
        setInput(target.value)
    }

    return (
        <>
            <h1 className="mb-4"><i>Create your private TodoList:</i></h1>
            <input type='text' style={{ height: "38px", width: "500px", paddingBottom: "7px" }} disabled={loading} value={input} onChange={onChangeHandler} />
            <button disabled={loading} className="btn btn-primary" style={{ width: "120px" }} 
            onClick={() => { 
                if (!input.trim()) {
                    alert('Field is empty! Please write your Todo :)')
                    setInput('')
                } else {
                addTodo(input); setInput('') }}}>
                {loading ? <><span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    <span>Loading...</span> </> : "Add todo"
                }</button>
        </>
    )
}

const mapStateToProps = ({ loaderReducer }) => {
    return {
        loading: loaderReducer.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTodo: (text) => dispatch(addTodo(text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);