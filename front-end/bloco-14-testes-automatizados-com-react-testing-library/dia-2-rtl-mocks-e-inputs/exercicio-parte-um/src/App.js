import React, { Component } from 'react';
const service  = require('./service');

class App extends Component {
  constructor() {
    super();
    this.state = {
      url: '',
    }
  }
  api = () => {
    service.dogs().then((data) => {
      this.setState({
        url: data.message,
      })
    })
  }

  componentDidMount() {
    this.api();
  }
  
  render() {
    const { url } = this.state;
    return (
      <div>
        <p>TEST</p>
        <img src={ url } alt="dog" />
      </div>
    );
  }
}

export default App;
