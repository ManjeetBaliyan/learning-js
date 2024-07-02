const score = 200;
console.log(score);

const num = 4393.958748;

const accountNum = new Number(21349895); // Here we specificly define we required number as input where as in above case JS automatically
console.log(accountNum); // identify the datatype of input at runtime.

//____________________________________________METHODS OF NUMBER _____________________________________________________________________________

console.log(accountNum.toString().length); // convert into string due to this it can achive all the properties of string.

console.log(accountNum.toFixed(3)); // desired limit value print after the decimal.

console.log(num.toPrecision(3)); //used for round of number. It first give prirority before decimal value than after decimal. range(1 to 21).

console.log(accountNum.toLocaleString("en-IN")); // apply coma(,) between numbers.Bydefault follow USA standarad but we also can change.



//***********************************************      MATHS        **********************************************************************

// by default math library included in JS.

console.log(Math.abs(-7)); // convert into poitive.

console.log(Math.min(-7, 3, 2, 0, -3)); // Find minimum into array.

console.log(Math.max(-7, 4, -3, 9, 1, 0)); // Find maximum into array.

console.log(Math.round(5.5)); // For roundoff the number.

console.log(Math.ceil(4.9)); // For just maximum number.

console.log(Math.floor(7.5)); // For just minimum number.

console.log(Math.random()); // Always gives value between 0 and 1 (both 0 and 1 are included).

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); 

// For understanding watch chai with code video no. 12.
