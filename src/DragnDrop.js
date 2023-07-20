import React, { useState } from "react";

export const DragnDrop = () => {
  const [dragged, setDragged] = useState();
  let droppedItem = "";

  const handleDragStart = (event, i) => {
    setDragged(i);
    event.dataTransfer.setData("text/plain", i);
  };

  const handleDragging = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    droppedItem = event.dataTransfer.getData("text/plain");
    console.log(droppedItem," dropped")
    setDragged();
  };

  return (
    <div>
      <div onDragOver={handleDragging} onDrop={handleDrop} style={{width:'300px', height:'300px', border: '1px solid #ccc'}}>
        {droppedItem ? (
          <p>Item is being dragged: {droppedItem}</p>
        ) : (
          <p>Drop Here</p>
        )}
      </div>
      <div draggable onDragStart={(event) => handleDragStart(event, "Item 1")}>
        Item 1
      </div>
      <div draggable onDragStart={(event) => handleDragStart(event, "Item2")}>
        Item2
      </div>
    </div>
  );
};

// export default DragnDrop;