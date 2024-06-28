/*
(A)--->(;) is not necessary in java script but when we console more than one time in a single line then  we  
           necessary to use (;).
           ex:- console.log("hello"); console.log("hey")


(B)---> we can define a variable in a JS with three different method:-
         1. by using let. 
         2.by using var.
         3. without using any keyword.

(C)---> We always not prefer to use 2 and 3 methode because they doesn't contain the concept of scope so due 
        to this if we change any variable than it will change entire code where it's located.

(D)---> const doesn't change if it's decleared.

(E)---> If we can't Initialized any variable then it will be printed undefined bydefault.


*/

const accountNum=12345;
let accountHolder="MANJEET BALIYAN"
var accountPassword="123456789"
accountCity="Delhi"
let accountNominne

accountHolder="Mannu";
accountCity="Pune"
accountPassword="987654321"

console.log(accountNum)  // It's used to print single data
console.table([accountHolder,accountCity,accountPassword,accountNominne]) //It's used to print multiple output at the same time.

