// let temperature = prompt("Enter any temperture");
// let far = (9*temperature)/5+32;
// console.log(temperature,"c is ",far," F");

// let str="icecream";
// console.log(str.slice(0,4));

// let name = prompt("Enter your name");
// let username = "@"+`${name}`+`${name.length}`;
// console.log(username); 

// let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// companies.shift();
// console.log(companies);
// companies.splice(1,1,"Ola");
// console.log(companies);
// companies.push("Amazon");
// console.log(companies);


// let marks = [90,84,92,82,98,74,95];
// let newArr = marks.filter((val)=>{
//     return (val>90);
// })
// console.log(newArr);

// let n = prompt("Enter the size of array");
// let newArr = [];
// let i = 1;
// for (let index = 0; index < n; index++) {
//     newArr[index] = i;
//     i++;
// }
// console.log(newArr);
// let sum = newArr.reduce((pre,post)=>{
//     return(pre+post);
// })
// console.log(sum);

let ele = document.querySelector("h2");
ele.innerText = ele.innerText + "From Apna Colleg Student!";

let divs = document.querySelectorAll(".box");
let i=1;
for (const div of divs) {
    div.innerText = `This is the ${i} box`;
    i++;
}

let ele2 = document.createElement("button");
ele2.innerText = "click me";
ele2.style.backgroundColor = "red";
ele2.style.color = "white";
document.body.prepend(ele2);

let para = document.querySelector("p");
para.classList.add("newclass");



