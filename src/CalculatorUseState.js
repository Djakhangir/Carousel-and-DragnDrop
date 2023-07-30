import React, { useState } from "react";
import "./Calculator.css";

const CalculatorUseState = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value)
  };

  const handleCalculate = () => {
    try {
      //eval is deprecated due to sevurity risks. there is external library math.js that can be installed using npm. 
        setResult(eval(input).toString())
        console.log(result)
    } catch (error) {
        setResult('Error')
    }
  };

  const handleClear = () => {
    setInput("")
    setResult("")
  };

  return (
    <div className="basic-calculator">
      <div>
        <h2 className="title">Calculator with useState()</h2>
      </div>
      <input
        type="text"
        className="calculator-input"
        value={input}
        onChange={handleInputChange}
        placeholder="0"
      />
      <br />
      <div className="calculator-buttons">
        <button
          type="button"
          className="number-button"
          onClick={() =>
            handleInputChange({ target: { value: input + "1" } })
          }
        >
          1
        </button>
        <button
          type="button"
          className="number-button"
          onClick={() =>
            handleInputChange({ target: { value: input + "2" } })
          }
        >
          2
        </button>
        <button
          type="button"
          className="number-button"
          onClick={() =>
            handleInputChange({ target: { value: input + "3" } })
          }
        >
          3
        </button>

        <button
          type="button"
          className="number-button"
          onClick={() =>
            handleInputChange({ target: { value: input + "4" } })
          }
        >
          4
        </button>
        <button
          type="button"
          className="number-button"
          onClick={() =>
            handleInputChange({ target: { value: input + "5" } })
          }
        >
          5
        </button>
        <button
          type="button"
          className="number-button"
          onClick={() =>
            handleInputChange({ target: { value: input + "6" } })
          }
        >
          6
        </button>

        <button
          type="button"
          className="number-button"
          onClick={() =>
            handleInputChange({ target: { value: input + "7" } })
          }
        >
          7
        </button>
        <button
          type="button"
          className="number-button"
          onClick={() =>
            handleInputChange({ target: { value: input + "8" } })
          }
        >
          8
        </button>
        <button
          type="button"
          className="number-button"
          onClick={() =>
            handleInputChange({ target: { value: input + "9" } })
          }
        >
          9
        </button>

        <button
          type="button"
          className="number-button"
          onClick={() =>
            handleInputChange({ target: { value: input + "." } })
          }
        >
          .
        </button>
        <button
          type="button"
          className="number-button"
          onClick={() =>
            handleInputChange({ target: { value: input + "0" } })
          }
        >
          0
        </button>

        <button
          type="button"
          className="operator-button"
          onClick={() =>
            handleInputChange({ target: { value: input + "+" } })
          }
        >
          +
        </button>
        <button
          type="button"
          className="operator-button"
          onClick={() =>
            handleInputChange({ target: { value: input + "-" } })
          }
        >
          -
        </button>
        <button
          type="button"
          className="operator-button"
          onClick={() =>
            handleInputChange({ target: { value: input + "*" } })
          }
        >
          &times;
        </button>
        <button
          type="button"
          className="operator-button"
          onClick={() =>
            handleInputChange({ target: { value: input + "/" } })
          }
        >
          &divide;
        </button>
        <button type="button" className="clear-button" onClick={handleClear}>
          C
        </button>
        <button className="equal-button" onClick={handleCalculate}>
          =
        </button>
      </div>
      <br />
      <div className="result">{result}</div>
    </div>
  );
};

export default CalculatorUseState;
