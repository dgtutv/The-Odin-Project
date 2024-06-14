//Our book object constructor
function Book(author, title, numPages, read){
    this.author = author;
    this.title = title;
    this.numPages = numPages;
    this.read = read;
}

//Button brings up a form, with it's own submit button

//When the submit button is pressed, form collapses, and the book is added to an array

//We should be displaying books based on an array of them, start with a few
let book0 = new Book("George Orwell", "1984", 328, true);
let book1 = new Book("Anna Sewell", "Black Beauty", 225, false);
let book2 = new Book("S. E. Hinton", "The Outsiders", 192, true);
let books = [book0, book1, book2];