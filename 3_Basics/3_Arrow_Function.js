/*
    In JS ( this ) keyword is used to refer the current scope context.
*/
const user = {
    name: "Manjeet",
    id: 1245,
    loginMessage: function () {
        console.log(`${this.name},You have sucessfully login, and your id is ${this.id}.`)
        //console.log(this)// Return the current context.
    }
}
user.loginMessage()
user.name = "Sumil"
user.loginMessage()
console.log(this) // In node enviroment THIS return empty object,bcz there is no context introduced in global level. Whereas in Browser THIS return WINDOW OBJECT.


/*----------------------   ARROW FUNCTION    ----------------------------------------------
    ==> In Arrow Function THIS keyword doesn't work.
*/

function customer() {
    let customerName = "Manjeet"
    console.log(this.customerName)
}

