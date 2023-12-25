function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id)
}

function findBookById(books, id) {
  return books.find ((book) => book.id === id )
}

function partitionBooksByBorrowedStatus(books) {
  const checkedOutBooks = [];
  const returnedBooks = [];

  books.forEach((book) => {
    const [firstTransaction] = book.borrows;

    if (firstTransaction.returned) {
      returnedBooks.push(book);
    } else {
      checkedOutBooks.push(book);
    }
  });

  return [checkedOutBooks, returnedBooks];
}
           

function getBorrowersForBook(book, accounts) {
  const {findAccountById} = require("./accounts");
  const transactions = book.borrows;
  const result = transactions.map((transaction) => {
    const accountInfo = findAccountById(accounts, transaction.id);
  const newTransaction = {
      ...transaction,
      ...accountInfo,
    };
    return newTransaction;
  });
  result.splice(10);
return result;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
