const newBook = document.querySelector('.new-book-button');
const dialog = document.querySelector('#dialog');
const cancelButton = document.querySelector(".cancel");
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookPages = document.querySelector('#pages');
const bookRead = document.querySelector('#read')
const form = document.querySelector('.form');
const booksContainer = document.querySelector('.books-container')
let bookName;
let id;
console.log(id);


    
const myLibrary = [];

function Book (title,author,pages,read,id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;

  // the constructor...
}

function addBookToLibrary() {
    form.addEventListener('submit', function (e) {
      id = self.crypto.randomUUID()
        e.preventDefault()
        dialog.close()
        bookName = (new Book (bookTitle.value,bookAuthor.value,bookPages.value,read,id))
        createBookCards()
        myLibrary.push(bookName)
        form.reset();
    })
    
    

    console.log(myLibrary)
    
    
  // take params, create a book then store it in the array
}
addBookToLibrary()
newBook.addEventListener('click', () => {
    dialog.showModal(); 
})
function createBookCards() {
  let bookCard = document.createElement('div');
  bookCard.classList.add('card')
  let cardTitle = document.createElement('h1');
  cardTitle.innerHTML = bookTitle.value;
  bookCard.appendChild(cardTitle)
  booksContainer.appendChild(bookCard);
}
console.log(myLibrary)

