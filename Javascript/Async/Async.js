// Sync
console.log("Sync")
console.log("One")
console.log("2")
console.log("O3")

// Async

console.log("Async")
console.log("One")
console.log("2")
console.log("O3")

setTimeout( () => {
    console.log("4")
},2000);

console.log("5")
console.log("6")
console.log("7")

// callback 

function name (fullname) {
    console.log(fullname)
}

function callback (name , full) {
    full(name)
}

callback("Yash" ,name)


//callBack Hell

// Nested callback stacked after one another
