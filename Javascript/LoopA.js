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


// let languages = [ "Java" , "py",  "Javasc", "cpp",]

// const langgg = languages.forEach( (item) => {
//     console.log(item)
// })

// console.log(langgg)

// const nums = [ 1,2,3,4,5,6,7,8,9,10]

// let nummms = nums.filter( (numms) => { // here we have to use return keyword to return the value other wise it will return the empth array or objext.
//    return  numms >= 5
// })

// const newNums = []

// nums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);

// console.log(newNums)



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   let bookf = books.filter( (bk) => bk.genre === 'Science');

  let bookf = books.filter( (bk) => { return bk.publish >= 1990 && bk.edition > 2000})

  console.log(bookf);