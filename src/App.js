import React, { useState, useEffect } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import InputContainer from "./components/Input/InputContainer";
import * as math from "mathjs";

function App() {
  const [tempInp, setTempInp] = useState("0");
  const [finalInp, setFinalInp] = useState("0");
  const [opsActive, setOpsActive] = useState(true);
  const [equalStatus, setEqualStatus] = useState(false);

  const finalReset = () => {
    setTempInp("0");
    setFinalInp("0");
    setOpsActive(false);
  };

  const tempReset = () => {
    const tempLength = tempInp.split("").length;
    console.log(tempLength);
    const finalClone = [...finalInp];
    for (let i = 1; i <= tempLength; i++) {
      finalClone.pop();
    }
    setTempInp("0");
    setFinalInp(finalClone.join(""));
    setOpsActive(true);
  };

  const backspace = () => {
    //   const charsForOps = finalInp.split("");
    //   const charsForBack = tempInp.split("")
    // if(charsForBack.length>=2){
    //     charsForOps.pop();
    //     setFinalInp(charsForOps.join(''))
    //     charsForBack.pop();
    //     setTempInp(charsForBack.join(''))}
    //     else if(charsForBack !== '0'){
    //     }
  };

  const handleClick = (value) => {
    if (value === "*" || value === "/" || value === "+" || value === "-") {
      if (opsActive === false) {
        setFinalInp((prevState) => prevState + value);
        setTempInp("0");
        setOpsActive(true);
      } else {
        const charsForOps = finalInp.split("");

        const charsClone = [...charsForOps];
        const lastChar = charsClone.pop();

        if (
          lastChar === "*" ||
          lastChar === "/" ||
          lastChar === "+" ||
          lastChar === "-"
        ) {
          const joinedChars = charsClone.join("");
          const newFinalInput = joinedChars + value;
          setFinalInp(newFinalInput);
        }
      }
    } else if (value === "=") {
      const cloneFinalInp = [...finalInp];
      const x = cloneFinalInp.pop();
      if (x === "-" || x === "+" || x === "/" || x === "*") {
        console.log(x);
        var equal = math.evaluate(cloneFinalInp.join(""));
      } else {
        var equal = math.evaluate(finalInp);
      }
      setTempInp(equal);
      setEqualStatus(true);
    } else {
      if (tempInp === "0" || equal === true) {
        setTempInp("");
      }
      if (finalInp === "0") {
        setFinalInp("");
      }
      setTempInp((prevState) => prevState + value);
      setFinalInp((prevState) => prevState + value);
      setOpsActive(false);
      setEqualStatus(false);
    }
    setEqualStatus(true);
  };

const handleKeyboard = (event) => {
  console.log(event.charCode)
}

  return (
    <div className="cal-container" onKeyPress={(event) => handleKeyboard(event)}>
      <p style={{ textAlign: "center" }}>Double click on results to reset</p>
      <InputContainer
        final={finalInp}
        temp={tempInp}
        tempReset={tempReset}
        finalReset={finalReset}
        backspace={backspace}
      />
      <div className="row">
        <Button handleClick={handleClick}>7</Button>
        <Button handleClick={handleClick}>8</Button>
        <Button handleClick={handleClick}>9</Button>
        <Button handleClick={handleClick}>*</Button>
      </div>
      <div className="row">
        <Button handleClick={handleClick}>4</Button>
        <Button handleClick={handleClick}>5</Button>
        <Button handleClick={handleClick}>6</Button>
        <Button handleClick={handleClick}>/</Button>
      </div>
      <div className="row">
        <Button handleClick={handleClick}>1</Button>
        <Button handleClick={handleClick}>2</Button>
        <Button handleClick={handleClick}>3</Button>
        <Button handleClick={handleClick}>+</Button>
      </div>
      <div className="row">
        <Button handleClick={handleClick}>.</Button>
        <Button handleClick={handleClick}>0</Button>
        <Button handleClick={handleClick}>=</Button>
        <Button handleClick={handleClick}>-</Button>
      </div>
    </div>
  );
}

export default App;
