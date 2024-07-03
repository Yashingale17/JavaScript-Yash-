const promiseOne = new Promise(function (resolve , reject) {
    setTimeout(function () {
        console.log("created first promice");
    resolve();
    },1000)
});

promiseOne.then(function () {
    console.log("resolved")
})


new Promise (function (resolve , reject) {
    setTimeout(function () {
        console.log("created second promice");
    resolve();
    },1000)
}).then(function () {
    console.log("resolved second")
})


const promiseThree = new Promise(function (resolve , reject) {
    setTimeout(function () {
        resolve( {
            name : "Yadh" , surename : "Ingale"
        })
    },1000)
}) 

promiseThree.then( (user) => {
    console.log(user)
})


const promiseFour = new Promise( (resolve , reject) => {
    setTimeout(() => {
        let error = false
       if (!error) {
        resolve({
            username : "YashIngale" , password: "123"
        })
       } else {
        reject ("Error : Something went wrong")
       }
    }, 1000);
})

promiseFour.then(function (userdata) {
    console.log(userdata)
    return userdata.username // this is called chaining and using this we can get a inside values as we get username from the userdata here
}).then(function (username) {
    console.log(username)
}).catch( (error) => {
    console.log(error)
})


const promiseFive = new Promise((resolve , reject) => {
    setTimeout( () => {
        let error = true;
        if (!error) {
            resolve( {
                 username : "Sahil" , password: "123"
            })
        } else {
            reject("Error : Something went wrong")
        }
    },1000)
})

promiseFive.then( function (users) {
    console.log(users)
}).catch( (err) => {
    console.log(err) 
}).finally(function () {
    console.log ("resolved or rejected")
})


const promiseSix = new Promise((resolve , reject) => {
    setTimeout( () => {
        let error = true;
        if (!error) {
            resolve( {
                 username : "Sahil" , password: "123"
            })
        } else {
            reject("Error : Something went wrong")
        }
    },1000)
})

async function newfun () {
    try {
        const funawait = await promiseSix
        console.log(funawait)
    } catch (error) {
        console.log(error)
    }
}

newfun();











// const featch = function () {
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//             console.log("featched1");
//             resolve("Success")
//         },4000)
//     })
// };
// const featch2 = function () {
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//             console.log("featched2");
//             resolve("Success")
//         },4000)
//     })
// };

// console.log("fraching...")
// featch().then((res) => {
//     featch2().then((res) => {
//     })
// })



const featch = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("featched1");
            resolve("Success")
        }, 2000)
    })
};

(async function () {
    console.log("featching....")
    await featch(1)
    console.log("featching....2")
    await featch(2)
    console.log("featching....3")
    await featch(3)
    console.log("featching....4")
    await featch(4)
    console.log("featching....5")
    await featch(5)
    console.log("featching....6")
    await featch(6)
})();
