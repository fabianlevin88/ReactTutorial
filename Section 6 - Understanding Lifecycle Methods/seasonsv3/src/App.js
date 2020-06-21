import React from 'react';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {

  state = { latitude: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ latitude: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (!this.state.errorMessage && !this.state.latitude) {
      return <SeasonDisplay latitude={null} error={null} />
    } else if (this.state.errorMessage && !this.state.latitude) {
      return <SeasonDisplay latitude={null} error={this.state.errorMessage} />
    } else if (!this.state.errorMessage && this.state.latitude) {
      return <SeasonDisplay latitude={this.state.latitude} error={null}/>
    }
  }

  render() {
    return <div>{this.renderContent()}</div>
  }
}

export default App;
