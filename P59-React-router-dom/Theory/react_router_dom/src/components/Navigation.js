import { NavLink } from 'react-router-dom'

const Navigation =()=>{
    return(
        <ul className="App-nav">
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contacts">Contacts</NavLink></li>
        <li><NavLink to="/list">List</NavLink></li>
      </ul>
    )
}

export default Navigation