import Stars from './Stars'

const Book = ({book, history}) =>{
    return(
        <div className = 'col mt-5'>
            <div className="card text-center h-100 mb-3 px-3">    
            <div className="card-body">
            <img src={book.cover} className="card-img-top" alt="..." />
            </div>   
                <h4 className="card-title">{book.title}</h4>
                <p>by: {book.author}</p>
                {book.rate ? <Stars rate = {+book.rate}/> : <p style ={{fontSize:'12px'}}>note rate yet</p>}
                <button className = "btn btn-primary btn-sm mb-3"
                         onClick = {()=>{
                            history.push(`/book/${book.id}`)
                         }}>Read more</button>
            </div>
        </div>
    )
}

export default Book