import React, { Component } from 'react';
const lista = ['React', 'ReactDOM','JSX', 'CSS'];

const Task = (value) => {
    return (
      <li>{value}</li>
    );
  }

class HelloWorld extends Component {
    render() {
        return <h1 className='HelloWorld1'>{lista.map((list) => Task(list))}</h1>
    }
}

export default HelloWorld;