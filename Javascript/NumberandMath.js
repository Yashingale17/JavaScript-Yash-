let num = 100;

let num2 = new Number(101);

console.log(num); 
console.log(num2); 

console.log(num.toString()); // tostring converts number to a string.
console.log(num.toString().length) // now the number is converted into the string we can check the length of the string as will if we do it with the number it will be undefined.

console.log(num.toFixed(2)); // output = 100.00 

let num3 = 123.76;
console.log(num3.toPrecision(3)); // toprecision return you presized value tills the range you provide here that is three of 124 as it roundoff the number.

let locstr = 1000000;
console.log(locstr.toLocaleString('en-IN')); 



// Math 

let num12 = 12.7
console.log(Math.abs(-15));

console.log(Math.round(num12));

console.log(Math.ceil(12.1));

console.log(Math.floor(12.7));


console.log(Math.max(6,4,2,6,2));
console.log(Math.min(6,4,2,6,2));

