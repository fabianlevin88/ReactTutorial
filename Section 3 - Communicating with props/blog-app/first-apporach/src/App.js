import React from 'react';
import faker from 'faker';

function App() {
  let date = new Date();

  return (
    <div className="ui container">
      <div className="ui raised segment">
        <a className="ui blue ribbon label" href='/#'>Section 3: Blog application (Naive approach)</a>
        <div className="ui comments">
          <h1>Blog App</h1>
          <h3 className="ui dividing header">Comments</h3>
          <div className="comment">
            <a className="avatar" href="/">
              <img src={faker.image.avatar()} alt="avatar"/>
            </a>
            <div className="content">
              <a className="author" href="/">
                {faker.name.firstName() + ' ' + faker.name.lastName()}
              </a>
              <div className="metadata">
                <span className="date">{faker.date.weekday() + ' at ' + faker.date.past(10).getHours() + ':' + faker.date.past(10).getMinutes() }</span>
              </div>
              <div className="text">
                {faker.lorem.text()}
              </div>
            </div>
          </div>
          <div className="comment">
            <a className="avatar" href="/">
              <img src={faker.image.avatar()} alt="avatar"/>
            </a>
            <div className="content">
              <a className="author" href="/">
                {faker.name.firstName() + ' ' + faker.name.lastName()}
              </a>
              <div className="metadata">
              <span className="date">{faker.date.weekday() + ' at ' + faker.date.past(10).getHours() + ':' + faker.date.past(10).getMinutes() }</span>
              </div>
              <div className="text">
                {faker.lorem.text()}
              </div>
            </div>
          </div>
          <div className="comment">
            <a className="avatar" href="/">
              <img src={faker.image.avatar()} alt="avatar"/>
            </a>
            <div className="content">
              <a className="author" href="/">
                {faker.name.firstName() + ' ' + faker.name.lastName()}
              </a>
              <div className="metadata">
              <span className="date">{faker.date.weekday() + ' at ' + faker.date.past(10).getHours() + ':' + faker.date.past(10).getMinutes() }</span>
              </div>
              <div className="text">
                {faker.lorem.text()}
              </div>
            </div>
          </div>
        </div>
      </div>
      <a class="ui blue image label" href="/">
        Fabian Andres Levin
        <div class="detail">{date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear()}</div>
      </a>
    </div>
  );
}

export default App;
