/*Declare a object with the help of Constructor (Singleton objects is created.
  ====>  const tinderuser = new Objects()
*/

const instauser = {
  userid: "Manju",
  id: "123@yfj",
  login: false,
};
console.log(instauser);

// Object inside a object i.e. nested objects
const snapUser = {
  id: 1231,
  name: {
    // 1st nested object.
    username: {
      //2nd nested objects.
      firstname: "akhil",
      lastname: "Sehrawat",
    },
  },
};
console.log(snapUser.name.username.firstname);

//Combine two or more objects.
const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "s",
  4: "r",
};

//Way 1
const obj3 = { obj1, obj2 }; // Similarly as an array,Here third object take (obj1,obj2) as key and value inside it.
console.log(obj3);

//Way 2
const obj4 = Object.assign(obj1, obj2);
console.log(obj4);

// Way 3 (Best Way)
const obj5 = { ...obj1, ...obj2 };
console.log(obj5);


//______________________________________  METHODS APPLY ON OBJECTS __________________________________________________________________________
// We apply all basics operation on objects such as .length and all others search on MDN. But some important are as follow. 

console.log(Object.keys(snapUser))
 // Return only key and Most important all values are store in array so we can apply al operation of array on it.

console.log(Object.values(snapUser))
// return all the values 

console.log(snapUser.hasOwnProperty("class")) // Checking for key is present in the object or not.
console.log(snapUser.hasOwnProperty("id"))


//------------------------------------------ DE-STRUCTURING OF AN OBJECTS (used for increase the code readability)---------------------------
const course ={
  coursename: "JAVASCRIPT",
  price:1200,
  courseteacher:"Rammu"
}

const{courseteacher:teacher}=course //Here we have change the name of key. Where see { } smj jana de structure hua hai.
console.log(teacher)
