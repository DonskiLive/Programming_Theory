import {Link, useParams} from 'react-router-dom'


const Navigation = ()=>{
    const {category, idMeal} = useParams()
    return(
        <nav className ='navbar bg-dark d-flex justify-content-end'>
            {idMeal ? 
            <Link className = 'navbar-brand mx-4 text-white'
                    to = {`/${category}`}>
                back to meals list
            </Link>:null}
            <Link className = 'navbar-brand mx-4 text-white'
                  to = '/'>back to categories</Link>
        </nav>
    )
}

export default Navigation