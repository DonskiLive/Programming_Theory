import React from 'react';
import {NavLink} from 'react-router-dom';

// eslint-disable-next-line
export default () =>{
    return (
        <div style = {{padding:'15px 0',borderBottom :'1px solid black'}}>
            <ul className = 'App-nav' style = {{display:'flex', listStyle:'none', padding: '0px', margin:'0'}}>
                <li style = {{marginRight:'15px'}}><NavLink to = '/' exact>Home</NavLink></li>
                <li style = {{marginRight:'15px'}}><NavLink to = '/about' >About</NavLink></li>
                <li style = {{marginRight:'15px'}}><NavLink to = '/posts'>Posts</NavLink></li>
            </ul>
        </div>
    )
}