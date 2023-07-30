import React, { useState, useEffect } from "react";
import "./Timer.css";

export const Timer = () => {
  //state management
  // const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  //timer deadline
  // const threshold = "December, 31, 2023";


//   ###TODO: add progress bar around; and edit-controls functionalities 
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        if (seconds < 59) {
          setSeconds((prevseconds) => prevseconds + 1);
        } else if (minutes < 59) {
          setSeconds(0);
          setMinutes((prevminutes) => prevminutes + 1);
        } else {
          setMinutes(0);
          setSeconds(0);
          setHours((prevHours) => prevHours + 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, seconds]);

  const handlePauseButton = () => {
    setIsRunning(false);
  };

  const handleStartButton = () => {
    setIsRunning(true);
  };

  const handleResetButton = () => {
    setIsRunning(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  const handleEditStartButton = () => {

  }

  const handleEditEndButton = () => {
    
  }

  return (
    <div className="timerWrapper">
      {/* <div>
            <h5 className='timer1'></h5>
            <h5 className='timer2'></h5>
            <h5 className='timer3'></h5>
            <h5 className='timer4'></h5>
            <h5 className='timer5'></h5>
            <h5 className='timer6'></h5>
            <h5 className='timer7'></h5>
            <h5 className='timer8'></h5>
            <h5 className='timer9'></h5>
            <h5 className='timer10'></h5>
            <h5 className='timer11'></h5>
            <h5 className='timer12'></h5>
            <hr className="minutes"/>
            <hr className="hours"/>
            <hr className="seconds"/>
        </div> */}
      {/* <div className="timer-container"> */}
        <h3 className="title">Timer</h3>
        <div className="timer">
          {hours.toString().padStart(2, "0") + ':'}
          {minutes.toString().padStart(2, "0")+ ':'}
          {seconds.toString().padStart(2, "0")}
        </div>

        <div className="timer-controls">
          {!isRunning ? (
            <button className="start" onClick={handleStartButton}>
              Start
            </button>
          ) : (
            <button className="pause" onClick={handlePauseButton}>
              Pause
            </button>
          )}
          <button className="reset" onClick={handleResetButton}>
            Reset
          </button>
          </div>

          <div className="edit-controls">
           <div className="start-controls">
            <p className="edit-title">Started</p>
            <div className="dateStarted">Today, 00:00</div>

          <button className="editStart" onClick={handleEditStartButton}>
            Edit Start
          </button>
          </div>
          <div className="end-controls">
          <p className="edit-title">Ended</p>
          <div className="dateEnded">Tomorrow, 00:00</div>
          <button className="editEnd" onClick={handleEditEndButton}>
          Edit End
          </button>
          </div>
          </div>
        
      
    </div>
  );
};
