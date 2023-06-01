import React, { Fragment, useState } from "react";
import Button from "./Button";
import './style.css';

let CrikcetScoreBoard = () =>{


  const[balls, setBalls] = useState(12);
  const[score, setScore] = useState(0);

  return (
    <Fragment>
    <h1>Two Over Cricket Match</h1>
    {
      balls === 0 ? 
     
      <h1>Over Completed</h1>
      :
    <section>
          
    <Button value={"dot"} score={score}  setScore={setScore} balls={balls} setBalls={setBalls}/>
    <Button value={1}     score={score}  setScore={setScore} balls={balls} setBalls={setBalls}/>
    <Button value={2}     score={score}  setScore={setScore} balls={balls} setBalls={setBalls}/>
    <Button value={3}     score={score}  setScore={setScore} balls={balls} setBalls={setBalls}/>
    <Button value={4}     score={score}  setScore={setScore} balls={balls} setBalls={setBalls}/>
    <Button value={5}     score={score}  setScore={setScore} balls={balls} setBalls={setBalls}/>
    <Button value={6}     score={score}  setScore={setScore} balls={balls} setBalls={setBalls}/>
    <Button value={"WB"}  score={score}  setScore={setScore} balls={balls} setBalls={setBalls}/>
    <Button value={"NB"}  score={score}  setScore={setScore} balls={balls} setBalls={setBalls}/>
    <Button value={"Out"} score={score}  setScore={setScore} balls={balls} setBalls={setBalls}/>

    </section>
    }


    <h5>Runs: {score} out of {balls}</h5>

    <button
      onClick={() => {
      setBalls(12); 
      setScore(0)
    }}>Reset</button>


    </Fragment>
  )

}

export default CrikcetScoreBoard;
