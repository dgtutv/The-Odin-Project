//Pulling our HTML elements, and other global variables
let content = document.querySelector(".content");
let addButton = document.querySelector("#addButton");
let newBookForm = document.querySelector("form");
let authorField = document.querySelector("#author");
let titleField = document.querySelector("#title");
let pagesField = document.querySelector("#numPages");
let radioYes = document.querySelector("#yes");
let radioNo = document.querySelector("#no");
let gridContent = document.querySelector("#gridContent");
let closeForm = document.querySelector("#closeForm");
let searchBar = document.querySelector("#search");
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
    //Create the card and add the relevent info
    let newCard = document.createElement("div");
    newCard.classList.add("card");
    newCard.classList.add("shadow");
    newCard.id = `${newBook.id}`;
    content.appendChild(newCard);

    let bar = document.createElement("div");
    bar.classList.add("orange");
    newCard.appendChild(bar);

    let info = document.createElement("p");
    let status = newBook.read ? "Read" : "Not Read";
    info.innerHTML = `<b>Title:</b> ${newBook.title} <br> <b>Author:</b> ${newBook.author} <br> <b>Status:</b> `+status+`<br> <b>Pages:</b> ${newBook.numPages}`;
    newCard.appendChild(info);

    let icons = document.createElement("div");
    icons.classList.add("icons");
    newCard.appendChild(icons);

    const pencilCode = '<svg id="pencil" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Change Status</title><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>';
    const trashCode = '<svg id="trash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Delete Card</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z" /></svg>';
    
    let pencil = document.createElement('div');
    pencil.innerHTML = pencilCode;
    pencil.firstChild.id = `pencil-${newBook.id}`;
    pencil.firstChild.classList.add("edit");
    let trash = document.createElement('div');
    trash.innerHTML = trashCode;
    trash.firstChild.id=`trash-${newBook.id}`;
    trash.firstChild.classList.add("delete");
    icons.appendChild(pencil.firstChild);
    icons.appendChild(trash.firstChild);

    //Add functionality to the pencil and trash buttons
    let pencilSvg = document.querySelector(`#pencil-${newBook.id}`);
    let trashSvg = document.querySelector(`#trash-${newBook.id}`);
    pencilSvg.addEventListener("click", function(e){
        newBook.read = !newBook.read;
        status = newBook.read ? "Read" : "Not Read";
        info.innerHTML = `<b>Title:</b> ${newBook.title} <br> <b>Author:</b> ${newBook.author} <br> <b>Status:</b> `+status+`<br> <b>Pages:</b> ${newBook.numPages}`;
    });
    trashSvg.addEventListener("click", function(e){
        newCard.remove();
        books = books.filter(book => book.id !== newBook.id);
    });
}


//When the add button is clicked, we toggle the add book form
addButton.addEventListener("click", function(e){
    newBookForm.classList.toggle("hidden");
    gridContent.classList.toggle("blur");
});

closeForm.addEventListener("click", function(e){
    newBookForm.classList.toggle("hidden");
    gridContent.classList.toggle("blur");
    newBookForm.reset();
});

//Search bar functionality
searchBar.addEventListener("input", function (e) {
    let search = searchBar.value.toLowerCase();
    let booksToRender = books.filter(book => book.title.toLowerCase().includes(search));
    renderBooks(booksToRender);
});

function renderBooks(booksToRender){
    content.innerHTML = "";
    for(book of booksToRender){
        addBook(book);
    }
    if(content.innerHTML == ""){
        content.innerHTML = "Nothing to display!";
    }
}

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
    books.push(newBook);
    addBook(newBook);

    newBookForm.reset();
    gridContent.classList.toggle("blur");
});

//We should be displaying books based on an array of them, start with a few
let book0 = new Book("George Orwell", "1984", 328, true);
let book1 = new Book("Anna Sewell", "Black Beauty", 225, false);
let book2 = new Book("S. E. Hinton", "The Outsiders", 192, true);
addBook(book0);
addBook(book1);
addBook(book2);
books.push(book0);
books.push(book1);
books.push(book2);
