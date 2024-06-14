//Pulling our HTML elements
let tableBody = document.querySelector("tbody");
let addButton = document.querySelector("#addButton");
let newBookForm = document.querySelector("form");

//Our book object constructor
function Book(author, title, numPages, read){
    this.author = author;
    this.title = title;
    this.numPages = numPages;
    this.read = read;
}

//Button brings up a form, with it's own submit button

//When the submit button is pressed, form collapses, and the book is added to an array
addButton.addEventListener("click", function(e){
    newBookForm.classList.toggle("hidden");
});

newBookForm.addEventListener("submit", function(e){
    newBookForm.classList.toggle("hidden");
});

//We should be displaying books based on an array of them, start with a few
let book0 = new Book("George Orwell", "1984", 328, true);
let book1 = new Book("Anna Sewell", "Black Beauty", 225, false);
let book2 = new Book("S. E. Hinton", "The Outsiders", 192, true);
let books = [book0, book1, book2];

//Add the books in our array to the table
for(let book of books){
    let row = tableBody.insertRow();
    let author = row.insertCell(0);
    let title = row.insertCell(1);
    let pages = row.insertCell(2);
    let read = row.insertCell(3);
    author.innerHTML = book.author;
    title.innerHTML = book.title;
    pages.innerHTML = book.numPages;
    if(book.read){
        read.innerHTML = "Yes";
    }
    else{
        read.innerHTML = "No";
    }
}
