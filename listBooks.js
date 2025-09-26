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