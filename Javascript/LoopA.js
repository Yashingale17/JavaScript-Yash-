// for of 

let myarr = [1, 2, 3, 4, 5, 6];

for (const myarr1 of myarr) {
    console.log(myarr1);
}


let arr = ["IronMan", "SpiderMan", "Thor"];

for (const arr2 of arr) {
    console.log(arr2)
};

let str = "Hello World"

for (const str2 of str) {
    console.log(str2)
}

const map = new Map()
map.set('name', "Yash ")
map.set('name2', "sahil")
map.set('name3', "Ingale")

// console.log(map)

for (const [key, value] of map) {
    console.log(key, ":-", value)
}


let newww = [2, 3, 4, 5, 6, 7, 8];
newww.forEach((item, index, array) => {
    console.log(item, index, array)
})

let ooj11 = [
    {
    langname: "JavaScript",
    langshort: "Js"
},
{
    langname: "Java",
    langshort: "J"
},
{
    langname: "Python",
    langshort: "py"
},
]

ooj11.forEach( (item) => {
    console.log(item.langname);
})

// const myCoding = [
//     {
//         languageName: "javascript",
//         languageFileName: "js"
//     },
//     {
//         languageName: "java",
//         languageFileName: "java"
//     },
//     {
//         languageName: "python",
//         languageFileName: "py"
//     },
// ]

// myCoding.forEach( (item) => {
    
//     console.log(item.languageName);
// } )

