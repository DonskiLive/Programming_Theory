export const getBooksFromLocalStorage = ()=>{
    const books = JSON.parse(localStorage.getItem('books'))
    return books || []
}

export const addBookToStorage = (book) =>{
    const books = [...getBooksFromLocalStorage(), book]
    localStorage.setItem('books', JSON.stringify(books))
}

export const addCommentToBook = (id, comment) =>{
    const books = getBooksFromLocalStorage()
    const index = books.findIndex(b => b.id === id)
    books[index].comments.push(comment)
    books[index].rate = (books[index].comments.reduce((sum, comment)=>sum += +comment.note, 0)/ books[index].comments.length).toFixed(1)
    localStorage.setItem('books', JSON.stringify(books))
}