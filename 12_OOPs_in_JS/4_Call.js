function setusername (username){
    this.username= username
}
function createUser (username,email,password){
    setusername.call(username)
    this.password = password,
    this.email = email
}

const details = new createUser("Manjeet","mdkjhwhfowhaoi@uw",123456)
console.log(details)