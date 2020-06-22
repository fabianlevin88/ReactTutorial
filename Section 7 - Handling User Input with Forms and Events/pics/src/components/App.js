import React from 'react';
import SearchBar from './SearchBar';
import './App.css'

class App extends React.Component {

  onSearchSubmit(term) {
    console.log(term)
  } 
  
  render() {
    return (
      <div className="square ui container">
        <div className="ui raised segment">
          <a id="ribbon" className="ui blue ribbon label" href='/#'>Section 7 - Handling User Input with Forms and Events</a>
          <SearchBar onSubmit={this.onSearchSubmit} />
        </div>
      </div>
    )
  }
}

export default App;
