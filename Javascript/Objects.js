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


// SINGALTERN OR CONSTRECTURE 