import { Link, Route } from 'react-router-dom'
import ViewListComponent from './ViewListComponent'

const List = (props)=>{
    console.log(props)
    return(
        <div style ={{display:'flex'}}>
            <ul style={{width:'30%'}}>
                <li><Link to = '/list/1/hello'>Item1</Link></li>
                <li><Link to = '/list/2/world'>Item2</Link></li>
                <li><Link to = '/list/3/john'>Item3</Link></li>
            </ul>
           {/*  <Route path='/list/:id/:title' component = {ViewListComponent} /> */}
        </div>
    )
}

export default List

//<li><Link to = {`/list/${user.id}/hello`}>Item1</Link></li>