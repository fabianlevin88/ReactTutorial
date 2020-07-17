import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import DropDown from './components/DropDown';
import Translate from './components/Translate';

const items = [
  {
    title: 'What is React',
    content: 'React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.'
  },
  {
    title: 'What are Hooks?',
    content: 'Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don’t work inside classes — they let you use React without classes. (We don’t recommend rewriting your existing components overnight but you can start using Hooks in the new ones if you’d like.)'
  },
  {
    title: 'Building Custom Hooks',
    content: 'Sometimes, we want to reuse some stateful logic between components. Traditionally, there were two popular solutions to this problem: higher-order components and render props. Custom Hooks let you do this, but without adding more components to your tree.'
  }
]

const colors = [
  {
    label: 'red',
    value: 'red'
  },
  {
    label: 'green',
    value: 'green'
  },
  {
    label: 'blue',
    value: 'blue'
  },
  {
    label: 'orange',
    value: 'orange'
  },
  {
    label: 'yellow',
    value: 'yellow'
  },
  {
    label: 'teal',
    value: 'teal'
  },
  {
    label: 'purple',
    value: 'purple'
  },
  {
    label: 'brown',
    value: 'brown'
  }
]

export default () => {

  const [selected, setSelected] = useState(colors[Math.floor(Math.random() * colors.length)]);

  return (
    <div className="square ui container">
      <div className="ui raised segment">
        <a id="ribbon" className={`ui ${selected.value} ribbon label`} href='/#'>Section 12 - Understanding Hooks in React</a>
        <Search />
        <Accordion items={items} />
        <DropDown 
          options={colors} 
          message="Select a colour" 
          selected={selected}
          onSelectedChange={setSelected}
        />
        <Translate />
      </div>
    </div>
  )
}
