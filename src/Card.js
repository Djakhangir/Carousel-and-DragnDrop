import React, { useState } from "react";
import "./Card.css";
import {DragnDrop} from "./DragnDrop";

const Card = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const isFinished = current === slides.length -1;
  const prevHandler = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextHandler = () => {
    setCurrent(isFinished ? 0 : current + 1);
  };

  return (
    <div className="slider">
      <button className="prevbutton" onClick={prevHandler}>
        Prev
      </button>
      {!isFinished ? (
        <>
  {slides.map((slide, index) => (
    <div key={index}>
      {index === current && (
        <img className="imagesStyle" src={slide.image} alt="images" />
      )}
    </div>
  ))}</>
) : (
  <DragnDrop />
)}
      <button className="nextbutton" onClick={nextHandler}>
        Next
      </button>
    </div>
  );
};

export default Card;
