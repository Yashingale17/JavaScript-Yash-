class newOne {
    constructor(Username) {
        this.Username = Username;
    }
    logMe() {
        console.log(`username is ${this.Username}`)
    }

}
class child extends newOne {
    constructor(Username, email, password) {
        super(Username)
        this.email = email
        this.password = password
    }
    name() {
        console.log(`name is ${this.Username} Email is ${this.email} and password is ${this.password}`)
    }
}

const details = new child("Sahil", "sahil@gmail", 1234)
details.name();

