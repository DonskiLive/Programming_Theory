import Book from './Book'
import '../css/BookList.css'

const BookList = ({books, onDecClickHandler, onIncClickHandler })=>{
    return(
    <div className='cards-list'>
        {books.map((book)=>
        <Book
            key ={book.id}
            book = {book}
            onDecClickHandler = {onDecClickHandler}
            onIncClickHandler = {onIncClickHandler}  
            /* title={book.title}
            author={book.author}
            genre={book.genre}
            yearIssue = {book.yearIssue}
            src = {book.cover}  */
        />)}  
    
</div>
)
}
//book = {book}  -> props.book = book

export default BookList

/* export default function cardList() {
    return (
        <div className='cards-list'>
            <Card title='Card-1'
                subtitle='Subtitle1'
                text='some text1' />
            <Card title='Card-2'
                subtitle='Subtitle2'
                text='some text2' />
            <Card title='Card-3'
                subtitle='Subtitle3'
                text='some text3' />
        </div>

    )
} */