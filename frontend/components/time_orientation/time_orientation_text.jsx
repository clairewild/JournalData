import React from 'react';

import { timeColors } from '../colors';

class TimeOrientationText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let tenses = ["past", "present", "future"];
    tenses = tenses.filter(tense => tense !== this.props.max);

    const legend = Object.keys(timeColors).map(key => (
      <li>
        <div className="legend-div" style={ { backgroundColor: timeColors[key] } }></div>
        <p>{ key }</p>
      </li>
    ));

    return (
      <div>
        <h3>Time Orientation</h3>
        <p>{ `Verb tense analysis shows you're more focused on the ${this.props.max} than on the ${tenses[0]} or ${tenses[1]}.` }</p>
        <ul>
          { legend }
        </ul>
      </div>
    );
  }
}

export default TimeOrientationText;
