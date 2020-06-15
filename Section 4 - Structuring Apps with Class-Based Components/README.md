# Section 4 - Structuring Apps with Class-Based Components

In this section, we will work with Class-Based React Components, some of the key features and differences with the Functional Components.

As an introduction, here is a quick comparison between both types of components taken from the blog [Functional and Class Components in ReactJS](https://jsonworld.com/blog/functional-and-class-components-in-reactjs)

## Functional (Stateless) Components
A functional component is basically a JavaScript function which returns a React element. Its accepts props as argument and returns valid JSX
```Javascript
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
```
that’s a functional component.

The main reason that makes functional component different from a class component is the lack of state and lifecycle methods. This is why functional components are also commonly referred to as stateless components.

the same component written in ES6:
```Javascript
const Welcome = (props) => {
    return <h1>Hello, {props.name}</h1>
}
```

## Class (Stateful) Components
Class Components are more complex than functional components including constructors, life-cycle methods, render( ) function and state (data) management. Class components are ES6 classes.
```Javascript
class Welcome extends Component{
    render(){
        return <div>Hello, {this.props.name}</div>
    }
}
```
In the above code, the Welcome class extends Component, so React understands that this class is a component, and it renders (returns) a React Element.