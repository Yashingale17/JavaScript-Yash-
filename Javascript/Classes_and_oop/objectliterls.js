function person  (username , age ) {
    this.username = username ;
    this.age = age

    this.fullName = function () {
        console.log(`full name is ${this.username} and age is ${this.age}`);
    }

    return this // in this if we does not write retuurn this it will always return 
}

// constrecture function gives you a new instance using new it creates a new object to put values 
// new : as we write a new keyword it will create a new object . it calls a constrecture because of new keyword after that after we write this crated inserts all the values in that object
const firstpersion = new person ( "yash Ingale " , 22)
// console.log(firstpersion)

const secondPerson = new person("sahil ingale" , 22);
// console.log(secondPerson);

console.log(firstpersion instanceof person);

secondPerson.fullName();