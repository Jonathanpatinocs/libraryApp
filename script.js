const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
   this.read  = true;
    
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
Book.prototype.delete = function() {
    myLibrary.splice(this.id, 1);
    clearScreen();
    displaybooks();
}

function addBooktoLibrary() {
        
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
        let deleteButton = document.createElement('button');
        deleteButton.className = 'deleteButton'
        deleteButton.innerText = 'X';
        deleteButton.addEventListener('click', ()=> {
            
            myLibrary[i].delete();
        })
        bookDivRead.append(bookDivReadLabel, bookDivReadButton)
        bookdiv.append(bookDivTitle, bookDivAuthor, bookDivPages, bookDivRead, deleteButton);
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
    dialog.showModal();
    
})
const container = document.getElementById('bookcontainer');
const form = document.getElementById('addBookForm');

const dialog = document.getElementById('dialog');

form.addEventListener('submit' ,(event)=> {
        
    let title = document.getElementById("title");
    
    let author = document.getElementById('author');
    
    let pages = document.getElementById('pages');
    
    let read = document.getElementById('readstatus');
    
    let book = new Book(title.value, author.value, pages.value, read.value);
    myLibrary.push(book);
    console.log(book);
    
    dialog.close();
    clearScreen();
    displaybooks();
    title.value = ''
    author.value = ''
    pages.value = ''
    
    console.log(myLibrary);
    console.log(read.value);
    event.preventDefault();
    
} ) 