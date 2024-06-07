 
 // block scope : in block scope variables are not excessable outside the scope 
 // {} this is consodered as the scope.
 // e.g 

 if (true) {
    let a = 3;
    const b = 4;
    var c = 5;
 }

 console.log(a) // both a and b will not print as it will show that a and b are not defined as they are inside the scope and let and const are block scope if declared inside the a scope then will not accessable outside of the scope 
 console.log(b)
 console.log(c) // var is a global scope 