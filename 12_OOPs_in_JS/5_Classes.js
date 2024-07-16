// ES6
//When a object is initialized through a class constructor called automatically. i.e. jaise hi (new) keyword kaam mai loge toh constructor call hojega. 

// Inside class we can declare many function or methods or variables.

class User {
    constructor(username, email, password) {
        this.username = username,
            this.email = email,
            this.password = password
    }
    encryptPassword() {
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const user1 = new User("Manjeet", "ljdlhqf@ljhkj", 12345678)
console.log(user1.encryptPassword())
console.log(user1.changeUsername())


// Same code without using class and the construction.

function User2(username, email, password){
    this.usermane = username,
    this.email=email,
    this.password=password
}
// For adding another function inside this function 

User.prototype.encryptPassword = function() {
    return `${this.password}abc`
}
User.prototype.changeUsername = function() {
    return `${this.username.toUpperCase()}`
}


const user2 = new User("Manjeet", "ljdlhqf@ljhkj", 12345678)
console.log(user1.encryptPassword())
console.log(user1.changeUsername())
