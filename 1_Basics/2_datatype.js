"use strict"  // It's is used to treat all the JS code as new version.

/* 
(A)---> alert("hello") or alert (3+3)  Alert doesn't work here bcz we use node js not a browser. If we use a 
        browser then it will be functionable.

(B)---> JS avoid space.

(C)---> ----------------------DATATYPE IN JS---------------------

        1.Number => 2 to the power 52(approx range). Not seperate datatype for decimal all are considered as number.
        2.bigint => for very large value.
        3.boolean => true/false.
        4.string => " Manjeet" or 'Manjeet '.
        5.undefined => is a type of datatype in which we allocate the memory to the variable in the memory area but not given the value.
        6.null => standalone value which not equal to 0.
        7.symbol => for uniqueness.     

(D)---> typeof() is used to return datatype of variable or input.

*(E)---> null type is return object when typeof applied on it,so 
        null is a object.
*/

console.log(4  +     4)
console.log("Chaudhary sahab")
let name="Manjeet"
let age=21
let married=false
let wifeName
let children=null

// Two way to identify the datatype of any variable.

//Normal way
console.log(typeof age) // number

// Create as a Method
console.log(typeof(null))// object bcz null is object.
console.log(typeof(undefined))//undefined 

