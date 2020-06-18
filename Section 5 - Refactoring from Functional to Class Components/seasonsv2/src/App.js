import React from 'react';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      latitude: null,
      errorMessage: null
    };

    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ latitude: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }
  

  render() {
    if (this.state.errorMessage && !this.state.latitude) {
      return (
        <div className="ui container">
        <div className="ui raised segment">
          <a id="ribbon" className="ui blue ribbon label" href='/#'>Section 5 - Refactoring from Functional to Class Components</a>
          <h4 className="ui red header">{this.state.errorMessage}</h4>
        </div>
      </div>
      )
    } else if (!this.state.errorMessage && this.state.latitude) {
      return (
        <div className="ui container">
        <div className="ui raised segment">
          <a id="ribbon" className="ui blue ribbon label" href='/#'>Section 5 - Refactoring from Functional to Class Components</a>
          <h1>Latitude: {this.state.latitude}</h1>
        </div>
      </div>
      )
    }
    return (
      <div className="ui container">
        <div className="ui raised segment">
          <a id="ribbon" className="ui blue ribbon label" href='/#'>Section 5 - Refactoring from Functional to Class Components</a>
          <div class="ui active centered inline loader"></div>
        </div>
      </div>
    )
  }
}

export default App;
