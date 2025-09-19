export function registerBook(id, title, author, year, genre, status) {
    const book = {
        id: id,
        title: title,
        author: author,
        year: year,
        genre: genre,
        status: status
    };
    return book;
}
