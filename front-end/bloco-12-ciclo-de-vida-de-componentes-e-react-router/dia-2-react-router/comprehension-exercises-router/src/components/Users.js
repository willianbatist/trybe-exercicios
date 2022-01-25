import React, { Component } from 'react';

class Users extends Component {
  render() {
    const { ship } = this.props.match.params;
    return (
      <div>
        <h2>{ ship }</h2>
        <p>{`My awesome ${ ship } component`}</p>
      </div>
    );
  }
};

export default Users;
