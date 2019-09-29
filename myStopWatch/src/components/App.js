import React, { useState } from 'react';


const App = () => {
  let interval;
  let [time, setTime] = useState(0);
  let [running, setRunning] = useState(false);
  
  const handleStartStop = () => {
    if (!running) {
      interval = setInterval(() => setTime(time + 1), 1000);
    } else {
      if (interval) {
        clearInterval(interval);
      }
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
      {time}
    </div>
  )
}

export default App;