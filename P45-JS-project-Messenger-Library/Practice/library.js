class Book{
    constructor(title, author, year, genre, iNumber, cover){
        this.id = Book.count++
        this.title = title;
        this.author = author;
        this.yearIssue = year;
        this.genre = genre;
        this.iNumber = iNumber;
        this.cover = cover;
    }

    static count = 0;

    renderShortInfo(){
        return `
            <div class = 'book' id = 'book_${this.id}'>
            <p><span style = "font-size:24px">${this.title}</span>, ${this.author}</p>
            </div>
        `
    }

    renderFullInfo(){
        return`
            <div class = 'bookDetail'>
            <img src=${this.cover} alt=${this.title}>
        <h2>${this.title}</h2>
        <h5>${this.author}</h5>
        <p>years of issue: ${this.yearIssue}, genre: ${this.genre}</p>
            </div>
        `

    }

}

// const book = new Book ('')
//book.title, book.id, book.author, book.renderFullInfo(), book.renderShortInfo()
//Book.count

class Library{
    constructor(books=[]){
        this.books = books
    }

    addBook(book){  //Harry Potter
         const isBookInLibrary = this.books.includes(b=> b.title === book.title);
         if(!isBookInLibrary){
             this.books.push(book);
             return true;
         }
        return false;
    }

    renderLibrary(){
        return`
        ${this.books.map(book => book.renderShortInfo()).join('')}
        `
    }
}

