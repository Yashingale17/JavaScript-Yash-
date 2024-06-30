// Key words to declare variable in javaScript are Let , Var , and const

let name = "Yadh Ingale";
const dateofBirth = "17/04/2003";
var state = "Maharashtra";


city = "Mumbai";
// we can also define variables like this but this is not the good way to declare variables best practice is using lat and const 

console.log(dateofBirth);
// Output will be 17/04/2003  of if we want to change the name i.e 

// dateofBirth = "30/04/2003";
//  now if we cnosole log it it will show the error that you are assigning to the constant variable so we cannot change the value inside the constant variables;


name = "sahil ingale";
console.log(name);

// var is a golbal scope that means if we create another state variable using var it will only change the value of same variable that is assigned in the code that means it does not fallow the scope so we oftern use let or const for declaring variable in the code instade of var
state = "jaiput"; 
console.log(state);

let studentName ;
console.log(studentName);

// here studentNsme will we undefined bacaure it is not defined 

let studentAge="";
console.log(studentAge);

// im this case you will see nothing as the output because it is empty 