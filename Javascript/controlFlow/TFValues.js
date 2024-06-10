
let mail = ''

if (mail) {
    console.log("Got user Email")
}
else {
    console.log("Enter User Email")
}

// Truthy and falsy values 

 // Falsy values 
 // fasle , 0 , Null , Undefined , NaN , BigInt , 0n , "" , -0.

// Truthy valuse 
// " " , "0" , "false" , {} , [] , functions(){}


// how to check if array is empty or not and objext is enpty or not 

let arr1 = [];

if (arr1.length === 0) {
    console.log("array is empty")
}

let obj1 ={};
if (Object.keys(obj1).length === 0) {
console.log("object is empty");
}

// Nullish collicine operater ?? 

let val1 = "";
val1 = undefined ?? null;
console.log(val1)

// The ternary operator  

// condition ? true : false

let age = 17;

age >= 18 ? console.log("Can drive") : console.log("Cannot drive") ;