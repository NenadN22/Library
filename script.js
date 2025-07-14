const newBook = document.querySelector('.new-book-button');
const dialog = document.querySelector('#dialog');
const cancelButton = document.querySelector(".cancel");
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookPages = document.querySelector('#pages');
const bookRead = document.querySelector('#read')
const form = document.querySelector('.form')


    
const myLibrary = [];

function Book (title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  // the constructor...
}

function addBookToLibrary() {
    form.addEventListener('submit', function (e) {
        e.preventDefault()
        console.log(bookAuthor.value)
        dialog.close()
    })

    const Book1 = new Book(bookTitle,bookAuthor,bookPages,bookRead)
    myLibrary.push(Book1)
    console.log(myLibrary)
    
  // take params, create a book then store it in the array
}
addBookToLibrary()
newBook.addEventListener('click', () => {
    dialog.showModal(); 
})

