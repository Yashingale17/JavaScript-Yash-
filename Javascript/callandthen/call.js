// const setName = function (userName) {
//     this.userName = userName
// }

// function Userdetail (userName , age , gender) {
//     setName.call(this, userName)
//     this.age = age; 
//     this.gender = gender
// }

// const detail = new Userdetail ( "Yash" , 23 , "Mail")
// console.log(detail)


class caeclass {
    constructor ( username , gmail , password) {
        this.username = username;
        this.gmail = gmail; 
        this.password = password ;
    }

    name () {
        return(`${this.username.toUpperCase()}`)
    }
}

const names = new caeclass("Yash" , "sahil@gmail" , 1234);
console.log(names)
console.log(names.name())


// inheritance in js is a passing down propertis or methords to child from parent if both has a same property child property is used

class parent {
    hello () {
        console.log("Hello");
    }
}

class child extends parent {}

let obj = new child();
