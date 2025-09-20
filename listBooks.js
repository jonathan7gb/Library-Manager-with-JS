export function listBooks(books) {
    books.forEach(book => {
                console.log(`|| ID: ${book.id}, Title: ${book.title}, Author: ${book.author}, Year: ${book.year}, Genre: ${book.genre}, Status: ${book.status}`);
            });
}

export function listBooksAvaiable(books) {
    books.forEach(book => {
            if(book.status === "Available"){
                console.log(`|| ID: ${book.id}, Title: ${book.title}, Author: ${book.author}, Year: ${book.year}, Genre: ${book.genre}, Status: ${book.status}`);
            }
        });
}

export function listBooksByGenre(books, genre) {
    books.forEach(book => {
            if(book.genre.toLowerCase() === genre.toLowerCase()){
                console.log(`|| ID: ${book.id}, Title: ${book.title}, Author: ${book.author}, Year: ${book.year}, Genre: ${book.genre}, Status: ${book.status}`);
            }
        });
}