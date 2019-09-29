import React, { useState } from 'react';

const App = () => {
  // state = {
  //   time: 0,
  //   running: false,
  // };
  let [time, setTime] = useState(0);
  let [running, setRunning] = useState(false);
  let interval;

  return (
    <div>
      <div>
        <button onClick={() => {
            if (!running) {
              setRunning({ running: !running})
              interval = setInterval(() => setTime(time + 1), 1000);
            } else {
              setRunning({ running: !running})
              if (interval) {
                clearInterval(interval);
              }
            }
          }}
        >
          {running ? 'Stop' : 'Start'}
        </button>
        <button onClick={() => setTime(0)}>Reset Time</button>
      </div>
      {time}
    </div>
  )
}

export default App;