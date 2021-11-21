export default function Title(propse){
    console.log(propse)
    return(
        <h1>{propse.title ?? 'Hello world'}</h1>
    )
}

// {/* <h1>{propse.title ? propse.title : 'Hello world'}</h1> */}