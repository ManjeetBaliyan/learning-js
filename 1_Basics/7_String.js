const name = "Thomas"; // 'Thomas'
const VillageName = new String("Germany"); // Define a String by using java concept.Behind the sceen Both methode invoked object
const age = 21;
console.log(name + age); // String concatenation

console.log(name + " Edison " + age); // Extra things added
// But above these practices are not good and it's outdated

//_____________________________________________________________String Interpolation_________________________________________________________

// Best way by using back test(`____________`)in this we string interpolation and we make here string place holder ( ${_____} )

console.log(`Hello my name is ${name} and i am ${age} years old`);

//________________________________________METHODE USED ON STRING____________________________________________________________________________

console.log(name[0]); // Value access

console.log(VillageName.length); // length of string.

console.log(name.toUpperCase()); // For Uppercase of alphabets.

console.log(VillageName.charAt(2)); // for knowing the value of index.

console.log(name.indexOf("M")); // Knowing the index of alphabet.

// It's used to make sub string of main string. Negative indxing are not allow if given it will start with 0 bydefault.
const newName = name.substring(0, 4);
console.log(newName);

const anotherName = name.slice(-5, 3); // I
console.log(anotherName);

/*
    If either or both of the arguments are negative or NaN , the substring() method treats them as if they were 0 . slice() also treats NaN arguments as 0 , but when it is given negative values it counts backwards from the end of the string to find the indexes.
 */

const hobbi = "   Cricket   ";
console.log(hobbi);
console.log(hobbi.trim()); // TRIM is used to remove starting and ending space.

const url = "https://sundar.com/sundr%20cjkahl";
console.log(url.replace("%20", "&")); // For replace aanything inside a string.
console.log(url.includes("aman")); // for checking given value present in string or not.

const nickname = "lkwfkjfwjnfskldnlklndlkele";
console.log(nickname.split("j")); // It split the string on given value and store in the form of array.

/*
   FOR MORE METHODE GOES ON MDN WEBSITE OR CONSOLE ON A BROWSER.
 */
