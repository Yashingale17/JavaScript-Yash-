
/*
  Q.. Difference between “ == “ and “ === “ operators.

  both are the comparesion operater and the difference is == is used to compare the values and === is used to compaere both the value and data type 

  e.g
 */
let a = 3 ;
let b = "3";
console.log( a == b );

let a1 = 3 ;
let b2 = "3";
console.log( a1 === b2 );

/* Q...  Difference between var and let keyword in javascript. 

  Var has a function scope , global scope which means it can be accessable globaly inside the function as well as outside the functions where as let is intreduced in 2015 ES6 and has a block scope that is it is only assesable inside a scope that is {} if a variable is diclared with let inside a blocl {} it is only accesable in the block only not outside of the block*/
{
  var name1 = "Yash";
  let name2 = "sahil";
console.log(name2);
}
console.log(name1);

/* Q..Is javascript a statically typed or a dynamically typed language?

JavaScript is a dynamically typed language. In a dynamically typed language, the type of a variable is checked during run-time in contrast to a statically typed language, where the type of a variable is checked during compile-time. */ 

/* Q... What is NaN property in JavaScript?
 NaN property represents the “Not-a-Number” value. It indicates a value that is not a legal number.

typeof of NaN will return a Number.
to check if the number is NaN we can use toNaN() function which first converts the given value in number and then equates it with the NaN 
e.g */ 

console.log(isNaN("Yash"));
console.log(isNaN(123));
console.log(isNaN("123")); // here it converts it to the number as mentioned above then it becomes 0 that is a number that why it is a false

/* Q... Explain “this” keyword ?

 It refers to the current object context where a piece of code is being executed. The value of this changes depending on how a function is called and where it's defined.
 e.g*/
 
 let obj9 = {
  fullName : "Yash Ingale",
  greet : function () {
    console.log(`hello Welcome ${this.fullName}`)
  }
 }
 console.log(obj1)
 obj9.greet();

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


/* Q.. Ececution contexts 
 Global Execution context 
 functional ececution context */ 

 /* what is window object  */

 /* window object is a browsers object and not an javascript object it is created by browser and it a global object with lots of properties and methords  */ 