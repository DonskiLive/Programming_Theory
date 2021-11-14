/* const library =[
    {
        id:0,
        title: 'Harry Potter',
        author: 'Joan Rowling',
        yearIssue: 1995,
        genre: 'Adventure',
        iNumber: 234561,
        cover: 'https://images2.medimops.eu/product/1cace5/M01408855666-large.jpg'

    },
    {
        id:1,
        title: 'Lord of the Rings',
        author: 'John Tolkien',
        yearIssue: 1978,
        genre: 'Saga',
        iNumber: 7849632,
        cover: 'https://upload.wikimedia.org/wikipedia/en/e/e9/First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif'
    },
    {
        id:2,
        title: 'Emma',
        author: 'Jane Austin',
        yearIssue: 1816,
        genre: 'Saga',
        iNumber: 7849459,
        cover: 'https://images2.medimops.eu/product/970156/M00007350783-large.jpg'
    }

]; */

const myLibrary = new Library();
const book = new Book('Harry Potter','Joan Rowling',1995,'Adventure',234561,'https://images2.medimops.eu/product/1cace5/M01408855666-large.jpg');
myLibrary.addBook(book);
myLibrary.addBook(new Book('Lord of the Rings', 'John Tolkien',1978,'Saga',7849632,'https://upload.wikimedia.org/wikipedia/en/e/e9/First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif'));
myLibrary.addBook(new Book('Emma','Jane Austin',1816,'Saga', 7849459,'https://images2.medimops.eu/product/970156/M00007350783-large.jpg'));
console.log(myLibrary)

const left = document.querySelector('#left'),
      right  = document.querySelector('#right');

/* library.forEach((element,index) =>{
    const div = document.createElement('div');
    div.id = 'book_' + element.id;
    div.className = 'book';
    div.innerHTML = `<p>${index+1}. <span style = "font-size:24px">${element.title}</span>, ${element.author}</p>`;
    left.append(div);
}); */

left.innerHTML = myLibrary.renderLibrary();

const books = left.querySelectorAll('.book');

books.forEach(book => book.onclick = clickHandler);

function clickHandler(event){
    right.innerHTML = '';
    const id = +event.currentTarget.id.split('_')[1];
    const book = myLibrary.books.find(b=>b.id === id);        //{books:[]}
    right.innerHTML = book.renderFullInfo();

}

/* for(book of books){
    book.onclick = (event)=>{
        rigth.innerHTML = '';
        const id = +event.currentTarget.id.split('_')[1];
        const element = library.find((b)=> b.id === id);
        const bookDetail = document.createElement('div');
        bookDetail.className = "bookDetail";
        bookDetail.innerHTML = `<img src=${element.cover} alt=${element.title}>
        <h2>${element.title}</h2>
        <h5>${element.author}</h5>
        <p>years of issue: ${element.yearIssue}, genre: ${element.genre}</p>`
        rigth.append(bookDetail)
    }
} */
