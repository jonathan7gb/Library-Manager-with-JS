export function searchBookByTitle(books, title) {
    const foundBooks = books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
    return foundBooks;
}
