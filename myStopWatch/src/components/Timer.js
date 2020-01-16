import React, { useState, useRef } from "react";
import "./styles.css";

export default function Timer() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [interval, setIntervalState] = useState();
  const timeRef = useRef();

  const handleReset = () => {
    setTime(0);
  };

  const startStop = () => {
    if (!running) {
      if (interval) {
        clearInterval(interval);
      }
      const newInterval = setInterval(() => {
        let currentCount = timeRef.current
          ? parseInt(timeRef.current.innerHTML)
          : 0;
        setTime(currentCount + 1);
      }, 1000);
      setIntervalState(newInterval);
    } else {
      clearInterval(interval);
    }
    setRunning(!running);
  };

  return (
    <div className="App">
      <h1 ref={timeRef}>{time}</h1>
      <div>
        <button className="start-button" onClick={startStop}>
          {running ? "Stop" : "Start"}
        </button>
        <button className="reset-button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}
