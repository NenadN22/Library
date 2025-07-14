const newBook = document.querySelector('.new-book-button')
const dialog = document.querySelector('#dialog')
const cancelButton = document.querySelector(".cancel")
console.log(dialog)

    
const myLibrary = [];

function Book (title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  // the constructor...
}

function addBookToLibrary() {
    const Book1 = new Book('Grse','Nenad',200,'Yes')
    myLibrary.push(Book1)
    console.log(myLibrary)
    
  // take params, create a book then store it in the array
}
addBookToLibrary()
newBook.addEventListener('click', () => {
    dialog.showModal(); 
})

