import React,{useState} from "react";
function Screen() {
    const [clicked, setClicked] = useState("no");
    const [rules, setRules] = useState("no");
    const [selectedNumber, setSelectedNumber] = useState(0);
    const [score, setScore] = useState(0);
    const [diceValue, setDiceValue] = useState(1);
    function CalScore() {
        const dice = Math.floor(Math.random() * 6) + 1;
        setDiceValue(dice);
        if (selectedNumber === 0) {
            alert("Please select any number");
            return;
        }
        if (dice === selectedNumber) {
            setScore(score + dice);
        } else {
            setScore(score - 2);
        }
    }
    function Click() {
     setClicked("Yes");
    } 
    function Rules(props){
        setRules(props);
    }
    return (
        (clicked==="no")?
      <div className="Screen">
          <div className="Dices">
          < img src='/image/dices 1.png' alt="Dice" />
          </div>   
       <div className="Heading">   
              <h1>DICE GAME</h1>
              <button onClick={Click}>Play Now</button>   
     </div>
      </div>
            :
            
           (rules === "no")? <div>
                <div className="score-select">
                    <div className="score">
                        <h1>{score}</h1>
                    <p>Total Score</p> </div>
                    <div className="boxes">
                 <div className="select-box" > 
                    <button onClick={() =>setSelectedNumber(1)} className={selectedNumber === 1 ? "selected" : ""}>1</button>
                    <button onClick={() =>setSelectedNumber(2)} className={selectedNumber === 2 ? "selected" : ""}>2</button>
                    <button onClick={() =>setSelectedNumber(3)} className={selectedNumber === 3 ? "selected" : ""}>3</button>
                    <button onClick={() =>setSelectedNumber(4)} className={selectedNumber === 4 ? "selected" : ""}>4</button>
                    <button onClick={() =>setSelectedNumber(5)} className={selectedNumber === 5 ? "selected" : ""}>5</button>
                    <button onClick={() =>setSelectedNumber(6)} className={selectedNumber === 6 ? "selected" : ""}>6</button>
                </div>
                     <p>Select Number</p>   
                </div>
                </div> 
                
                <div className="dice">
                    <button className='dice-button' onClick={() => CalScore()}>
                        <img src={`/image/dice-${diceValue}.png`} alt="Cubes" height="250px" width="250px" /></button>
                    <p>Click on Dice to roll</p>
                    <button className='btn3' onClick={() => {
                        setScore(0);
                        setDiceValue(1);
                    }
                    }>Reset Score</button>
                    <button className='btn4' onClick={ () => Rules( "yes")}>Show Rules</button>
                </div>
            </div>
                :
                <div className='score-select'>
                <div className="rule">
                        <h2>How to play dice game</h2>
                        <ul>
                    <li>Select any number</li>
                    <li>Click on dice image</li>
                    <li>after click on dice if selected number is equal to ice number you will get same point as dice</li>
                    <li>if you get wrong guess then 2 point will be dedcuted</li> </ul>
                    <button className='btn-4' onClick={() => Rules("no")}>Go Back</button>
                </div>
            </div>
  );
}

export default Screen;