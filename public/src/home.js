function getTotalBooksCount(books) {
  let count = 0
  for (let book in books){
    count += 1
  }
  return count
}

function getTotalAccountsCount(accounts) {
    let count = 0
  for (let account in accounts){
    count += 1
  }
  return count
}


function getBooksBorrowedCount(books) {
let result = 0

  books.forEach(( book ) => {
      //iterate through each borrow in each book
    book.borrows.find( ( borrow ) => {
      if (borrow.returned === false){
        result += 1
      }
    })
  })
  return result
}


function getMostCommonGenres(books) {
   const genreCount = {};
  
  books.forEach((book) => {
    const genre = book.genre;
    genreCount[genre] = (genreCount[genre] || 0) + 1;
  });

  const sortedGenres = Object.entries(genreCount)
    .sort(([, countA], [, countB]) => countB - countA)
    .slice(0, 5)
    .map(([name, count]) => ({ name, count }));

  return sortedGenres;
}

function getMostPopularBooks(books) {
  return books
    .map((book) => ({
      name: book.title,
      count: book.borrows.length,
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  const authorCount = {};

  books.forEach((book) => {
    const author = authors.find((a) => a.id === book.authorId);
    const authorName = `${author.name.first} ${author.name.last}`;
    authorCount[authorName] = (authorCount[authorName] || 0) + book.borrows.length;
  });

  const sortedAuthors = Object.entries(authorCount)
    .sort(([, countA], [, countB]) => countB - countA)
    .slice(0, 5)
    .map(([name, count]) => ({ name, count }));

  return sortedAuthors;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
