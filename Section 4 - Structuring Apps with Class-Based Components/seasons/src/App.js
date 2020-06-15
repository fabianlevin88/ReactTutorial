import React from 'react';
import SeasonDisplay from './SeasonDisplay';
import './App.css';

function App() {

  window.navigator.geolocation.getCurrentPosition(
    position => console.log(position),
    error => console.log(error)
  );

  return (
    <div className="ui container">
      <div className="ui raised segment">
        <a id="ribbon" className="ui yellow ribbon label" href='/#'>Section 4 - Structuring Apps with Class-Based Components</a>
        <h1>IMPORTANT NOTE</h1>
        <SeasonDisplay />
      </div>
    </div>
  );
}

export default App;
