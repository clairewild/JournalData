import React from 'react';

import { timeColors } from '../colors';

class TimeOrientationText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const legend = Object.keys(timeColors).forEach(key => (
      <li>
        <div style={ { backgroundColor: timeColors[key] } }></div>
        <p>{ key }</p>
      </li>
    ));
    console.log(this.props.max);

    return (
      <div>
        <h3>Time Orientation</h3>
        <p>{ `Verb tense analysis shows you're more focused on the ${this.props.max} than on the ${this.props.second} or ${this.props.least}.` }</p>
        <ul>
          { legend }
        </ul>
      </div>
    );
  }
}

export default TimeOrientationText;
