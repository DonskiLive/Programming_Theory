const TodoRow = ({todo, index, changeStatus, removeTodo})=>{
    console.log(index)
    return(
        <div>
            <input type ='checkbox'
                   checked = {todo.status}
                    onChange = {e => changeStatus(index, e.target.checked)}/>
            <span style = {{textDecoration: todo.status ? 'line-through': 'none'}}>{todo.text}</span>
            <button onClick = {()=> removeTodo(index)} >remove</button>
        </div>
    )
}

export default TodoRow