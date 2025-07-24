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
  myLibrary.forEach((element,index) => { 
    if (index === myLibrary.length - 1) {
    let cardDiv = document.createElement('div');
    let cardTitle = document.createElement('h3');
    cardTitle.textContent =`Title: ${element.title}` 
    let cardAuthor = document.createElement('h3');
    cardAuthor.textContent = `Author: ${element.author}`;
    let cardPages = document.createElement('h3');
    cardPages.textContent = `Pages: ${element.pages}`;
    let cardReadText = document.createElement('h3');
    if(element.read) {
      cardReadText.textContent = 'Read: Yes';
      
     } else  {
        cardReadText.textContent = 'Read: No';
     }
    cardReadText.id = 'cardRead'
    let cardButtonsDiv = document.createElement('div');
    let cardDelete = document.createElement('button');
    cardDelete.classList.add('delete-button')
    let cardReadButton = document.createElement('button');
    cardButtonsDiv.classList.add('cardButtonsDiv');
    cardReadButton.innerHTML += '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>check-bold</title><path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" /></svg>'
    cardDelete.innerHTML +=   '<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><title>trash-can</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z" /></svg>';
    cardButtonsDiv.appendChild(cardReadButton);
    cardButtonsDiv.appendChild(cardDelete);

    cardDiv.appendChild(cardTitle);
    cardDiv.appendChild(cardAuthor);
    cardDiv.appendChild(cardPages);
    cardDiv.appendChild(cardReadText);
    cardDiv.appendChild(cardButtonsDiv);
    cardDiv.classList.add('Card-Div');
    cardDiv.dataset.id = element.id;
    console.log(cardDiv.dataset.id);
    bookContainer.appendChild(cardDiv);
    }
  })
}
let cardDeleteButtons = document.getElementsByClassName('delete-button');
// let cardDivId =  document.getElementById(element.id)

