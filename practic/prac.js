function name (name , age) {
    this.name =  name;
    this.age = age 
}

name.prototype.collab = function () {
    console.log(`name is ${this.name} and  age is ${this.age}`)
}

const insert = new name ("Yash" , 22)
insert.collab()