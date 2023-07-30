import React, { useState } from "react";

const Counter = ({handleColorUpdate}) => {
  const [counter, setCounter] = useState(0);

  const handleOnClick = () => {
    setCounter(counter + 1);
    if (counter === 10) {
      setCounter(0);
    }
  };

  const handleOnBottomClick = () => {
    setCounter(counter - 1);
  };

  const handleColorChange = () => {
    let randomColor = getRandomColor()
    handleColorUpdate(randomColor);
  }

  const getRandomColor = () => { 
    const letters = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color;
}
  
  return (
    <div className="counter">
      <button onClick={handleOnClick}>Click to increment</button>
      <p>Click Counter {counter}</p>
      <button onClick={handleOnBottomClick} disabled={counter===0}>Click to decrement</button>


      <div className="colorChange">
      <br/>
      <hr/>
        <button onClick={handleColorChange}>Update Color</button>
      </div>
    </div>
  );
};

export default Counter;
