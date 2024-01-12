let yourChoice = 0;
let compChoice = 0;
const choices = document.querySelectorAll(".choices");
let msg = document.querySelector("#msgp");
let yourScore = document.querySelector(".your-score");
yourScore.innerHTML = "0";
const showMessage = (youWin)=>{
    if (youWin) {
        msg.innerHTML = "you win the Game";
        yourScore.innerHTML = yourScore.innerHTML + "1";
    } else {
        msg.innerHTML = "You lost the game";
    }
}
const playGame = ()=>{
    let youWin = true;
    if (yourChoice === compChoice) {
        msg.innerHTML = "Game is Draw";
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