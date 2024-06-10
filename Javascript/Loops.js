
// for (let index = 0; index <= 10 ; index++) {
//     const element = index;
//     console.log(element)
// }


for (let i = 1; i <=10 ; i++) {
    console.log(`first element ${i}`);
    for (let j = 1 ; j <= 10 ; j++) {
        //console.log(`second element ${j} and first element ${i}`)
        console.log( i + "*" + j + "=" + i*j )
    }
}


let myarry = [ "Ironman" , "Spiderman" , "THor" , "Blackwidow" , "Doctorstarnge"];
for (let index = 0; index < myarry.length; index++) {
    const element = myarry[index];
    console.log(element)
}

for (let index = 1; index <= 20; index++) {
    if (index === 5) {
        console.log("detected 5")
       break
    }
    console.log(index);
}

for (let index = 1; index <= 20; index++) {
    if (index === 5) {
        console.log("detected 5")
       continue
    }
    console.log(index);
}


// let while1 = 0
// while (while1 <= 10) {
//     console.log(`score is ${while1}`)
//     while1 = while1 + 2 
// }


let dowhile1 = 11;
do {
    console.log(`Score is ${dowhile1}`)
    dowhile1++
} while (dowhile1 <= 10);