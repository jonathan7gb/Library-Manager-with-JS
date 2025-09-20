export function searchBookByTitle(books, title) {
    const foundBooks = books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
    return foundBooks;
}

export function searchBookByAuthor(books, author) {
    const foundBooks = books.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
    return foundBooks;
}