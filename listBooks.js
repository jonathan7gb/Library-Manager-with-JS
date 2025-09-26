export function listBooks(books) {
    if(books.length === 0){
        console.log("|| ==== Books Not Found ==== ||");
        return;
    }

    books.forEach(book => {
                console.log(`|| ID: ${book.id} | Title: ${book.title} | Author: ${book.author} | Year: ${book.year} | Genre: ${book.genre} | Status: ${book.status}`);
            });
}

export function listBooksAvaiable(books) {
    if(books.length === 0){
        console.log("|| ==== Books Not Found ==== ||");
        return;
    }

    books.forEach(book => {
            if(book.status === "Available"){
                console.log(`|| ID: ${book.id} | Title: ${book.title} | Author: ${book.author} | Year: ${book.year} | Genre: ${book.genre} | Status: ${book.status}`);
            }
        });

        
}

export function listBooksByGenre(books, genre) {
    if(books.length === 0){
        console.log("|| ==== Books Not Found ==== ||");
        return;
    }
    
    books.forEach(book => {
            if(book.genre.toLowerCase() === genre.toLowerCase()){
                console.log(`|| ID: ${book.id} | Title: ${book.title} | Author: ${book.author} | Year: ${book.year} | Genre: ${book.genre} | Status: ${book.status}`);
            }
        });
}

export function listBooksYearAsc(books) {
    if(books.length === 0){
        console.log("|| ==== Books Not Found ==== ||");
        return;
    }

    let booksYearAsc = [...books].sort((a, b) => a.year - b.year)
    booksYearAsc.forEach(book => {
            console.log(`|| ID: ${book.id} | Title: ${book.title} | Author: ${book.author} | Year: ${book.year} | Genre: ${book.genre} | Status: ${book.status}`);
        });
}

export function listBooksYearDesc(books) {
    if(books.length === 0){
        console.log("|| ==== Books Not Found ==== ||");
        return;
    }

    let booksYearDesc = [...books].sort((a, b) => b.year - a.year)
    booksYearDesc.forEach(book => {
            console.log(`|| ID: ${book.id} | Title: ${book.title} | Author: ${book.author} | Year: ${book.year} | Genre: ${book.genre} | Status: ${book.status}`);
        });
}