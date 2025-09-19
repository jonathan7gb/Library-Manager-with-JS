export function deleteBook(books, id) {
    const bookIndex = books.findIndex(book => book.id === id); 
    if (bookIndex !== -1) {
        books.splice(bookIndex, 1); 
        console.log("\n|| == Book deleted successfully! == ||\n");
    } else {
        console.log("\n|| == Book not found== ||\n");
    }
}