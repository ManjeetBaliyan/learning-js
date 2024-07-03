function myName() {
  console.log("M");
  console.log("A");
  console.log("N");
  console.log("J");
  console.log("E");
  console.log("E");
  console.log("T");
}
myName; // Only reference of function is given here no execution occur.
myName(); // Reference + execution.

function add(number1, number2) {
  console.log(number1 + number2);
}
add(3, 4);
add(3, "5"); // Here it done string concatenation.Auto conversion ( previous codes ).
add(6, "a");
add(6, null);
// So,Here checking of datatype is required with the help of if-else.

//-------------------------------------------------------------------------------------------

// Store function call inside a variable.

function add1(number1, number2) {
  let result = number1 + number2;
  return result;
  console.log("Manjeet"); // Unreachable bcz After return statement code is unreachable.
}

const result = add1(5, 2);
console.log("Result : ", result);

function loginMessage(username) {
  if (username === undefined) {
    console.log("Please enter the name");
    return;
  }
  return `${username},You have sucessfully login`;
}
console.log(loginMessage("Manjeet"));
console.log(loginMessage());
/*Here we doesn't pass the parameter. It return undefiend so to avoid this we have two way
        1. checking the parameters.
        2. Give the default value of the function.
            function loginMessage(username ="sam") ==> Default value is excute only when parameter doesn't pass.
*/

/*------------------------------------------------------------------------------------------
                                  REST OPERATOR (...num1)
    ==> Rest operator is used when we don't known the exact number of parameters.
    ==> It return all the parameter in the array.
*/

function customerItemsPrice(...price1) {
  return price1;
}
console.log(customerItemsPrice(200, 500, 432, 6322)); // We add many more.

function customerItemsPrice2(val1, val2, ...price1) {
  console.log(val1, val2);
  return price1;
}
console.log(customerItemsPrice2(200, 500, 432, 6322));
// Here first two entries goes into val1 and val2 remaining all the values goes into price1. And it return only price1 values.If we want val1 and val2 value then we use console.log(val1,val2) we can only print that value not be return with price1.

//-----------------------------PASS OBJECTS INSIDE A FUNCTION    --------------------------
// Always use "anyobject" as parameter and argument is "name" of object.
const items = {
  name: "books",
  price: 1200,
};

function details(anyobject) {
  console.log(
    `Name of the item is ${anyobject.name} and the price of the items is ${anyobject.price}`
  );
}

details(items);

//Without initialized the object seprately
function user(anyobject) {
  console.log(
    `Name of the user is ${anyobject.name} and the id of the user is ${anyobject.id}`
  );
}
user({
  name: "Manjeet",
  id: 1234,
});

//---------------------------- PASS ARRAY INSIDE A FUNCTION --------------------------------
// Always use "getArray" as parameter and "name of array" as the argument.
const myArr = [200, 400, 600, 320];

function returnValue(getArray) {
  return getArray[3];
}
console.log(returnValue(myArr));

// Without Initialized the array seperatly
function returnValue1(getArray) {
  return getArray[3];
}
console.log(returnValue1([200, 500, 1000, 483]));

//------------------- HOSTING OF A FUNCTION ----------
