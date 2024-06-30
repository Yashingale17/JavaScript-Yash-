// Array is an object that enables us to store multible items in a single varialbe 
// array is resiazable which means you can add after words in the array.
// array cannot be accessed using arbitery string that is ("") it can be accessed using [indix no. here to access].
// Copy operation 
 // DEEP Copy  : Deep copy  does not makes changes in original array
 // SHALLOW Copy : shallow copy makes the changes in the original array as well when we make any changes in copy of the original array 
//  just like stack and heap

// three ways to create arrays. 
let Arr = [ 1 , 2 , 3 , 4, 5];
let herors = [ "Spiderman" , "Iron-man", "Thor", "Doctor Strange"];
let array2 = new Array(1,2,3,4,5,6,7,8,9,10); 

console.log(Arr[2]);

// Array methord 

Arr.push(10); // Push is used to add inside the array
console.log(Arr); 

Arr.pop(); // pop removes the last element inside the assay.
console.log(Arr)

Arr.unshift(10); // add the element at the start of the array 
console.log(Arr); 

Arr.shift(); // it removes first element from the element
console.log(Arr); 

let mewarr = Arr.join(); //join converts the array into a string.
console.log(mewarr);


let original = [0,1,2,3,4,5,6,7,8];
console.log("Org:" , original);

let slicearr = original.slice(1 , 7); // it returen the slice of an array (specific portion of an array) according to your range here that is 1, 7 as it does not include the last range that is 7 and it does not makes changes in the orignal array 
console.log(slicearr);
console.log("Org:" , original);

let splicearr = original.splice( 1 , 7); // in splice it removes the specific portion from the array according to your range and also includes the last range as well and makes changes in the original array
console.log(splicearr)
console.log("Org:" , original);


let mraval = [ "Irom-man" , "SpiderMan" , "Thor"];
let dc = ["Batman" , "Flash" , "Superman"];

// mraval.push(dc); // if we use push to combine two array it put an array inside an array.
// console.log(mraval[3][1]);

let combine = mraval.concat(dc); // concate is the best methord to combine two array as it returns the new array
console.log(combine);

// another methord to combine two array is a spread operater (...)
let newcom = [...mraval, ...dc];
console.log(newcom);

let newyash = ("Yash");
console.log(Array.isArray(newyash)); // Array.isArray is used to check if given element is array or not it return the output in boolean value 

console.log(Array.from(newyash));   // Array.from is used to convert it into a array 

console.log(Array.from({name: "Sahil"})); // in this we need to mention of what we need to make array either key or value other wise it will return empty array. 


let score1 = 100;
let score2 = 200; 
let score3 = 300;
console.log(Array.of(score1 , score2 ,score3)); // Array.of methord convert an set of elements into a singel array 