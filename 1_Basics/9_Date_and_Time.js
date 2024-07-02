// DATE is a Object.

let date = new Date();
console.log(date);
console.log(typeof date);

console.log(date.toString());
console.log(date.toDateString());
console.log(date.toLocaleDateString());
console.log(date.toISOString());

let myCreatedate = new Date(2023, 0, 22); // To create desired date in JAVASCRIPT months start from ( '0' ) indexing.
let myDate = new Date(2023, 4, 0, 11, 5, 8); // With  with time.
let myDate1 = new Date("2024-01-30"); // desired syntax of date.Here months start from ( 1 ).

console.log(myCreatedate.toDateString());
console.log(myDate.toISOString());
console.log(myDate1.toDateString());

console.log(date.getDay()) // To know the day of the month .....Similarly for months, date , everthing....


//*****************************************          TIME         *************************************************************************/
let instantTime = Date.now();
console.log(instantTime); // Return time in milisecond from jan. 1972 to now.

console.log(myCreatedate.getTime()); // It give the time between standard date and my created date.

console.log(Math.floor(Date.now() / 1000)); // Convert into seconds.


