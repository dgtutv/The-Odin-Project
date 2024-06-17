//Pulling our HTML elements, and other global variables
let tableBody = document.querySelector("tbody");
let addButton = document.querySelector("#addButton");
let newBookForm = document.querySelector("form");
let authorField = document.querySelector("#author");
let titleField = document.querySelector("#title");
let pagesField = document.querySelector("#numPages");
let radioYes = document.querySelector("#yes");
let radioNo = document.querySelector("#no");
let books = [];
let numBooks = 0;

//Our book object constructor
function Book(author, title, numPages, read){
    this.author = author;
    this.title = title;
    this.numPages = numPages;
    this.read = read;
    this.id = numBooks;
    numBooks++;
}

//Function to add book to library
function addBook(newBook){
    books.push(newBook);
    let row = tableBody.insertRow();
    let author = row.insertCell(0);
    let title = row.insertCell(1);
    let pages = row.insertCell(2);
    let read = row.insertCell(3);
    author.innerHTML = newBook.author;
    title.innerHTML = newBook.title;
    pages.innerHTML = newBook.numPages;
    read.innerHTML = newBook.read ? "Yes" : "No";
    let buttonCell = row.insertCell(4);
    let button = document.createElement("button");
    button.textContent = "Delete";
    buttonCell.appendChild(button);
    
    //Function to remove book from library
    button.addEventListener("click", function(e){
        row.remove();
    });
}


//When the add button is clicked, we toggle the add book form
addButton.addEventListener("click", function(e){
    newBookForm.classList.toggle("hidden");
});

//When the submit button is pressed, form collapses, and the book is added to an array
newBookForm.addEventListener("submit", function(e){
    e.preventDefault();
    newBookForm.classList.toggle("hidden");

    //Pull data from our form fields
    let author = authorField.value;
    let title = titleField.value;
    let numPages = pagesField.value;
    let read = radioYes.checked ? true : false;

    //Create a new book and add it to the collection
    let newBook = new Book(author, title, numPages, read);
    addBook(newBook);
});

//We should be displaying books based on an array of them, start with a few
let book0 = new Book("George Orwell", "1984", 328, true);
let book1 = new Book("Anna Sewell", "Black Beauty", 225, false);
let book2 = new Book("S. E. Hinton", "The Outsiders", 192, true);
addBook(book0);
addBook(book1);
addBook(book2);
