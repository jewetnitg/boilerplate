import React from 'react';

class randomView extends React.Component {

  render() {
    return <div>This is a brand new react component called {this.props.user.firstName}!</div>
  }

}

export default randomView;