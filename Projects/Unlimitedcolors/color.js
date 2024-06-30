const randomcolor = function () {
    const hax = '0123456789ABCDEF';
    let color = "#";

    for ( let i = 0; i < 6 ; i++) {
        color += hax[Math.floor(Math.random()*16)]
    }
    return color;
}
let intervalId
const startchangecolor = function () {
   if (!intervalId) {
    intervalId = setInterval(changestart, 1000);
   }
    function changestart () {
        document.body.style.backgroundColor = randomcolor();
    } 
}

const stopchangecolor = function () {
    clearInterval(intervalId);
    intervalId = null;
}

document.querySelector("#start").addEventListener('click', startchangecolor)

document.querySelector("#stop").addEventListener('click', stopchangecolor)
