import React from 'react';
import Dropzone from 'react-dropzone';
import _ from 'lodash';

class HelloWorld extends React.Component {

  onDrop(files) {
    app.models.user.server.uploadProfilePicture(this.props.user.id, files);
  }

  render() {
    HelloWorld.DropzoneStyle.backgroundImage = 'url("' + this.props.user.picture + '?_ts=' + Date.now() + '")';

    return <div className="hello-world">
      Hello, {this.props.user.firstName}!!
      <Dropzone onDrop={this.onDrop} user={this.props.user} style={HelloWorld.DropzoneStyle}/>
    </div>;
  }

}

HelloWorld.DropzoneStyle = {
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  width: '300px',
  height: '300px',
  borderRadius: '4px'
};

export default HelloWorld;