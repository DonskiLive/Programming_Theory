const ViewListComponent = (props)=>{
    console.log(props, 'view')
    return(
        <div> 
        <h2>List Component with id: {props.match.params.id}</h2>
        <h3>{props.match.params.title}</h3>
        </div>
    )
}

export default ViewListComponent