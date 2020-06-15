import React from 'react';

function App() {

  let codeString = `<label for="name">Enter Name: </label>
<input id="name" placeholder='Your Name' type="text" />
<button style={{ backgroundColor: 'green', color: 'white' }}>Submit</button>`;

  let codeStringHTML = `<label for="name">Enter Name: </label>
<input id="name" placeholder='Your Name' type="text" />
<button style="background-color:green; color:white;">Submit</button>`;

  let date = new Date();

  return (
    <div className="ui container">
      <div className="ui riased segment">
        <a className="ui blue ribbon label" href='/#'>Section 2: Inline CSS style</a>
        <div>
          <h1>Inline style formatting</h1>
          <pre>
              The code below is a showcase of how you can user inline styling using <code style={{ backgroundColor: '#f4f2ff', fontWeight: '600', color: '#9884fc', padding: '4px 10px', borderRadius: '3px' }}>JSX</code>
          </pre>
          <div style={{ height: '60px', width: '650px', backgroundColor: 'black', borderRadius: '3px', paddingLeft: '10px' }}>
            <pre>
              <code style={{ color: 'green' }}>
                {
                  codeString
                }
              </code>
            </pre>
          </div>
          <pre>
            This code, will translate to the following elements:
          </pre>
          <div>
            <label htmlFor="name">Enter Name: </label>
            <div className="ui input">
              <input type="text" placeholder="Search..." />
            </div>
            <button className="ui green button" style={{ marginLeft: '5px' }}>Submit</button>
          </div>
        </div>
        <pre>
          However, if we would like to create the same view using <code style={{ backgroundColor: '#f4f2ff', fontWeight: '600', color: '#9884fc', padding: '4px 10px', borderRadius: '3px' }}>HTML</code> it wolud look like this:
        </pre>
        <div style={{ height: '60px', width: '650px', backgroundColor: 'black', borderRadius: '3px', paddingLeft: '10px' }}>
            <pre>
              <code style={{ color: 'green' }}>
                {
                  codeStringHTML
                }
              </code>
            </pre>
        </div>
      </div>
      <a className="ui blue image label" href="/">
        Fabian Andres Levin
        <div className="detail">{date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear()}</div>
      </a>
    </div>
  );
}

export default App;
