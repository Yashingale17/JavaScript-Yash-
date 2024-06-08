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



/*  How does javaScript run the code and call baxk 

there are three phases in code execution in js
1. Global phase  : In JavaScript, global execution refers to the initial stage where the JavaScript engine sets up the environment to run your code. This happens when your JavaScript program starts running, whether it's in a web browser or a Node.js environment. The JavaScript engine creates a special object called the global object.
In web browsers, this object is typically named window.
In Node.js, it's called global.

2. Memory creation phase : in this phase all the variables are taken an keep in the memory and values inside the memeory phase are undefined and defination 
3.Execution phase : it ececutes the code 
e.g
*/

let num1 = 10 
let num2 = 5 

function addnum () {
  let total = num1 + num2
  return total
}
let result1 = addnum(val1 + val2);
let result2 = addnum(10 , 20);


/* if a function run 2 time it will create a new variable enviroonment two time here in above example function add num is used 2 times then it will create two new variable environment and ecexution thread rether then the first that was created from the start global execution phase is created only once */


////////////////////////// CALL STACK ///////////////////////////////

/*  */ 

function one () {
  console.log("One")
  two()
}
function two () {
  console.log("Two")
  three()
}
function three () {
  console.log("Three")
}

one()
two()
three()