import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';

class PhotoDrop extends Component {
  render(){
    return(
      <div className="column">
        <div className="ui segment">
          <div className="ui card">
            <div className="">
              <Image className="prof-pic" src="../../Default_Avatar.jpg" />
            </div>
            <div className="content">
              <button className="small ui button">
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
