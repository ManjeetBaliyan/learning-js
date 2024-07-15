// Creation of a promise.
const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Hey")
        resolve()// To connect then() with the resolve.
    }, 2000)
})
// Consuption of promise. It execute when promise is sucessflly resolve.
promiseOne.then(function () {
    console.log("Promise is completed ")
    // then() is directly connected with resolve parameter.
})



// Doesn't store Promise inside a variable.
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Hey manjeet baliyan")
        resolve()
    }, 2000)
}).then(function () { // Directly  used then() method bcz it can't store inside a variable.
    console.log("Again promise is completed")
})



// Passing the parameter inside the resovle method.
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ name: " Manjeet", Email: "mnajeohqdsh@21jhh" })// pass the object as the parameter inside the resolve().
    }, 2000)
})
promiseThree.then(function (user) {
    console.log(user)
})



// Using of reject and resolve both method.
// Return the desire input from the data.
// Handel the error case. 
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ name: "Manjeet Chaudhary", course: "Btech C.S.E" })
        }
        else {
            reject("ERROR: Something occur wrong.")
        }
    }, 2000)
})
// For resolve --> then().
// For reject or error --> catch().
promiseFour
.then((user) => {
    console.log(user)
    return user.name // We want the name from the data.
})
.then((name) => {// This is CHANNING which take the output of parent as input.
    console.log(name)
})
.catch((error) => {
    console.log(error)
})
.finally(()=>console.log("Promise is done either reject or resolve."))
// finally() always execute either promise execute or resolve
