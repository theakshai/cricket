import React, { Fragment, useState } from "react";
import './style.css'

let Button = ({value, score, setScore, balls, setBalls}) => {


  let updatingScore = (value) => {

    if(value === "WB" || value === "NB"){

        setScore(score+1);
        

    }
    else if(value === "Out" || value === "dot"){

      setBalls(balls - 1);
        

    }
    else{

       setScore(score+value);
      setBalls(balls - 1);

    }
  }

  return(

    <Fragment>
    {
      <button onClick={() => updatingScore(value)}>
    {value}
    </button>
    }

    </Fragment>
  )

}

export default Button;
