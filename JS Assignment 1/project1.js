let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset"); 
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
        console.log(pattern[0],pattern[1],pattern[2]);
        console.log(boxes[pattern[0]].innerHTML, boxes[pattern[1]], boxes[pattern[2]]);
    }
}