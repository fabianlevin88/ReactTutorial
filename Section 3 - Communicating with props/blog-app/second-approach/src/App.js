import React from 'react';
import faker from 'faker';
import Comments from './CommentDetails';
import AppovalCard from './ApprovalCard';

function App() {
  let date = new Date();

  return (
    <div className="ui container">
      <div className="ui raised segment">
        <a className="ui blue ribbon label" href='/#'>Section 3: Blog application (Second approach)</a>
          <h3 className="ui dividing header">Comments</h3>
          <div className="ui comments">
            <AppovalCard>
              <Comments
                avatar={faker.image.avatar()} 
                author={faker.name.firstName() + ' ' + faker.name.lastName()}
                date={faker.date.weekday() + ' at ' + faker.date.past(10).getHours() + ':' + faker.date.past(10).getMinutes()}
                post={faker.lorem.text()}
              />
            </AppovalCard>
            <AppovalCard>
              <Comments
                avatar={faker.image.avatar()} 
                author={faker.name.firstName() + ' ' + faker.name.lastName()}
                date={faker.date.weekday() + ' at ' + faker.date.past(10).getHours() + ':' + faker.date.past(10).getMinutes()}
                post={faker.lorem.text()}
              />
            </AppovalCard>
            <AppovalCard>
              <Comments
                avatar={faker.image.avatar()} 
                author={faker.name.firstName() + ' ' + faker.name.lastName()}
                date={faker.date.weekday() + ' at ' + faker.date.past(10).getHours() + ':' + faker.date.past(10).getMinutes()}
                post={faker.lorem.text()}
              />
            </AppovalCard>
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
