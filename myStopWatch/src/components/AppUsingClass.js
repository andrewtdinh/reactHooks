import React from 'react';

class App extends React.Component {
  state = {
    time: 0,
    running: false,
  };

  interval;

  render() {
    return (
      <div>
        <div>
          <button onClick={() => {
              if (!this.state.running) {
                this.interval = setInterval(() => this.setState({
                  running: true,
                  time: this.state.time + 1,
                }), 1000)
              } else {
                clearInterval(this.interval);
                this.setState({ running: false })
              }
            }}
          >
            {this.state.running ? 'Stop' : 'Start'}
          </button>
          <button onClick={() => this.setState({ time: 0 })}>Reset Time</button>
        </div>
        {this.state.time}
      </div>
    )
  }
}

export default App;