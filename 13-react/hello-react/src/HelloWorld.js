import React from 'react';

// components in React:
//   class components
//   funcitonal components

class HelloWorld extends React.Component {
    // Every React class component needs a method called .render()
    render() {
        return (
            <h1>Hello World!</h1>
        );
    }
}

export default HelloWorld;