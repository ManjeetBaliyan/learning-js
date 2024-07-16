// Objects literals

const user = {
    username: "Manjeet baliyan",
    loginCount: 10,
    signedIn: true,
    getUserDetails: function () {
        //console.log("Got user details from database")
        console.log(`username:${this.username}`) // We use (this) keyword to give the reference of the current context from where we want the information.
    }
}
console.log(user.username)
console.log(user.getUserDetails())