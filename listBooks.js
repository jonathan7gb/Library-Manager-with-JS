export function listBooks(books) {
    books.forEach(book => {
                console.log(`|| ID: ${book.id}, Title: ${book.title}, Author: ${book.author}, Year: ${book.year}, Genre: ${book.genre}, Status: ${book.status}`);
            });
}
