let yourChoice = 0;
let compChoice = 0;
let yourScore = 0;
let comScore = 0;
const choices = document.querySelectorAll(".choices");
let msg = document.querySelector("#msgp");
let yourScorePara = document.querySelector(".your-score");
let comScorePara = document.querySelector(".com-score");
yourScore.innerHTML = 0;
const showMessage = (youWin)=>{
    if (youWin) {
        yourScore++;
        msg.innerHTML = "You win the Game";
        msg.style.backgroundColor = "green";
        yourScorePara.innerHTML = yourScore;
    } else {
        comScore++;
        msg.innerHTML = "You lost the game";
        msg.style.backgroundColor = "red";
        comScorePara.innerHTML = comScore;
    }
}
const playGame = ()=>{
    let youWin = true;
    if (yourChoice === compChoice) {
        msg.innerHTML = "Game is Draw, Play again";
        msg.style.backgroundColor = "black";
    }
    else{
        if(yourChoice === "Rock")
        {   
            //pepper,sezer
            youWin = compChoice === "Sezer" ? true:false;
        }
        else if (yourChoice === "Pepper") {
            youWin = compChoice === "Rock" ? true:false;            
        } else {
            youWin = compChoice === "Pepper" ? true:false;
        }
        showMessage(youWin);
    }
}
const choiceOFComputer = ()=>{
    let options = ["Rock","Pepper","Sezer"];
    let position = Math.floor(Math.random()*3);
    compChoice = options[position];
    console.log("Computer Choice",compChoice);
    playGame();
}
choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        console.log("Box was clicked");
        yourChoice = choice.getAttribute("id");
        console.log("Your Choice",yourChoice);
        choiceOFComputer();
    })
});