import React, { useState } from "react";
import CalculatorUseReducer from "./CalculatorUseReducer";
import CalculatorUseState from "./CalculatorUseState";
import "./Calculator.css";

export default function Calculators() {
  const [showBasicCalc, setShowBasicCalc] = useState(false);

  const handleCalculatorChange = () => {
    setShowBasicCalc((i) => !i);
  };

  return (
    <div>
      <div className="calculators-container">
        {!showBasicCalc ? (
          <CalculatorUseReducer />
        ) : (
          <div className="calculators">
            <CalculatorUseState />
            <CalculatorUseReducer
              className={`${showBasicCalc ? "move-right" : ""}`}
            />{" "}
          </div>
        )}
      </div>
      <hr />
      <button className="calculator-toggle" onClick={handleCalculatorChange}>
        Click to change the calculator
      </button>
    </div>
  );
}
