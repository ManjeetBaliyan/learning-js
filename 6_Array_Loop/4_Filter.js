// -----------------------   FILTER   -------------------------------------------------------

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNum = myNum.filter((num) => num > 4);
console.log(newNum);

//If we use the {} curly brackets i.e. scope then we write return keyword inside it.
const newNum1 = myNum.filter((num) => {
  return num > 4;
});
console.log(newNum);

// Same problem by using for each loop without using FILTER.
const newNum2 = [];
myNum.forEach((num) => {
  if (num > 4) {
    newNum2.push(num);
  }
});
console.log(newNum2);

//-------------------------------------------------------------------------------------------

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let bookrequired = books.filter(
  (bk) => bk.genre === "History" && bk.publish === 1999
);
console.log(bookrequired);

bookrequired = books.filter((bk) => bk.genre === "Science");
console.log(bookrequired);

bookrequired = books.filter((bk) => {
  return bk.genre === "History";  // By using scope.
});
console.log(bookrequired);

