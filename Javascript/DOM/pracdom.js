const newbtn = document.createElement("button");
document.querySelector("body").prepend(newbtn);
newbtn.innerText = "Click Me"
newbtn.style.backgroundColor = "red";
newbtn.style.color = "white";
newbtn.style.border = "none";

////

let appendstyle = document.querySelector("p");
console.log(appendstyle.innerText)
appendstyle.classList.add("new-class");