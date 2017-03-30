import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

//field is used on form/page3
export default class TeamSelect extends Component {

  render() {
    const { input } = this.props

    return(
      <select className="ui fluid selection dropdown" { ...input }>
        <option key="solo" value="solo">Solo</option>
        <option key="team" value="team">Team</option>
      </select>
    );
  }
}
