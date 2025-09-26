import promptSync from 'prompt-sync';
const prompt = promptSync();
import { menu, subMenuList, subMenuSearch } from './libraryMenus.js';
import { registerBook } from './bookRegister.js';
import { listBooks, listBooksAvaiable, listBooksByGenre, listBooksYearAsc, listBooksYearDesc } from './listBooks.js';
import { searchBookByTitle, searchBookByAuthor, findBookByID } from './searchBook.js';
import { editBook } from './editBook.js';
import { changeBookStatus } from './changeBookStatus.js';
import { deleteBook } from './deleteBook.js';
import { findUserByEmail, registerUser, doLogin, loginMenu } from './login.js';
import { listLoans, makeLoan } from './loans.js';

var users = []
var books = [];
var loans = [];
var option;
var loginOption;
var loggedInUser = null

users.push({email: 'admin', password: '1234'})

do{
    loginOption = loginMenu();

    switch(loginOption){
        case 1: 
            const userLogin = doLogin()
            const userVerify = findUserByEmail(userLogin.email, users);

            if(userVerify && userLogin.password === userVerify.password){
                loggedInUser = userVerify;
                console.log("\n|| === Login successfully! === ||\n");
            }else{
                console.log("\n|| Wrong email or password. Try again ||\n");
            }
            break;
        case 2: 
            const newUser = registerUser(users)
            
            if(newUser){
                users.push(newUser)
                console.log("\n|| User registered successfully! ||\n");
            }
            break;
        case 0:
            console.log("\n|| ==== System end! ==== ||");
            loggedInUser = 'EXIT';
            break;
        default:
            console.log("\n|| == Invalid option! == ||\n");
            break;
            
    }
}while(loggedInUser === null);

if(loggedInUser && loggedInUser !== 'EXIT')
do{
    menu();
    option = parseInt(prompt("|| ? - Your Choice: "));

    switch (option) {
        case 1:
            console.log("\n|| ==== REGISTER BOOK ==== ||");
            let id = books.length + 1;
            let title;
            do {
                title = prompt("|| ? - Title: ");
                const duplicate = books.some(book => book.title.toLowerCase() === title.toLowerCase());
                if (duplicate) {
                    console.log("|| A book with this title already exists in the catalog. ||");
                } else {
                    break;
                }
            } while (true)
            let author = prompt("|| ? - Author: ");
            let year = prompt("|| ? - Publication Year: ");
            let genre = prompt("|| ? - Genre: ");
            let status = "Available";
            const newBook = registerBook(id, title, author, year, genre, status);
            books.push(newBook);
            console.log("\n|| Book registered successfully! ||\n");
            break;
        case 2:
            subMenuList();
            let listOption = parseInt(prompt("|| ? - Your Choice: "));
            switch(listOption){
                case 1:
                    console.log("\n|| ==== LIST ALL BOOKS ==== ||\n");
                    listBooks(books);
                    
                    console.log("");
                    break;
                case 2:
                    console.log("\n|| ==== LIST ALL AVAILABLE BOOKS ==== ||\n");
                    listBooksAvaiable(books);
                    console.log("");
                    break;
                case 3:
                    console.log("\n|| ==== LIST BOOKS BY GENRE ==== ||\n");
                    var genreSearch = prompt("|| ? - Genre: ");
                    console.log("");
                    listBooksByGenre(books, genreSearch);
                    console.log("");
                    break;
                case 4:
                    console.log("\n|| ==== YEAR ASCENDING ORDER ==== ||\n");
                    listBooksYearAsc(books)
                    console.log("");
                    break;
                case 5:
                    console.log("\n|| ==== YEAR DESCENDING ORDER ==== ||\n");
                    listBooksYearDesc(books)
                    console.log("");
                break;
                default:
                    console.log("\n|| == Invalid option! == ||\n");
                    break;
            }
            
            break;
        case 3:
            subMenuSearch();
            let searchOption = parseInt(prompt("|| ? - Your Choice: "));
            switch(searchOption){
                case 1:
                    console.log("\n|| ==== SEARCH BOOK BY TITLE ==== ||\n");
                    var searchTitle = prompt("|| ? - Title: ");
                    console.log("");
                    let foundBooks = searchBookByTitle(books, searchTitle)
                    listBooks(foundBooks);
                    console.log("");
                    break;
                case 2:
                    console.log("\n|| ==== SEARCH BOOK BY AUTHOR ==== ||\n");
                    var searchAuthor = prompt("|| ? - Author: ");
                    console.log("");
                    let foundBooksByAuthor = searchBookByAuthor(books, searchAuthor)
                    listBooks(foundBooksByAuthor);
                    console.log("");
                    break;
                default:
                    console.log("\n|| == Invalid option! == ||\n");
                    break;
            }
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
        case 7:
            console.log("\n|| ==== MAKE A LOAN ==== ||");
            var idLoan = loans.length + 1;
            var bookId = parseInt(prompt("|| ? - Book ID: "));
            var book = findBookByID(bookId, books)
            if(book == null){
                console.log("\n|| === Book not Found === ||\n")
            }else if(book.status === 'Borrowed'){
                console.log("\n|| Book not Available to Loan! ||\n");
            }else{
                book.status = 'Borrowed'
                var loan = makeLoan(idLoan, book)
                loans.push(loan)
                console.log("\n|| Loan registered successfully! ||\n");
            }
            break;
        case 8:
            console.log("\n|| ==== LOAN HISTORY ==== ||\n");
            listLoans(loans)
            console.log("");
            break; 
        case 0:
            console.log("\n|| ==== EXITING THE SYSTEM ==== ||\n");
            break;
        default:
            console.log("\n|| == Invalid option! == ||\n");
            break;
            
    }

}while(option != 0);
