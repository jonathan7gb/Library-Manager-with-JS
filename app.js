import promptSync from 'prompt-sync';
const prompt = promptSync();
import { menu } from './libraryMenu.js';
import { registerBook } from './bookRegister.js';
import { listBooks } from './listBooks.js';
import { searchBookByTitle } from './searchBookByTitle.js';
import { editBook } from './editBook.js';
import { changeBookStatus } from './changeBookStatus.js';
import { deleteBook } from './deleteBook.js';


var books = [];
var option;

do{
    menu();
    option = parseInt(prompt("|| ? - Your Choice: "));

    switch (option) {
        case 1:
            console.log("\n|| ==== REGISTER BOOK ==== ||\n");
            let id = books.length + 1;
            let title = prompt("|| ? - Title: ");
            let author = prompt("|| ? - Author: ");
            let year = prompt("|| ? - Publication Year: ");
            let genre = prompt("|| ? - Genre: ");
            let status = "Available";
            const newBook = registerBook(id, title, author, year, genre, status);
            books.push(newBook);
            console.log("\n|| Book registered successfully! ||\n");
            break;
        case 2:
            console.log("\n|| ==== LIST OF BOOKS ==== ||\n");
            listBooks(books);
            console.log("");
            
            break;
        case 3:
            console.log("\n|| ==== SEARCH BOOK BY TITLE ==== ||\n");
            var searchTitle = prompt("|| ? - Title: ");
            console.log("");
            
            let foundBooks = searchBookByTitle(books, searchTitle)
            listBooks(foundBooks);
            console.log("");
            break;
        case 4:
            console.log("\n|| ==== EDIT BOOK ==== ||");
            console.log("|| 1 - Edit Title      ||");
            console.log("|| 2 - Edit Author     ||");
            console.log("|| 3 - Edit Year       ||");
            console.log("|| 4 - Edit Genre      ||");
            let editOption = parseInt(prompt("|| ? - Your Choice: "));
            console.log("");
            var editId = parseInt(prompt("|| ? - Book ID: "));
            const bookToEdit = editBook(books, editId, editOption);
            break;
        case 5:
            console.log("\n|| ==== CHANGE BOOK STATUS ==== ||\n");
            var statusId = parseInt(prompt("|| ? - Book ID: "));
            changeBookStatus(books, statusId);
            break;
        case 6:
            console.log("\n|| ==== DELETE BOOK ==== ||\n");
            var deleteId = parseInt(prompt("|| ? - Book ID: "));
            deleteBook(books, deleteId);
            break;
        case 0:
            console.log("\n|| ==== EXITING THE SYSTEM ==== ||\n");
            
    }

}while(option != 0);
