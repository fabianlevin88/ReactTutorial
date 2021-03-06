import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'


const App = () => {

  let date = new Date();
  return (
    <div className="ui container">
      <div id="card" className="ui raised segment">
        <a className="ui blue ribbon label" href='/#'>Section 1: Functional component</a>
        <h1>Functional component Example</h1>
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
      <a className="ui blue image label" href="/">
        Fabian Andres Levin
        <div className="detail">{date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear()}</div>
      </a>
    </div>
  )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);