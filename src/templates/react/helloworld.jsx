import React from 'react';

class helloworld extends React.Component {

  render() {
    return <div>Hello, {this.props.user.firstName}!</div>
  }

}

module.exports = helloworld;