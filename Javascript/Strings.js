let Name = "Yash";
let surname = "Ingale";

let fullname = (Name + surname);
console.log(fullname);

console.log(` My name is ${fullname}`); // this methord is called as string interpolation

console.log(`toUpperCase : ${fullname.toUpperCase()}`); 

console.log(` toLowerCase : ${fullname.toLowerCase()}`);

console.log(`charAt : ${fullname.charAt(4)}`);

console.log(`slice : ${fullname.slice(-8, 3)}`) // 

console.log(` Replace : ${fullname.replace( "Yash" , "Sahil")}`); // replace is used to replace by adding what to replace and whith what to replace.

console.log(` include : ${ fullname.includes('sahil')}`); // include is used to check if a specific word or letter is included in the value or not.

console.log(` indexof : ${fullname.indexOf('h')}`) // indexof give us the index number of specific letter 

console.log(`substring : ${fullname.substring(0 , 6)}`) // substring gives u the value between the number you provide and it does not include the end point here that is Yashingale range is 0 to 6 which means it will not include 6th letter 

console.log(`trim : ${fullname.trim()}`)  // trim removes the space for left and right and we also have trimleft and trimright




let myName = "Yash-Ingale";
console.log(myName);
console.log(`slice : ${myName.slice( -8 ,3 )}`);

console.log(` split : ${myName.split('-')}`);



// declaring the string 

let str = new String("Yash");
console.log(str)
