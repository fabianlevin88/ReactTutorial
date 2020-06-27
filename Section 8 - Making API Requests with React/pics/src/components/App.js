import React from 'react';

import SearchBar from './SearchBar';
import './App.css'
import unsplash from '../api/unsplash'

class App extends React.Component {

  state = {
    images: []
  }

  onSearchSubmit = async term => {
    const response = await unsplash.get('/photos', {
        params: { query: term }
      });

    this.setState({ images: response.data.results })
  } 
  
  render() {
    return (
      <div className="square ui container">
        <div className="ui raised segment">
          <a id="ribbon" className="ui blue ribbon label" href='/#'>Section 8 - Making API Requests with React</a>
          <SearchBar onSubmit={this.onSearchSubmit} />
          Found: {this.state.images.length}
        </div>
      </div>
    )
  }
}

export default App;
