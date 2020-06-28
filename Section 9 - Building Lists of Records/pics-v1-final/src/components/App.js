import React from 'react';

import SearchBar from './SearchBar';
import './App.css'
import unsplash from '../api/unsplash'
import ImageList from './ImageList';

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
          <a id="ribbon" className="ui blue ribbon label" href='/#'>Section 9 - Building Lists of Records</a>
          <SearchBar onSubmit={this.onSearchSubmit} />
          Found: {this.state.images.length}
        </div>
        <ImageList images={this.state.images} message="Greetingss, what would you like to see?"/>
      </div>
    )
  }
}

export default App;
