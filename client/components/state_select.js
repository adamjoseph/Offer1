import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

const options = [
  { key: 'al', text: 'Alabama', value: 'alabama' },
  { key: 'ak', text: 'Alaska', value: 'alaska' },
  { key: 'az', text: 'Arizona', value: 'arizona' },
  { key: 'ar', text: 'Arkansas', value: 'arkansas' },
  { key: 'ca', text: 'California', value: 'california' },
  { key: 'co', text: 'Colorado', value: 'colorado' },
  { key: 'ct', text: 'Connecticut', value: 'connecticut' },
  { key: 'de', text: 'Delaware', value: 'Delaware' },
  { key: 'fl', text: 'Florida', value: 'florida' },
  { key: 'ga', text: 'Georgia', value: 'georgia' },
  { key: 'hi', text: 'Hawaii', value: 'hawaii' },
  { key: 'id', text: 'Idaho', value: 'idaho' },
  { key: 'il', text: 'Illinoias', value: 'illinois' },
  { key: 'in', text: 'Indiana', value: 'indiana' },
  { key: 'ia', text: 'Iowa', value: 'iowa' },
  { key: 'ks', text: 'Kansas', value: 'kansas' },
  { key: 'ky', text: 'Kentucky', value: 'kentucky' },
  { key: 'la', text: 'Lousiana', value: 'lousiana' },
  { key: 'me', text: 'Maine', value: 'maine' },
  { key: 'md', text: 'Maryland', value: 'maryland' },
  { key: 'ma', text: 'Massachusetts', value: 'massachusetts' },
  { key: 'mi', text: 'Michigan', value: 'michigan' },
  { key: 'mn', text: 'Minnesota', value: 'minnesota' },
  { key: 'ms', text: 'Mississippi', value: 'mississippi' },
  { key: 'mo', text: 'Missouri', value: 'missouri' },
  { key: 'mt', text: 'Montana', value: 'montana' },
  { key: 'ne', text: 'Nebraska', value: 'nebraska' },
  { key: 'nv', text: 'Nevada', value: 'nevada' },
  { key: 'nh', text: 'New Hampshire', value: 'new hampshire' },
  { key: 'nj', text: 'New Jersey', value: 'new jersey' },
  { key: 'nm', text: 'New Mexico', value: 'new mexico' },
  { key: 'ny', text: 'New York', value: 'new york' },
  { key: 'nc', text: 'North Carolina', value: 'north carolina' },
  { key: 'nd', text: 'North Dakota', value: 'north dakota' },
  { key: 'oh', text: 'Ohio', value: 'ohio' },
  { key: 'ok', text: 'Oklahoma', value: 'oklahoma' },
  { key: 'or', text: 'Oregon', value: 'oregon' },
  { key: 'pa', text: 'Pennsylvania', value: 'pennsylvania' },
  { key: 'ri', text: 'Rhode Island', value: 'rhode island' },
  { key: 'sc', text: 'South Carolina', value: 'south carolina' },
  { key: 'sd', text: 'South Dakota', value: 'south dakota' },
  { key: 'tn', text: 'Tennessee', value: 'tennessee' },
  { key: 'tx', text: 'Texas', value: 'texas' },
  { key: 'ut', text: 'Utah', value: 'utah' },
  { key: 'vt', text: 'Vermont', value: 'vermont' },
  { key: 'va', text: 'Virginia', value: 'virginia' },
  { key: 'wa', text: 'Washington', value: 'washington' },
  { key: 'wv', text: 'West Virginia', value: 'west virginia' },
  { key: 'wi', text: 'Wisconsin', value: 'wisconsin' },
  { key: 'wy', text: 'Wyoming', value: 'wyoming' }

]


export default class StateSelect extends Component {
  render() {
    const { input } = this.props

    return (
      <select className="ui fluid search dropdown" { ...input }>
        <option value="">State</option>
    <option value="AL">Alabama</option>
    <option value="AK">Alaska</option>
    <option value="AZ">Arizona</option>
    <option value="AR">Arkansas</option>
    <option value="CA">California</option>
    <option value="CO">Colorado</option>
    <option value="CT">Connecticut</option>
    <option value="DE">Delaware</option>
    <option value="DC">District Of Columbia</option>
    <option value="FL">Florida</option>
    <option value="GA">Georgia</option>
    <option value="HI">Hawaii</option>
    <option value="ID">Idaho</option>
    <option value="IL">Illinois</option>
    <option value="IN">Indiana</option>
    <option value="IA">Iowa</option>
    <option value="KS">Kansas</option>
    <option value="KY">Kentucky</option>
    <option value="LA">Louisiana</option>
    <option value="ME">Maine</option>
    <option value="MD">Maryland</option>
    <option value="MA">Massachusetts</option>
    <option value="MI">Michigan</option>
    <option value="MN">Minnesota</option>
    <option value="MS">Mississippi</option>
    <option value="MO">Missouri</option>
    <option value="MT">Montana</option>
    <option value="NE">Nebraska</option>
    <option value="NV">Nevada</option>
    <option value="NH">New Hampshire</option>
    <option value="NJ">New Jersey</option>
    <option value="NM">New Mexico</option>
    <option value="NY">New York</option>
    <option value="NC">North Carolina</option>
    <option value="ND">North Dakota</option>
    <option value="OH">Ohio</option>
    <option value="OK">Oklahoma</option>
    <option value="OR">Oregon</option>
    <option value="PA">Pennsylvania</option>
    <option value="RI">Rhode Island</option>
    <option value="SC">South Carolina</option>
    <option value="SD">South Dakota</option>
    <option value="TN">Tennessee</option>
    <option value="TX">Texas</option>
    <option value="UT">Utah</option>
    <option value="VT">Vermont</option>
    <option value="VA">Virginia</option>
    <option value="WA">Washington</option>
    <option value="WV">West Virginia</option>
    <option value="WI">Wisconsin</option>
    <option value="WY">Wyoming</option>
      </select>
    );
  }

}

//return <Form.Select options={options}/>
