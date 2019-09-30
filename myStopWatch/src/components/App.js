import React, { useState } from 'react';


const App = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [interval, setIntervalState] = useState();

  return (
    <div>
      <div>
        <button 
          onClick={() => {
            if (!running) {
              if (interval) {
                clearInterval(interval);
                const currentInterval = setInterval(() => {
                  const currentTime = parseInt(document.querySelector("#time-display").innerHTML);
                  setTime(currentTime + 1);
                }, 1000);
                setIntervalState(currentInterval);
              } else {
                const currentInterval = setInterval(() => {
                  const currentTime = parseInt(document.querySelector("#time-display").innerHTML);
                  setTime(currentTime + 1);
                }, 1000);
                setIntervalState(currentInterval);
              }
            } else {
              clearInterval(interval);
            }
            setRunning(!running);
          }}
        >
          {running ? 'Stop' : 'Start'}
        </button>
        <button onClick={() => setTime(0)}>Reset Time</button>
      </div>
      <div id="time-display">
        {time}
      </div>
    </div>
  )
}

export default App;