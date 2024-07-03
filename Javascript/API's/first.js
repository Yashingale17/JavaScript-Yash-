const url = "https://api.github.com/users/Yashingale17"
const addin = document.querySelector(".Addjson") 
const btn1 = document.querySelector(".btn")

// const getapi = async () => {
//     const response = await fetch(url)
//     let data = await response.json()
//     console.log(data)
//     addin.innerText = data.login
// }


const pro = () => {
    fetch(url).then ((response) => {
        return response.json()
    }).then ((data) => {
        console.log(data)
    })
}

btn1.addEventListener("click" , pro);
