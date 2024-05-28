const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = true;
    this.id = 0;
}
Book.prototype.changeReadStatus = function() {
    let bookDivReadLabel = document.getElementById(this.id)
    if (this.read === false ) {
        this.read = true;
        bookDivReadLabel.className = 'trueLabel'
    }
    else {
        this.read = false;
        bookDivReadLabel.className = 'falseLabel'
    }
    
    bookDivReadLabel.innerHTML = 'Read:  <span> ' + this.read + '</span>'
}


function addBooktoLibrary() {
    let title = prompt('title');
    let author = prompt('author');
    let pages = prompt('pages');
    let read = prompt('read?');
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
}
function displaybooks() {
    for (let i = 0; i < myLibrary.length; i ++) {
        myLibrary[i].id = i;
        let bookdiv = document.createElement('div');
        let bookDivTitle = document.createElement('div');
        bookDivTitle.innerText = 'Title: ' + myLibrary[i].title;
        let bookDivAuthor = document.createElement('div');
        bookDivAuthor.innerText = 'Author: ' + myLibrary[i].author;
        let bookDivPages = document.createElement('div');
        bookDivPages.innerText = 'Pages: ' + myLibrary[i].pages;
        let bookDivRead = document.createElement('div');
        bookDivRead.className = 'read';
        let bookDivReadLabel = document.createElement('div');
        bookDivReadLabel.innerHTML = 'Read:  <span> ' + myLibrary[i].read + '</span>'
        bookDivReadLabel.id = i;
        if (myLibrary[i].read === false) {
            bookDivReadLabel.className = 'falseLabel'
        }
        else {
            bookDivReadLabel.className = 'trueLabel'
        }
        let bookDivReadButton = document.createElement('button');
        bookDivReadButton.className = 'readButton';
        bookDivReadButton.innerText = "Change Status"
        bookDivReadButton.addEventListener('click', ()=> {
            myLibrary[i].changeReadStatus();
        })
        
        bookDivRead.append(bookDivReadLabel, bookDivReadButton)
        bookdiv.append(bookDivTitle, bookDivAuthor, bookDivPages, bookDivRead);
        container.appendChild(bookdiv);
        console.log(myLibrary[i]);
    }
}
function clearScreen() {
    while(container.firstChild) {
    container.removeChild(container.lastChild);
    }
}
const addbookButton = document.getElementById('addbook');
addbookButton.addEventListener('click', ()=> {
    addBooktoLibrary();
    clearScreen();
    displaybooks();
})
const container = document.getElementById('bookcontainer');
