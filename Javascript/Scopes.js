// block scope : in block scope variables are not excessable outside the scope 
 // {} this is consodered as the scope.
 // e.g 

 if (true) {
    let a = 3;
    const b = 4;
    var c = 5;
 }

  // console.log(a) 
  // both a and b will not print as it will show that a and b are not defined as they are inside the scope and let and const are block scope if declared inside the a scope then will not accessable outside of the scope 
  // console.log(b)
 console.log(c) // var is a global scope 


 // nested scope is a scope inside a scope 

////// IMPPPPPP to just notice what the code does to under scope and globel scope does
 function nest () {
    const user = "Yash";

    function nest2 () {
        const userfullname = "Yash Ingale"
        console.log(user);
    }
    // console.log(userfullname);
    nest2()
 }
   nest()


   ///////// IMPPPP concept 

   console.log(num1(5))
   function num1 (num) {
    return num  + 1
   } 


   // this will thow the erros of accessing before initialization because this function is storde inside a variable so you cannot access the variable before initilization
   console.log(num2(6)) 
   let num2 = function(num1) {
    return num1 + 2 
   }