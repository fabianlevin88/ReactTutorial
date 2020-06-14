import React from 'react';


function App() {

  let text = 'This is coming from a variable'

  return (
    <div className="ui container">
      <div className="ui raised segment">
      <a className="ui blue ribbon label" href='/#'>Section 2: JSX Variables</a>
        <h1>Rendering variables</h1>
        <p>
          The idea is to show how variables can be used when creating React Components
        </p>
        <a className="ui teal tag label" href='/#'>
          { text }
        </a>
        <a className="ui red tag label" href='/#'>This text is hardcoded</a>
      </div>
    </div>
  )
}

export default App;
