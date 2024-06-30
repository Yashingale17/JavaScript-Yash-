const obj1 = {
    name :"Yash Ingale",
    age : 22,
    marks : 85.5,
    print : function () {
        console.log("marks :", this.marks); // here this means we want marks form the same object only wothout this we cannot access marks.
    }
}

let employee = {
    tax() {
        console.log("tax is 33%")
    }
}

let newrem = {
    salery: 50000,
}

newrem.__proto__ = employee;