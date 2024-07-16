class person {
    constructor(personname) {
        this.personname = personname
    }
    logMe() {
        console.log(`PERSONNAME is ${this.personname}`)
    }
}

class student extends person {
    constructor(personname, email, password) {
        super(personname)
        this.email = email,
            this.password = password
    }

    name() {
        console.log(`Name of the student is  ${this.personname}`)
    }
}

const studentdetails = new student("Manjeet", "ajnjnsl@213k2", 1245678)
console.log(studentdetails)
studentdetails.name() // Direct call of inside function.