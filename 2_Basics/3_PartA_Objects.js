/* 
    There are two way to deleare any objects in JAVASCRIPT.
    1. As a literals.    
    2. By constructor.

==> When we declare by literals singlton object doesn't create.
==> But When we declare a object by constructor method a singlonton objects is created.

*/

//_________________________________ OBJECTS As a LITERALS ___________________________________________________________________________________

const student = {
  name: "Suraj",
  age: 21,
  address: "chanakpuri, Delhi",
  email: "ahkfhf21nknw2oj@google.com",
  ismarried: false,
  present: ["Monday", "Tuesday", "Saturday"], // value as an array
};

// Access of Object
console.log(student); // Complete object Acess
console.log(student.name); // 1st way mostly used this.
console.log(student["name"]); // 2nd way (for reason why  we use this see video.).

//IMPORTANT
// Create a symbol and add into objects key then print
const mySym = Symbol("rollno");
const sym = {
  [mySym]: "hello#@",
};
console.log(sym[mySym]);

// Value change of any key
student.address = "kolambia,zimbambave";
console.log(student["address"]);

//To make object unchanged i.e. noone cam change the value of objects key.
Object.freeze(student);
student.name = "raj";
console.log(student["name"]); // name doesn't change.

// Add a Function in a Object

student.result = function () {
  console.log("pass");
};

console.log(student.result()); //It's return the function.
console.log(student.result); // only return the reference(address) of function.

student.function2 = function () {
  console.log(`Hey my name is, ${this.name}`); // Reference the same object key in the function.It is done with the help of ( this keyword).
};
console.log(student.function2());
