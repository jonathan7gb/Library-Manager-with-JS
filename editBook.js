import promptSync from 'prompt-sync';
const prompt = promptSync();

export function editBook(books, id, option){
    const foundBook = books.find(book => book.id === id);
    if(foundBook != null || foundBook != undefined){
        switch(option){
            case 1:
                let newTitle = prompt("|| ? - New Title: ");
                foundBook.title = newTitle;
                break;
            case 2:
                let newAuthor = prompt("|| ? - New Author: ");
                foundBook.author = newAuthor;
                break;
            case 3:
                let newYear = prompt("|| ? - New Publication Year: ");
                foundBook.year = newYear;
                break;
            case 4:
                let newGenre = prompt("|| ? - New Genre: ");
                foundBook.genre = newGenre;
                break;
        }
        console.log("\n|| == Book updated successfully! == ||\n");
    }else{
        console.log("\n|| == Book not found== ||\n");
    }
}