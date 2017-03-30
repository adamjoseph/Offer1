import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';

//field used on previous_inputs
class PhotoDrop extends Component {
  onDrop(accpetedFiles, rejectedFiles) {
    console.log('Accepted Files: ', acceptedFiles);
    console.log('Rejecteded Files: ', rejectedFiles);
  }

  onOpenClick(){
    this.dropzone.open();
  }

  render(){
    return(
      <div className="column">
        <div className="ui segment">
          <div className="ui card">
            <Dropzone className="dropzone" ref={(node) => { this.dropzone = node; }} onDrop={this.onDrop} multiple={false}>
            </Dropzone>
            <div className="">
              <Image className="prof-pic" src="../../Default_Avatar.jpg" />
            </div>
            <div className="content">
              <button className="small ui button" onClick={this.onOpenClick.bind(this)}>
                Add Photo
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PhotoDrop
