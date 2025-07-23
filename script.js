let formTitle = document.querySelector('#title');
let formAuthor = document.querySelector('#author');
let formPages = document.querySelector('#pages');
let formRead = document.querySelector('#read');
let id;
let bookContainer = document.querySelector('.books-container')

const myLibrary = [];

function Book(title,author,pages,read,id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = id
  // the constructor...
}

function addBookToLibrary() {
  let newBook =  new Book (title,author,pages,read,id)
  newBook.title = formTitle.value;
  newBook.author = formAuthor.value;
  newBook.pages = formPages.value;
  newBook.read = formRead.checked;
  newBook.id = crypto.randomUUID();
  console.log(newBook)
  myLibrary.push(newBook)
  console.log(myLibrary)
  makeBookCards()
 
  // take params, create a book then store it in the array
}
let Book1 = new Book ('Mir','Nenad',333,'yes')
let Book2 = new Book ('Dir','Menad',333,'yes')
let Book3 = new Book ('Lir','Nenad',333,'yes')
myLibrary.push(Book1)
myLibrary.push(Book2)
myLibrary.push(Book3)
for(let i = 0 ;  i < myLibrary.length; i++) {
  let key = myLibrary[i]
  console.log(key)
  console.log(key.title)
}
const form = document.querySelector('.form')
const dialog = document.querySelector('#dialog');
const newBookButton = document.querySelector('.new-book-button');
form.addEventListener('submit', (e) => {
  e.preventDefault
  addBookToLibrary()
  form.reset();
})
newBookButton.addEventListener('click', () => {
  dialog.show();

})
// treba da izvucem podatke iz arraya i da ih pretvorim u card u html
function makeBookCards(){
  myLibrary.forEach((element) => {
    let cardDiv = document.createElement('div');
    let cardTitle = document.createElement('h3');
    cardTitle.textContent =`Title: ${element.title}` 
    let cardAuthor = document.createElement('h3');
    cardAuthor.textContent = `Author: ${element.author}`;
    let cardPages = document.createElement('h3');
    cardPages.textContent = `Pages: ${element.pages}`;
    let cardRead = document.createElement('input');
    cardRead.setAttribute('type','checkbox');
    cardRead.id = 'cardRead'
    let cardLabel  = document.createElement('label');
    cardLabel.htmlFor = 'cardRead';
    cardLabel.textContent = "Read";
    let cardReadDiv = document.createElement('div');
    cardReadDiv.classList.add('read')
    cardRead.checked = element.read;
    cardDiv.appendChild(cardTitle);
    cardDiv.appendChild(cardAuthor);
    cardDiv.appendChild(cardPages);
    cardReadDiv.appendChild(cardLabel);
    cardReadDiv.appendChild(cardRead);  
    cardDiv.appendChild(cardReadDiv);
    cardDiv.classList.add('Card-Div');
    cardDiv.dataset.id = element.id;
    console.log(cardDiv.dataset.id);

    bookContainer.appendChild(cardDiv);
  })
}