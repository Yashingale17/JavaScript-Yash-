/* Q... what are the different data types are present in the js ? 

Primitive and non-primitive 

  primitive data tpyes 
  string , number , boolean , undefined , Null , BigInt , Synbols 

  Non-primitive data type 
  Array , Objests and Functions 

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
 
 let obj1 = {
  fullName : "Yash Ingale",
  greet : function () {
    console.log(`hello Welcome ${this.fullName}`)
  }
 }
 console.log(obj1)
 obj1.greet();

 /*  */