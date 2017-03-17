import React, { Component } from 'react';
import { Link } from 'react-router';
import { Button } from 'semantic-ui-react';

import PreviousInputs from './previous_inputs';

class Page4 extends Component {
  render() {
    return (
      <div className='ui container'>
        <PreviousInputs />

        <Link to="/page4">
        <Button color="green" floated="right">Next</Button>
        </Link>

        <Link to="/page2">
        <Button color="red" type="submit" floated="right">Back</Button>
        </Link>
      </div>
    );
  }
}

export default Page4
