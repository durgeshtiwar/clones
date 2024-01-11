let yourChoice = 0;
let compChoice = 0;
const choices = document.querySelectorAll(".choices");
const choiceOFComputer = ()=>{
    let options = ["Rock","Pepper","Sezer"];
    let position = Math.floor(Math.random()*3);
    compChoice = options[position];
    console.log("Computer Choice",compChoice);
}
choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        console.log("Box was clicked");
        yourChoice = choice.getAttribute("id");
        console.log("Your Choice",yourChoice);
        choiceOFComputer();
    })
});