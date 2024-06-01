"use strict"; // this tell that use javaScript newer version 

let name = "Yash Ingale" ; // data type is string 
let dob = 17 ;  // datatype is number
let bool = true ; // data type is boolean in this the value will be either true or false  it has only two values
// bigint 

// objects this is a mon-premitive


// null and undefine 


// dataToye convertion 

let converttoNum = Number("33abc");
console.log( converttoNum); 
// while converting to number we need to check if it is a number or not if it does not contains a number then also it will show that it is a number but when we print or log the value that will show NaN that is not a number


let converttoString = String(123);
console.log( typeof converttoString);


let convertNull = Number(null);
console.log(convertNull);
// this will show the output as 0 because it is null 

let convertUnd = Number(undefined);
console.log(convertUnd)
// it is undfined that why it will show the NaN that is not a number 


let boole = Number(true);
console.log(boole);
// this will show the output a 1 and for false it should show 0 then 
// JavaScript implements a type coercion mechanism for boolean values when used in numeric contexts.
// true is converted to the number 1.
// false is converted to the number 0.


let converttoboolena = Boolean(1)
console.log(converttoboolena);
// output will be true as in the above boolean convertion of true to value 1 in this is converts 1 to boolean true value 

let converttoboolena1 = Boolean("Yash")
console.log(converttoboolena1);
let converttoboolena2 = Boolean("")
console.log(converttoboolena2);
// if we add string instade of number it will give us true because js has a conceptof truthy and falsy values if we have a "" , NaN , undefined , null, 0 and false it converts it to false as we have string yash it's not from any of this that why it is a truthy value that is true