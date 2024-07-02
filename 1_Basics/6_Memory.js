/*
    There are two type of memory
       1. Stack (For PRIMITIVE DATATYPE)
       2. Heap (For NON-PRIMITIVE DATATYPE) 

       When we store anything into stack it's return it's copied value whereas when we store in HEAP it's return the original value and all changes apply on original value.
*/

//---------------------------------------     STACK   ----------------------------------------------------------------------------------
let myName = "James Bond";
let anotherName = myName; // value is copied.
anotherName = "Thomas"; // copied value changed.

console.log(myName);
console.log(anotherName);

//-------------------------------------------      HEAP       ----------------------------------------------------------------------------

let userOne = {
  email: "manjeetchaudhary992@gmail.com",
  upi: "manjeet@ybl",
};

let userTwo = userOne; // Both refered the same address in the heap area and original value return not copied.
userTwo.email = "manjii21@gmail.com"; // Original vaue changed.

console.log(userOne.email);
console.log(userTwo.email); // Both are same bcz refer to same address.
