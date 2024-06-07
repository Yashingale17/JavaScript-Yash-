let userobj = {
    name : " Yash",
    age : 22,
    fullname : function () {
        console.log(`${this.name}, welcome to website`);
    }
}

// userobj.fullname();
// userobj.name = "sahil";
// userobj.fullname();

//console.log(this)


let fun1 = function () {
   console.log(this)
}
fun1();


let fun2 = () => {  
    console.log(this)
} 
fun2()

let chai = (num1 , num2) => num1 + num2
console.log(chai(1 ,3))

let chai1 = (num1 , num2) => (num1 + num2)
console.log(chai1(3 ,3))

// let chai3 = (num1 , num2) => (name : "Yash");   
// for objects we need to use curly braces like the below one other wiese it will give us an error
//console.log(chai3());

let chai4 = (num1 , num2) => ({name : "Yash"}) // this is a right way of declaring the objects inside the function using braces and curly braces.
console.log(chai4())