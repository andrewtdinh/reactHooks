import React, { useState } from 'react';


const App = () => {
  let interval;
  let [time, setTime] = useState(0);
  let [running, setRunning] = useState(false);

  const handleStartStop = (e) => {
    if (!running) {
      clearInterval(interval);
      interval = setInterval(() => {
        const currentTime = parseInt(document.querySelector('#time-display').innerHTML);
        setTime(currentTime + 1)
      }, 1000);
    } else {
      clearInterval(interval);
    }
    setRunning(!running);
  }

  return (
    <div>
      <div>
        <button onClick={handleStartStop}>
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