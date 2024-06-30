let boxes = document.querySelectorAll("#box");
let reset = document.querySelector(".reset-btn");
let newgame = document.querySelector(".new-game-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector(".win-msg");


let turnO = true;

let winpatern = [
  [0, 1, 2],
  [3, 4, 5],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [6, 7, 8],
  [2, 4, 6],
  [3, 5, 8]
];

let resetgame = () => {
  turnO = true;
  enable();
  msgcontainer.classList.add("hide");
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerHTML = "O";
      turnO = false;
    } else {
      box.innerHTML = "X";
      turnO = true;
    }
    box.disabled = true;
    checkwinner();
  });
});

let showWinner = (Winner) => {
  msg.innerHTML = `Congress ${Winner} wins`
  msgcontainer.classList.remove("hide");
  disable();
}

const gamedraw = (draw) => {
  msg.innerText = "Game Draw";
  msgcontainer.classList.remove("hide");
  disable();
}


const checkwinner = () => {
  for (let pattern of winpatern) {
    let par1val = boxes[pattern[0]].innerText
    let par2val = boxes[pattern[1]].innerText
    let par3val = boxes[pattern[2]].innerText

    if (par1val != "" && par2val != "" && par3val != "") {
      if (par1val === par2val && par2val === par3val) {
        showWinner(par1val);
      }
    }
  }
};
const disable = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
}

const enable = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
}

reset.addEventListener("click", resetgame);
newgame.addEventListener("click", resetgame); 
