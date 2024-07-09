// ----------------------------  MAPS   -----------------------------------------------------

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNum = num.map((n) => n + 10);
console.log(newNum);

/* -----------------------   Chaining   -----------------------------------------------------
   
    ==> Chaining is a process in which we use more than one method at a time.
        Example= num.map().map().filter()...............
*/

const newNum1 = num
                    .map((n) => n + 10) 
                    .map((n) => n * 10) // Result of first method is input of second method.
                    .filter((n) => n > 150)
console.log(newNum1)