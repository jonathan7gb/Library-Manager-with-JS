export function searchBookByTitle(books, title) {
    const foundBooks = books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
    if(foundBooks.length === 0) {
        console.log("\n|| == No books found with that title! == ||\n");
        return [];
    }else{
        return foundBooks;
    }
}

export function searchBookByAuthor(books, author) {
    const foundBooks = books.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
    if(foundBooks.length === 0) {
        console.log("\n|| == No books found with that author! == ||\n");
        return [];
    }else{
        return foundBooks;
    }
}

export function findBookByID(id, books) {
    return books.find(book => book.id === id);
}