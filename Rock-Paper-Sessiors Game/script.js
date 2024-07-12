let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg")

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice =()=>{
const options = ["rock", "paper", "scissor"];
const randIdex = Math.floor(Math.random()*3);
return options[randIdex];
}

const drawGame = ()=>{
    console.log("game was draw.");
    msg.innerText ="Game was draw.";
    msg.style.backgroundColor ="black";
}

const showWinner = (userwin) =>{
    if(userwin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You are win");
        msg.innerText ="You win!";
        msg.style.backgroundColor ="green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You are lose");
        msg.innerText ="You lose.";
        msg.style.backgroundColor ="red";
    }
}

const PlayGame = (userChoice)=>{
    console.log("user choice = ", userChoice);
    //computer choice
    const CompChoice = genCompChoice();
    console.log("comp choice =", CompChoice);

    if(userChoice == CompChoice){
        //Draw Game
        drawGame()
    } else {
        let userwin = true;
        if(userChoice === "rock"){
            //scissor, paper
            userwin = CompChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            //scissor, rok
            userwin = CompChoice === "scissors" ? false : true;
        } else {
            //rock, paper
            userwin = CompChoice === "rock" ? false : true;
        }
        showWinner(userwin)
    }   
}

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userChoice =choice.getAttribute("id");
        PlayGame(userChoice);
    })
})