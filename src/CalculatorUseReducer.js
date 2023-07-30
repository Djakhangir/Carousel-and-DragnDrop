import React, { useReducer } from "react";
import "./Calculator.css";

// calculator with useReducer

const initialState = {
  input: "",
  result: "",
};

const CalculatorReducer = (state, action) => {
  switch (action.type) {
    case "SET_INPUT":
      return { ...state, input: action.payload }
      break;
    case "SET_RESULT":
      return { ...state, result: action.payload }
      break;
    case "CLEAR":
      return initialState;
      break;

    default:
      return state;
  }
}

  const CalculatorUseReducer = () => {
    const [state, dispatch] = useReducer(CalculatorReducer, initialState);

  const handleInputChange = (event) => {
    dispatch({type:"SET_INPUT", payload: event.target.value})
  };

  const handleCalculate = () => {
    try{
      dispatch({type:"SET_RESULT", payload: eval(state.input).toString()})
    } catch(error) {
      dispatch({type:"SET_RESULT", payload: error.message});
    }
    
  };

  const handleClear = () => {
    dispatch({type: "CLEAR"})
  };



  return (
    <div className="calculator-advance">
      <div >
        <h2 className="title">Calculator with useReducer()</h2>
        </div>
        <input
          type="text"
          className="calculator-input"
          value={state.input}
          onChange={handleInputChange}
          placeholder="0"
        />
        <br/>
        <div className="result">{state.result}</div>
        <br />
      <div className="calculator-buttons">
        <button type="button" className="number-button" onClick={()=>handleInputChange({ target: { value: state.input + "1" } })} >1</button>
        <button type="button" className="number-button" onClick={()=>handleInputChange({ target: { value: state.input + "2" } })} >2</button>
        <button type="button" className="number-button" onClick={()=>handleInputChange({ target: { value: state.input + "3" } })} >3</button>

        <button type="button" className="number-button" onClick={()=>handleInputChange({ target: { value: state.input + "4" } })} >4</button>
        <button type="button" className="number-button" onClick={()=>handleInputChange({ target: { value: state.input + "5" } })} >5</button>
        <button type="button" className="number-button" onClick={()=>handleInputChange({ target: { value: state.input + "6" } })} >6</button>

        <button type="button" className="number-button" onClick={()=>handleInputChange({ target: { value: state.input + "7" } })} >7</button>
        <button type="button" className="number-button" onClick={()=>handleInputChange({ target: { value: state.input + "8" } })} >8</button>
        <button type="button" className="number-button" onClick={()=>handleInputChange({ target: { value: state.input + "9" } })} >9</button>

        <button type="button" className="number-button" onClick={()=>handleInputChange({ target: { value: state.input + "0" } })} >0</button>
        <button type="button" className="number-button" onClick={()=>handleInputChange({ target: { value: state.input + "." } })} >.</button>

        <button type="button" className="operator-button" onClick={()=>handleInputChange({ target: { value: state.input + "+" } })} >+</button>
        <button type="button" className="operator-button" onClick={()=>handleInputChange({ target: { value: state.input + "-" } })} >-</button>
        <button type="button" className="operator-button" onClick={()=>handleInputChange({ target: { value: state.input + "*" } })}>&times;</button>
        <button type="button" className="operator-button" onClick={()=>handleInputChange({ target: { value: state.input + "/" } })} >&divide;</button>
        <button type="button" className="clear-button" onClick={handleClear} >C</button>
        <button className="equal-button" onClick={handleCalculate}>=</button>
      </div>
      <br/>
      </div>
  );
};

export default CalculatorUseReducer;
