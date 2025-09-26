import promptSync from 'prompt-sync';
const prompt = promptSync();

export function makeLoan(id, book) {
    var costumer = prompt("|| ? - Costumer name: ");
    var loanDate = prompt("|| ? - Loan Date: ");
    var returnDate = prompt("|| ? - Return Date: ");
    const loan = {
        id: id,
        book: book,
        costumer: costumer,
        loanDate: loanDate,
        returnDate: returnDate
    };
    return loan;
}

export function listLoans(loans) {
    if(loans.length === 0){
        console.log("|| ==== Loans Not Found ==== ||");
        return;
    }

    loans.forEach(loan => {
                console.log(`|| ID: ${loan.id} | Book Title: ${loan.book.title} | Costumer: ${loan.costumer} | Loan Date: ${loan.loanDate} | Return Date: ${loan.returnDate}`);
            });
}