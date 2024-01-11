let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset"); 
let msg = document.querySelector(".msg");
let true0 = true;
const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const showwinner = (winner)=> {
    msg.innerHTML = `Congratulations Winner is ${winner}`;
    Disabled();
}
const Disabled = ()=>{
    for (let box of boxes) {
        box.disabled = true; 
    }
}

boxes.forEach((box)=> {
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if (true0) {
            box.innerHTML = "0";
            true0 = false;
        } else {
            box.innerHTML = "x";
            true0 = true;
        }
        box.disabled = true;
        chekwinner();
    })
});

let chekwinner = ()=>{
    for(pattern of winpatterns){
        let pos1valu = boxes[pattern[0]].innerHTML;
        let pos2valu = boxes[pattern[1]].innerHTML;
        let pos3valu = boxes[pattern[2]].innerHTML;
        if (pos1valu != "" && pos2valu != "" && pos3valu != "") {
            if (pos1valu === pos2valu && pos2valu === pos3valu) {
                showwinner(pos1valu);
            }
        }
    }
}