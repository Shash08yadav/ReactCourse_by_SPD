
const fruits = ["apple", "mango", "strawberry", "banana", "apicot", "peach", "kiwi", "chikoo", "dragon", "pomo", "avacardo", "coconut", "orange"]
// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i])
// }

// Higher Order function
const newArray = fruits.map((fal, index)=>{
    return fal+" : "+index
})

console.table(newArray);

const chloFruit = (para) => {
    return "chal gya fruit" + para;
}
console.log(chloFruit("lol hai tum"));


