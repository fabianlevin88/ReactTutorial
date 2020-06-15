import React from 'react';
import './App.css';

class App extends React.Component {

  render() {
    let date = new Date();

    return (
      <div className="ui container">
        <div id="card" className="ui raised segment">
          <a class="ui blue ribbon label" href='/#'>Section 1: Class component</a>
          <h1>Class component example</h1>
          <p>
            Mollit tempor ullamco sit anim amet minim sit dolor sit proident. Do ad minim nisi dolor officia non non aliqua et consequat aliqua. 
            Nisi cillum adipisicing magna enim amet culpa fugiat aliquip. Ullamco id sunt cupidatat do anim laboris officia non ea ut.
          </p>
          <p>
            Mollit tempor ullamco sit anim amet minim sit dolor sit proident. Do ad minim nisi dolor officia non non aliqua et consequat aliqua. 
            Nisi cillum adipisicing magna enim amet culpa fugiat aliquip. Ullamco id sunt cupidatat do anim laboris officia non ea ut.
          </p>
          <p>
            Mollit tempor ullamco sit anim amet minim sit dolor sit proident. Do ad minim nisi dolor officia non non aliqua et consequat aliqua. 
            Nisi cillum adipisicing magna enim amet culpa fugiat aliquip. Ullamco id sunt cupidatat do anim laboris officia non ea ut.
          </p>
        </div>
        <a class="ui blue image label" href="/">
          Fabian Andres Levin
          <div class="detail">{date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear()}</div>
        </a>
      </div>
  )}
}

export default App;
