const sym1 = Symbol("Key1");

// OBJECT LITERALS....

// objects are in  the key and value pare e.g name : " Yash " key = name and value = "Yash"
let obj1 = {
    name : "Yash",
    "Full Name" : "Yash Ingale", // v can also declare or add a key value pare inside a object but v cannot access it using dot notation it can only accessed using bracket notation.
    age : 21,
    city : "Mumbai",
    gmail: "sahil@gmail.com",
    [sym1]: "key"
};

console.log(obj1.name); // Dot Notation to access values of objects 
console.log(obj1["gmail"]); // bracket notation but it take string values 

obj1.name = "Sahil"; // changes the value of thoe key. 
console.log(obj1);

//Object.freeze(obj1); // using freeze allows you to freeze the object that means you cannot makes change in the object.
console.log(obj1);



obj1.greeting = function() {
    console.log("Hello there")
}
obj1.greeting2 = function() {
    console.log(`Hello there ${this.name}`);
}
console.log(obj1.greeting());
console.log(obj1.greeting2());




let user = {

}

user.name= "Yash"
user.enail = "sahil@gmail.com"
user.age = 22 

console.log(user);

let obj2 = {
    name : "Yash",
    FullName : {
        name : "Sahil",
        surname : " Ingale"
    }
}

console.log(obj2.FullName.surname);

let com1 = {
    1:'a',
    2:"b"
}

let com2 = {
    3:"a",
    4:"b"
}

let obj3 = Object.assign(com1 , com2); // object.assign is used to combine two objects or concate objects.In it first is a target (com1) and second one is the source (com2) that menas all the data is stored in the target object.
console.log(obj3)
console.log(com1)  // If we check the output of the com1 after usinge object.assign methord this will be the combination of com1 and com2 because it sotores the values in the targer object.


// two avoide this to storde the data inside the target object we can use this
// let obj4 = Object.assign({} , com1 , com2);
// console.log(obj4);
// console.log(com1);


// we can also use spread operater in this as well to combine two operater.

let neww = { a : 1 , b : 2 , c : 3};
let neww2 = { d : 1 , e : 2 , f : 3};

let num3 = {...neww , ...neww2};
console.log(num3);


let newobj = {
    name : "Yash",
    age : 22 ,
    id : "no"
}

console.log(Object.keys(newobj)); // it returns the key in the object 
console.log(Object.values(newobj)); //it returns the value in the object 
console.log(Object.entries(newobj)); // it put a sepcifics key and values in the saperate array and every specific array inside a array.

console.log(Object.hasOwnProperty('surname')); // it is used to check if we have a key inside of object or not it returns the boolean value.
