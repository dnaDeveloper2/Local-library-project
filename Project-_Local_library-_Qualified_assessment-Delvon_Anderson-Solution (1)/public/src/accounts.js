function findAccountById(accounts, id) {
  let accountResult = accounts.find((account) => account.id === id);
  return accountResult

}

function sortAccountsByLastName(accounts) {
  let lastnameResult = accounts.sort((accountA, accountB) => accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1
  );
  return lastnameResult
}

function getTotalNumberOfBorrows(account, books) {
let result = 0

  books.forEach(( book ) => {
      //iterate through each borrow in each book
    book.borrows.forEach( ( borrow ) => {
      if (borrow.id === account.id){
        result += 1
      }
    })
  })
  return result
}
                         
                         
function getBooksPossessedByAccount(account, books, authors) {
  return books
    .filter((book) => { 
      const [borrowed] = book.borrows;
      return borrowed.id === account.id && !borrowed.returned;
    })
    .map((book) => {
      const author = findAccountById(authors, book.authorId);
      return {
        ...book,
        author,
      };
    });
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
