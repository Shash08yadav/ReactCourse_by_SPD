/**
 * 1. selection/Creation : select or create elements / nodes from the dom tree
 * 2. manipulation : manipulate selected element
 * 3. Reflect :append the changes 
 */

// 1. Selection :
const value = document.getElementById("value");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");

let score = Number.parseInt(value.innerText);

// 2. Manipulation
plus.addEventListener('click', ()=>{
    score = score + 1;
    value.innerText=score;
    console.log(score);
})
minus.addEventListener('click', ()=>{
    score = score - 1;
    value.innerText=score; //3. Reflect
    console.log(score);
})


