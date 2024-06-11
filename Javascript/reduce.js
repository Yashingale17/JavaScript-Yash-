let nums = [ 1,2,3];

//  const total = nums.reduce( function (acc , currval) {
//     console.log(`acc : ${acc} and currval: ${ currval}`)
//     return acc + currval 
// },0)

// console.log(total);

let total = nums.reduce((acc , currval )=> acc + currval ,0);

console.log(total);

let cource = [
    {
        cource1 : 'Js',
        price : 1999
    },
    {
        cource1 : 'Ds',
        price : 3999
    },
    {
        cource1 : 'py',
        price : 2999
    },
    {
        cource1 : 'ML',
        price : 1199
    },
]

let courcetotal = cource.reduce ( (acc , item) => acc + item.price, 0);
console.log(courcetotal)