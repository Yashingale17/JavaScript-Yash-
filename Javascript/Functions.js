let newfun = function(Username) {
    return `${Username} just loged in`
}

 newfun("Ingale"); // if we run this code this will not show any output because we are not saying it to print any this or it is not stored in any variable to show output .

 let fun2 = function(Userlogin) {
    return `${Userlogin} is just loged in`
 }
 const result = fun2("Yash Ingale")
 console.log(result); // this will print the output.



 let fun3 = function (/*Parameter*/User = "User") { // if we pass a default value here then the below if condition will not execute as it becomes false and user will have a default value if we don't pass any argument and after we passed a value when we call the function it will change to passed value in argument.
    if (!User) { // !user is same as user === undefined 
        console.log("Enter your username")
        return;
    }
     return `${User} is just loged in`
 }

 console.log(fun3(/*argument*/));


 function cal (...num1) { // if we use more then one argument we can use spread operater or restt operater that will give you all the arguments in a array.
    return num1
 }
 console.log(cal(100 , 200 , 300 , 400))

 // passing or using arrays and objects in functions 

 let obj= {
    name : "Yash",
    surname : "Ingale"
 }
 let objf = function (newobj) {
    console.log(`my name is ${newobj.name} and surname is ${newobj.surname}`)
 }
 objf(obj);

 // Array passing 
 let arr = [ 1 , 2 , 3 , 4 , 5];
 let arrf = function (newfun) {
    return newfun["3"] 
 }
console.log(arrf(arr))
