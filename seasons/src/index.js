import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import { useState, useEffect } from 'react';

const App = (props) => {
  const [lat, setLat] = useState();
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => setLat(position.coords.latitude),
      (err) => setErrorMessage(err)
    )},
    []
  )

  const renderContent = () => {
    if (errorMessage && !lat) {
      return <div>Error: {errorMessage}</div>;
    }

    if (!errorMessage && lat) {
      return <SeasonDisplay lat={lat} />;
    }

    return <Spinner message="Please accept location request" />;
  };

  return <div className="border red">{renderContent()}</div>;
}

ReactDOM.render(<App />, document.querySelector('#root'));
