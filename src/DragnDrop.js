import React, { useState } from "react";
import Counter from "./Counter";
import Calculators from "./Calculators";


export const DragnDrop = () => {
  const [dragged, setDragged] = useState();
  const [dropped, setDropped] = useState(null);
  const [showCounter, setShowCounter] = useState(false);
  const [color, setColor] = useState('yellow')
  // let droppedItem = "";

  const handleDragStart = (event, i) => {
    setDragged(i);
    event.dataTransfer.setData("text/plain", i);
  };

  const handleDragging = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedItem = event.dataTransfer.getData("text/plain");
    console.log(droppedItem, " dropped");
    setDropped(droppedItem);
    // setDragged();
  };

  const handleOnClick = () => {
    setShowCounter((showCounter) => !showCounter);
  };

  const handleUpdate = (color) => {
    setColor(color)
    };

    const clearState = () => {
      setDragged('');
      setDropped('');
    }

  return (
    <div>
      <div
        onDragOver={handleDragging}
        onDrop={handleDrop}
        style={{
          color: "red",
          backgroundColor: color,
          fontSize: "20px",
          width: "300px",
          height: "300px",
          border: "1px solid #ccc",
        }}
        onClick={clearState}
      >
        {dragged ? (
          <p>Item is being dragged: {dragged}</p>
        ) : (
          <p>Drop Here</p> 
        )}
        {dropped ? <div>Item Dropped: {dropped}</div> : null}
      </div>
      <div draggable onDragStart={(event) => handleDragStart(event, "Item 1")}>
        Item 1
      </div>
      <div draggable onDragStart={(event) => handleDragStart(event, "Item2")}>
        Item2
      </div>
      <button onClick={handleOnClick}>Click Me to release simple counter</button>
      <hr />
      {showCounter && <Counter handleColorUpdate={handleUpdate} />}
      <hr/>
      
      <Calculators/>
      
    </div>
  );
};

// export default DragnDrop;
