// // /* Accessing Element using 
// //     getElementById **Id us uniques for every element
// //     getElementByClassName
// //     getElementByTag */

const heading = document.getElementById("head1");
console.dir(heading);
console.log(heading);


const classss = document.getElementsByClassName("cleaas2");
console.dir(classss);
console.log(classss);


const tagName = document.getElementsByTagName("h1");
console.dir(tagName);
console.log(tagName);

const query = document.querySelector("h1");
console.dir(query);
console.log(query);

const query2 = document.querySelectorAll("h1");
console.dir(query2);
console.log(query2);

const query3 = document.querySelector("#head1");  // to access id usnig queryselector we cannot use querySelectorAll in id because every element should have an unique id. 
console.dir(query3);
console.log(query3);


const query4 = document.querySelector(".heading1");  // to access class usnig queryselector we can also use querySelectorAll in class as well 
console.dir(query4);
console.log(query4);

const query5 = document.querySelectorAll(".heading1");  // to access class usnig queryselector we can also use querySelectorAll in class as well 
console.dir(query5);
console.log(query5);

const myarr = Array.from(query5);
console.log(myarr);


// Properties 
    // innerHTML 
    // innerText
    // textContent
    // tagName


const tagname = document.querySelector("#head1"); // tagName is used to print or show the tag of that element here for id head1 that tag is <H1>
console.log(tagname.tagName);

const tagname2 = document.querySelector("#head2");
console.log(tagname2.tagName); // for this it would be <H2>

const inner = document.querySelector("#heading2");
console.log(inner.innerHTML);  /* OUTPUT: This is JavaScript Practics of Document Object Model <strong style="display: none;">DOM</strong> 
it show ths HTML elements as well in that id or class what everit is */

const inner2 = document.querySelector("#heading2");
console.log(inner2.textContent);  /* OUTPUT: This is JavaScript Practics of Document Object Model DOM 
 it only show what ever is writen in the element but we have added strong tag to DOM with style display none but it show the entire content 
 */


const inner3 = document.querySelector("#heading2");
console.log(inner3.innerText);   /*  OUTPUT: This is JavaScript Practics of Document Object Model  
it just show the content according to code witern we add display none to DOM and it  does not shows that*/


const list = document.querySelector("div");
console.log(list);
console.dir(list);

const change = document.querySelector("p");
console.log(change);

change.innerHTML = "Language None to candidates"


const changes = document.querySelector("h2");
 changes.innerText = changes.innerText + " from Yash ingale"

 let idx = 1 
 let boxes = document.querySelectorAll(".Box");
 for (const boxess of boxes) {
    boxess.innerText = `unique for every box ${idx}`
    idx++
 }
//  boxes[0].innerText = "Unique one"
//  boxes[1].innerText = "Unique two"
//  boxes[2].innerText = "Unique three"


let para = document.querySelector("p");
console.dir(para);

const attrival = para.getAttribute("class"); // this is used to get the value of the attribute in this case the attribute is class and the value of this class is ParaClass.
console.log(attrival)

const setat = para.setAttribute("id" , "Yash-Ingale") // setattribute is used to set a new attribute it there is no such attribute which we need to set or other wise it will replace the value of attribute 
console.log(setat);


let newhed = document.createElement('p')
newhed.innerText = "adding heading using append prepand befor and after";

let divv = document.querySelector("div");
console.log(divv);
divv.append(newhed.innerText = "append")
divv.prepend(newhed.innerText = "prepend")
divv.after(newhed.innerText = "after")
divv.before(newhed.innerText = "before");

let remove = document.querySelector("#toremove");
console.dir(remove.innerText);

remove.remove();


const addchild = document.querySelector("#parent");
// console.log(addchild.innerText);
const createC = document.createElement("p")
createC.textContent = "This is a last child";

addchild.appendChild(createC);
console.log(addchild.innerText)

const parentdiv = document.getElementById("parent");
// console.log(parentdiv.innerText)
const toremove = document.getElementById("child3");
// console.log(toremove.innerText)

parentdiv.removeChild(toremove)