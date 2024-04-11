import { useState } from "react"

function Heading(){

    const [score, setScore] = useState(11);
    // let score = 12;
    const onePlus = () => {
        // score = score + 1;
        setScore(score+1);
        console.table(["inner : ", score]);
    }

    console.table(["outer : ", score]);
    return (
        <div className="heading">
            <h1>React Article {score}</h1>
            <p>Pillar of Modern Frontend</p>
            <button onClick={onePlus}>OnePlus</button>
        </div>
    )
    
}

export default Heading