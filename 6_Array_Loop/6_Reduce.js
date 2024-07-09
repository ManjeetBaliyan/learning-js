/*------------------------   REDUCE    ------------------------------------------------------
        ==> In reduce we pass two parameter. First parameter store the result and second parameter is point the element in the array.

        ==> Initally tere is no result so we declare a initial value which was used by  
            parameter 1 only one time in the starting.

        ==> We have choice to declare initial value or not. We can write directly the   
            initial value.
        
        ==> SYNTAX = array.reduce(par1,par2) => operation, initialvalue.
*/

//BY USING ARROW FUNCTION.
const num = [1, 2, 3, 4, 5];
//const initialvalue=0
const total = num.reduce((sum, digit) => sum + digit, /* initialvalue */ 0);
console.log(total);

// BY USING FUNCTION
const total_1 = num.reduce(
  function (sum, digit) {
    console.log(`Value of sum is ${sum} and the value of digit is ${digit}`);
    return sum + digit;
  },
  0 //initial value
);

//---------------------   SHOPING CARD BILL TOTAL  ------------------------------------------
const products = [
  {
    name: "Books",
    price: 10000,
  },
  {
    name: "Pencil",
    price: 100,
  },
  {
    name: "Register",
    price: 1000,
  },
  {
    name: "Colour",
    price: 500,
  },
];

const bill = products.reduce((sum, cost) => sum + cost.price, 0);
console.log(bill)
