// Stack (Primitive) Heap (Non-primitive)

let name = "Yash Ingale"

let changeName = name ;
changeName = "Sahil Ingale";

console.log(name);
console.log(changeName);


let obj1 = {
    Name : "Yash Ingale",
    age : 22,
    email : "sahilingale@gmail.com"
};

let obj2 = obj1 ;

obj2.Name = "Sahil Ingale";

console.log(obj2.Name);
console.log(obj1.Name);


