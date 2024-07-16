class user {
    constructor(username) {
        this.username = username
    }
    logMe() {
        console.log(`Username : ${this.username}`)
    }

    static uniqueId() { // It is access only by static object. Same concept of java static.
        return `${this.username}abc`
    }
}

const userdetails = new user("Manjeet")
userdetails.logMe()
console.log(userdetails.uniqueId()) // can't acess uniqueId function bcz it is static