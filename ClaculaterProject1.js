import React, { useState } from "react";
import "./App.css";

function CalculatorProject1() {
  const buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/", "%"];
  const [expression, setExpression] = useState("");

  function operation() {
    try {
      setExpression(eval(expression).toString());
    } catch {
      setExpression("Error");
    }
  }

  return (
    <div className="calculator">
      <input type="text" value={expression} id="outputBox" readOnly />

      <div className="keypad">
        {buttons.map((btn) => (
          <button onClick={() => setExpression(expression + btn)}>{btn}</button>
        ))}
        <button id="result" onClick={operation}>=</button>
        <button id="remove" onClick={() => setExpression("")}>AC</button>
      </div>
    </div>
  );
}

export default CalculatorProject1;

/*
.calculator {
  width: 300px;
  margin: auto;
  text-align: center;
  padding: 20px;
  margin-top: 150px;
  background: rgb(114, 110, 110);
  border:solid 5px black;
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.2);
}

#outputBox {
  width: 90%;
  height: 50px;
  font-size: 24px;
  text-align: right;
  padding: 10px;
  border:solid 1px black;
  margin-bottom: 10px;
  color:black;
}

.keypad {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

button {
  width: 60px;
  height: 60px;
  font-size: 20px;
  border: solid 1px black;
  border-radius: 5px;
  cursor: pointer;
  color: black;

}



#result {
  background: #28a745;
}



#remove {
  background: #dc3545;
}


*/
