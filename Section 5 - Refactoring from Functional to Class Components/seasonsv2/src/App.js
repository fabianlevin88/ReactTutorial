import React from 'react';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      latitude: null
    }

    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ latitude: position.coords.latitude }),
      error => console.log(error)
    );
  }

  render() {
    return (
      <div className="ui container">
        <div className="ui raised segment">
          <a id="ribbon" className="ui blue ribbon label" href='/#'>Section 5 - Refactoring from Functional to Class Components</a>
          <h1>Latitude: {this.state.latitude}</h1>
        </div>
      </div>
    );
  }
}

export default App;
