import React from 'react'
import '../css/App.css';
import Title from './Title';
import { getBooks } from '../store/store.js'
import BookList from './BookList';


/* function getCards(){
  return [
    {title: "Card-1",
    subtitle: "Subtitle1",
    text: "some text1",
    src: '../favicon.ico'},
    {title: "Card-2",
    subtitle: "Subtitle2",
    text: "some text2",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/227px-React-icon.svg.png"},
    {title: "Card-3",
    subtitle: "Subtitle3",
    src: '../favicon.ico'}
  ]
} */
/* export const books = getBooks()
console.log(books) */
export default class App extends React.Component{
  state = {
    books: getBooks()
  }

  onIncClickHandler = (id)=>{
    const newBooks = [...this.state.books]
    const index = newBooks.findIndex(book => book.id === id)
    if(index >= 0 && newBooks[index].quantity < 10){
    const book = {...newBooks[index]}
    book.quantity++
    newBooks[index] = book;
    this.setState({...this.state, books: newBooks})
/*     newBooks[index].quantity++
    console.log(newBooks[index].quantity) */
    }
  }

  onDecClickHandler = (id)=>{
    const newBooks = [...this.state.books]
    const index = newBooks.findIndex(book => book.id === id) // if not found -1
    if(index >= 0 && newBooks[index].quantity > 0){
    const book = {...newBooks[index]}
    book.quantity--
    newBooks[index] = book;
    this.setState({...this.state, books: newBooks})
/*     newBooks[index].quantity++
    console.log(newBooks[index].quantity) */
    }
  }

  orderHandler = ()=>{
    const orderBooks = this.state.books.filter(book => book.quantity > 0)
    console.log(orderBooks)
    let orderMessage = 'you order: '
    orderBooks.forEach(b => orderMessage += `${b.title}, `)
    orderMessage += `sum of your order: ${orderBooks.reduce((sum, b) => sum += b.quantity * b.price, 0)}`
    console.log(orderMessage)
  }


  render(){
    return (
      <div className="App">
        <Title title='Rate post of your friend' />
        <BookList books={this.state.books}
                  onIncClickHandler={this.onIncClickHandler}
                  onDecClickHandler={this.onDecClickHandler} />
        <button className="order-button" onClick={this.orderHandler}>order</button>
      </div>
    );
  }
}

/* function App() {
return (
    <div className="App">
      <Title title='My best page' />
      <BookList books={books} />
    </div>
  );
} */
/* 
const cards =[
  {title: "Card-1",
  subtitle: "Subtitle1",
  text: "some text1",
  src: '../favicon.ico'},
  {title: "Card-2",
  subtitle: "Subtitle2",
  text: "some text2",
  src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/227px-React-icon.svg.png"},
  {title: "Card-3",
  subtitle: "Subtitle3",
  src: '../favicon.ico'}
]



function App() {
  return (
    <div className="App">
      <Title title='My best page' />
      <Title />

    <CardList cards={cards}/>
    </div>
  );
} */

/* export default App; */
