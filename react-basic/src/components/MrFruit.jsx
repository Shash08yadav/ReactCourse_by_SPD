import React from 'react'

const MrFruit = () => {
    const fruits = ["apple", "mango", "strawberry", "banana", "apicot", "peach", "kiwi", "chikoo", "dragon", "pomo", "avacardo", "coconut", "orange"]
   let text=""
    for(let i=0;i<fruits.length;i++){
        text += fruits[i] + ", "
    }
    

  return (
    <div>

        MrFruit list
        <br />
        <ul>
       
       {text}
       {fruits.map((item, index)=>{
         return <li key={item}>{item}</li>
       })}

        </ul>

    </div>
  )
}

export default MrFruit