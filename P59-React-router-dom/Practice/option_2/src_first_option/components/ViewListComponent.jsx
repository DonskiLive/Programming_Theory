const ViewListComponent = (props) => {
	console.log(props)
	return (
		<div>
			<h2>List Component with id: {props.match.params.id}</h2>
			<h3>List Component with title: {props.match.params.title}</h3>
		</div>
	)
}

export default ViewListComponent