import React from 'react';

function App() {

  let codeString = `<label for="name">Enter Name: </label>
<input id="name" placeholder='Your Name' type="text" />
<button style={{ backgroundColor: 'green', color: 'white' }}>Submit</button>`

  let codeStringHTML = `<label for="name">Enter Name: </label>
<input id="name" placeholder='Your Name' type="text" />
<button style="background-color:green; color:white;">Submit</button>`

  return (
    <div>
      <div>
        <h1>Inline style formatting</h1>
        <pre>
            The code below is a showcase of how you can user inline styling using <code style={{ backgroundColor: '#f4f2ff', fontWeight: '600', color: '#9884fc', padding: '4px 10px', borderRadius: '3px' }}>JSX</code>
        </pre>
        <div style={{ height: '80px', width: '600px', backgroundColor: 'black', borderRadius: '3px', padding: '4px 10px' }}>
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
          <label for="name">Enter Name: </label>
          <input id="name" placeholder='Your Name' type="text" />
        </div>
      </div>
      <button style={{ backgroundColor: 'green', color: 'white' }}>Submit</button>
      <pre>
        However, if we would like to create the same view using <code style={{ backgroundColor: '#f4f2ff', fontWeight: '600', color: '#9884fc', padding: '4px 10px', borderRadius: '3px' }}>HTML</code> it wolud look like this:
      </pre>
      <div style={{ height: '80px', width: '600px', backgroundColor: 'black', borderRadius: '3px', padding: '4px 10px' }}>
          <pre>
            <code style={{ color: 'green' }}>
              {
                codeStringHTML
              }
            </code>
          </pre>
        </div>
    </div>
  );
}

export default App;
