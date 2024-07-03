/*
    ==> {} Curly brackets denoted the scope region in a code.
    ==> We intialized any variable by three or four main method in javascript:-
        1. let x = 10 ----> can't reachout from the scope.
        2. const x = 11 ----> can't reachout from the scope.
        3. var x =12 ----> reachout from the scope.
        4. x = 13 ----> reachout from the scope.

**==> When we run code in Browser and run code in node both have different GLOBAL SCOPE.

*/
let x = 9
const y = 8
var z = 7
w = 6
if (true) {
    let x = 10
    const y = 11
    var z = 12
    w = 13
    console.log(x)
    console.log(y)
    console.log(z)
    console.log(w)
}

console.log(x)
console.log(y)
console.log(z)
console.log(w)

//------------------------- NESTED SCOPE ----------------------------------------------------
// It can be inside a loop, while loop , if-else condition, function and all others.

function user() {
    const username = "Manjeet Baliyan"
    function details() {
        const id = 1234
        console.log(username) // can call the variable of parent or outside scope.
    }

    console.log(id) // Can't acess bcz parent scope can't acess the child variable. 

    details()
}
user()
