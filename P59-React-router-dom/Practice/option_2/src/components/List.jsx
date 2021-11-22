import {Link, Route} from 'react-router-dom'
import ViewListComponent from './ViewListComponent'
const List = (props) => {
	const user = {id: 1}
	console.log(props)
	return (
		<div style={{display: 'flex'}}>
			<ul style={{width: '30%'}}>
				<li><Link to={`/list/${user.id}/hello`}>Item1</Link></li>
				<li><Link to='/list/2/word'>Item2</Link></li>
				<li><Link to='/list/3/john'>Item3</Link></li>
			</ul>
			<Route path='/list/:id/:title' component={ViewListComponent}/> {/* match params - will include last part of Link to='/list/1' = 1 (also possible to transfer title or other...)*/}
		</div>
	)
}

export default List