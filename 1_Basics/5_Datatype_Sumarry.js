/*
    ---> There are two type of primitive data type
        1. PRIMITIVE DATATYPE.
        2. NON PRIMITIVE DATATYPE.
    
    PRIMITIVE DATATYPR:--> known as call by value 
        7 type:- String, Number , Boolean , null , undefined , Symbol , Bigint

    NON PRIMITIVE DATATYPE :--> know as reference type.
       Type :-  Array, Objects , Functions
       Return type of all NON PRIMITIVE is always OBJECT.
*/

//------------------------------------------------------------------------------------------------------------------------------------------

/* 
    JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

    For example, in JavaScript, you can do the following:

        let x = 10; // x is now a number
        x = "Hello"; // x is now a string
        x = true; // x is now a boolean
    On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.

    Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:

        int x = 10; // x is a variable of type int
        String name = "John"; // name is a variable of type String
    JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully. Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness.
*/

// ARRAY
const heros = ["Chota bheem", "Saktiman", " Ben10"];

// Objects
{
  // We can store with or without a variable.
  name: "James";
  age: 22;
  isMarried: false;
}
// By storing into a variable.
let details = {
  mother: "Jeniffer",
  father: "Harry",
  siater: "Oliviya",
};

// Function

// There are many ways to declare the function,
// we use here when we treat a function as a variable.

const myFunction = function () {
  console.log("hello Duniya");
};

console.log(typeof myFunction); // Its type is known as Object function.

// https://262.ecma-international.org/5.1/#sec-11.4.3
