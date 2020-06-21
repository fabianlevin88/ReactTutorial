# Section 5 - Refactoring from Functional to Class Components

In this section I will continue working on the **Season Application** started on the previous section .

However, this approach will be coded using **Class-based** Componentes

***NOTE***: The seasons exercise is not completed. It will be refactored and improved in _Section 6_. At this moment, we are presenting elements in a conditional way, but not a good way as you may see in this code snippet:

```Javascript
if (this.state.errorMessage && !this.state.latitude) {
      return (
        <div className="ui container">
        <div className="ui raised segment">
          <a id="ribbon" className="ui blue ribbon label" href='/#'>Section 5 - Refactoring from Functional to Class Components</a>
          <h4 className="ui red header">{this.state.errorMessage}</h4>
        </div>
      </div>
      )
} else ...
```

This piece of code is inside the ***render** function. We are not using helper functions or any other type of way to render a particular component or element according to a criteria.