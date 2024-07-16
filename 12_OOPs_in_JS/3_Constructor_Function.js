// new keyword is a constructor. Constructor function  always give a new instance or copy i.e. it avoid the override the previous step or doesn't affect the previous result.

//const proiseOne = new Promise()
//const date = new Date()

function User(username, loginCount, islogged) {
    this.username = username;
    this.islogged = islogged;
    this.loginCount = loginCount;
    // function or method is also declare 
    this.greeting = function () {
        console.log(`Welcome ${this.username}`)
    }

}

//const user1 = User("Manjeet",6,true)
//const user2 = User("Chaudhary",8,false)
// console.log(user1)
// user2 override the previous function so avoid this we use the (new) keyword.

const user1 = new User("Manjeet", 6, true)
const user2 = new User("Chaudhary", 8, false)
console.log(user2)


/*
        STEP OCCUR WHEN WE USE THE new KEYWORD
    STEP 1 ==> A new object is created which was empty object and known as instances.
    STEP 2 ==> Through new keyword a constructor function is called which wrap all the arguments inside them.
    STEP 3 ==> all the arguments is inject inside the this keyword.
    STEP 4 ==> Return these arguments inside the function
*/