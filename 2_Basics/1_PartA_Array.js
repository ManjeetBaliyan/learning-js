/*
  ==>  In Js array is the collection of different or same element.
  ==>  In JS array size should be resizeable.
  ==>  In JS array make shallow copy (share the same reference i.e. change apply on original array) 
*/
const myarray = [1, 4, "Ram", true];
const myArr = [1, 4, 6, 2, 7];
const superhero = new Array("ram", "Shankar", "Krishna");
console.log(myArr[3]);
console.log(myarray[3]);
console.log(superhero[2]);

//___________________________________   METHODS IN ARRAY ____________________________________

myArr.push(8); // Add element in the array.
console.log(myArr);

myArr.pop(); // Remove the last element of the array.
console.log(myArr);

myArr.unshift(2); // It's used to add any value at the starting.
console.log(myArr);

myArr.shift(); //It's is used to remove the first element of the array.
console.log(myArr);


console.log(myArr.includes(5)); // Return asking value is present in the array or not.

console.log(myArr.indexOf(4)); // Return index value of 4.

const newArr = myArr.join(); // Add all the element into a string seprated by a specified seperator.
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

const arr1 = myArr.slice(1, 4); // Return the given range of array.
console.log("A :- ", myArr); // 1,2,3=> Included. 4 => Excluding.
console.log(arr1); // Doesn't reflect the original array.

const arr2 = myArr.splice(1, 4); // Return the given range of array.
console.log("B :- ", myArr); //Both ending and starting given point are included.
console.log(arr2); // It remove that part from the original array i.e. it's changed the original array.


