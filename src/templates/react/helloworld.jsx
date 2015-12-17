import React from 'react';
import Dropzone from 'react-dropzone';
import _ from 'lodash';

class helloworld extends React.Component {

  onDrop(files) {
    app.models.user.server.uploadProfilePicture(this.props.user.id, files)
      .then(
        (data) => {
          app.models.user.fetch()
        })
  }

  render() {
    const DropzoneStyle = {
      backgroundImage: 'url("' + this.props.user.picture + '?_ts=' + Date.now() + '")',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      width: '300px',
      height: '300px',
      borderRadius: '4px'
    };

    return <div>
      Hello, {this.props.user.firstName}!!
      <Dropzone onDrop={this.onDrop} user={this.props.user} style={DropzoneStyle}/>
    </div>;
  }

}

export default helloworld;