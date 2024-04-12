import React, { useEffect, useState } from 'react'

const Writer = () => {
    const [flag, setFlag] = useState(true);
    const author = "Shashwat";
    const novelist = "Shwet Prakash";
    const [bgcolor, setBgcolor] = useState("green");
    const [score, setScore] = useState(1);

    useEffect(()=>{
        changeBg()
    }, [score])

    const changeBg = () => {
        
        if(score%2 == 0)
            setBgcolor("red")
        else if(score%3 == 0)
            setBgcolor("blue")
        else if(score%5 == 0)
            setBgcolor("pink")
        else
            setBgcolor("green")

    }

  return (
    <>
    <div style={{backgroundColor: bgcolor}}>Writer of this article {score}: 
    {
        flag ? novelist : author
    }
    </div>
    <button onClick={()=> setScore((prevScore)=> prevScore+1)}>touch me</button>
    </>
  )
}

export default Writer