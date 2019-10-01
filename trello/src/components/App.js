import React from 'react';
import Column from './Column';

const App = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "row"
  }
  return (
    <div className="container" style={containerStyle}>
      <Column header="Winnie"/>
      <Column header="Bob"/>
      <Column header="Thomas"/>
      <Column header="WGnnie"/>
    </div>
  );
}

export default App;