let myLibrary = [];
let newBook;
const addBook = document.getElementById("addBook");
addBook.addEventListener("click", addBookToLibrary);

class Book { 
    constructor (title, author, pages, read, uuid) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.uuid = uuid;
    }
};
// test Book
// const newbook = new Book;
// newbook.title = "asdf";
// myLibrary.push(newbook);


// reload all cards
function reloadCards(){
    clearCards();
    for(let i = myLibrary.length; i > 0; i--){
        createBookCard(i);
    }
}

// clear all cards
function clearCards(){
    cards.setHTML("");
    return undefined;
}

// truefalse button
function truefalse(){
    // change false to true in the mylibrary when changing the color
    if (myLibrary[event.srcElement.id].read === true){
        myLibrary[event.srcElement.id].read = false;
    } else {
        myLibrary[event.srcElement.id].read = true;
    }
    reloadCards();
    // add btntrue to class list if checkbox is checked when creating a new book on the page
}

// create card for book on website
let cards = document.getElementById("cards");
function createBookCard(i){
    i = i || 1;
    const now = myLibrary[myLibrary.length -i];
    cards.insertAdjacentHTML("beforeend", `
    <div class="card">
        <button class="btndelete" onclick="deleteButton()"><span class="material-symbols-outlined">cancel</span></button>
        <p>Title: <br> ${now.title}</p>
        <p>Author: <br> ${now.author}</p>
        <p>Pages: ${now.pages}</p>
        <p>I have read it: <button id="${now.uuid}" class="btn${now.read}" onclick="truefalse()">${now.read}</button></p> 
    </div>`);  
}

// find book
function isBook(a){
    for(let i = 0; i < myLibrary.length; i++){
        if (myLibrary[i].title === a){
            return i;
        }
    }
    return -1;
}

// create new book 
function addBookToLibrary(){
    event.preventDefault();
    newBook = new Book(event.srcElement.form[0].value, event.srcElement.form[1].value, event.srcElement.form[2].value, event.srcElement.form[3].checked, myLibrary.length);
    myLibrary.push(newBook); // add Book to myLibrary
    createBookCard();
    reset();
}
// reset Form
const form = document.getElementById("form")
function reset(){
    form.reset();
    return false;
}

// Popup Logic 
let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
    console.log(popup.classList);
}

function closePopup(){
    popup.classList.remove("open-popup");
}

// delete Button
function deleteButton(){
    event.target.parentNode.parentElement.remove();
    myLibrary.splice(event.srcElement.parentElement.parentElement.children[4].children[0].id, 1);
    reloadCards();
}