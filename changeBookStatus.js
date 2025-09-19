import promptSync from 'prompt-sync';
const prompt = promptSync();

export function changeBookStatus(books, id){
    const foundBook = books.find(book => book.id === id);
    if(foundBook != null || foundBook != undefined){
        let newStatus = prompt("|| ? - New Status (Available/Borrowed): ");
        foundBook.status = newStatus;
        console.log("\n|| == Book status updated successfully! == ||\n");
    }else{
        console.log("\n|| == Book not found== ||\n");
    } 
}
