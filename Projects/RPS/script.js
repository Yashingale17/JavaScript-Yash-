let userScore = 0;
let comScore = 0;

let selectedchoice = document.querySelectorAll(".choice");
const msg = document.querySelector("#message");
const userSc = document.querySelector("#userScore");
const compsco = document.querySelector("#compScore");


const rancompChoice = () => {
    const options = [ "Rock" , "Paper" , "Scissor"];
    let rnidx = Math.floor(Math.random() * 3);
    return options[rnidx];
}

const Winner = (userWin , userChoice , compChoice) => {
    if (userWin) {
        userScore++;
        userSc.innerText = userScore;
        msg.innerText = ` You Win!!! comp chooses ${compChoice} you choose ${userChoice}`;
        msg.style.backgroundColor = "green";
    }else {
        comScore++;
        compsco.innerText = comScore;
           msg.innerText = `You Loose!!! comp choosers ${compChoice} you choose ${userChoice}`;
           msg.style.backgroundColor = "red";
    }
} 

const Playgame = (userChoice) => {
    console.log("User choice is" , userChoice)
    const compChoice = rancompChoice();
    console.log("computer choice is" , compChoice)

    if (userChoice === compChoice) {
        console.log("game draw");
           msg.innerText = "game draw , Play again"
           msg.style.backgroundColor = "black";
    }else {
        let userWin = true;
        if (userChoice === "Rock") {
            userWin = compChoice === "Paper" ? false : true;
        } else if (userChoice === "Paper") {
            userWin = compChoice === "Scissor" ? false : true;
        } else {
            userWin = compChoice === "Rock" ? false : true ;
        }
        Winner(userWin , userChoice , compChoice);
    }
}

selectedchoice.forEach((choice) => {
    choice.addEventListener('click' , () => {
        const userChoice = choice.getAttribute("id");
        Playgame(userChoice)
    })
})
