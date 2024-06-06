/* is JavaScript a Dynamically types or Static Types?

    JavaScript is a dynamically typed language. This means that the data type of a variable is determined at runtime based on the value assigned to it, unlike statically typed languages where you explicitly declare the type beforehand.*/


/* Data Type 
    Categories of datatype 
        Primitive and non-primitive 
        
        primitive datatype :
        if we use this data type some where this does not send the original location of memorey where it's stored but it sends the copy and it changes are made it also accures in the copy not at original data. 

        String 
        Number 
        booleans 
        Null 
        Undefined 
        Bigint
        Symbol */

const name = "Yash Ingale";
let age = 22;
let compare = (2 === 2);
let temp = null;
let und;
let bigNum = 13243563565645234563462345n;
let newSymbol = Symbol(" First Synbollll")

console.log(typeof temp);
/* Typeof null is Object*/




/*  Non-primitive :
  this is exect apposit to the premitive 

  Array 
  Objects  
  Functions 
  */

const Arr = ["Yash", 3, "Js"];

let newObj = {
    Name: "Yash Ingale",
    Age: 22,
};

let myfunction = function () {
    console.log("first function");
};

console.log(typeof Arr);

/* Typeof function is function and we call it as object function
 
 Typeof object is object 
 Typeof Array is object */

console.log(Array.from({ name: "Sahil" })); // in this we need to mention of what we need to make array either key or value other wise it will return empty array. 


// Question 

// Declare a symbole and used it in a object and print the output??

const mySymbol = Symbol("myUniqueKey"); // Create a symbol

let obj1 = {
  name: "Yash",
  [mySymbol] : "myUniqueKey"// Use the symbol as a property key
};
console.log(typeof obj1[mySymbol]); 

const symbol1 = Symbol("mySymbol");
const symbol2 = Symbol("anotherSymbol"); 

console.log(typeof symbol1);  // Output: "symbol"
console.log(typeof symbol2);