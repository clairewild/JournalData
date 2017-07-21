import React from 'react';

import { pronounColors } from '../colors';

class PronounColors extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const maxPronouns = this.props.max == "plural" ? "we/us/our" : "I/me/my";
    const minPronouns = this.props.max == "plural" ? "I/me/my" : "we/us/our";

    const legend = Object.keys(pronounColors).map(key => (
      <li className="legend-row" key={key}>
        <div className="legend-div" style={{ backgroundColor: pronounColors[key] }}></div>
        <p>{ key }</p>
      </li>
    ));

    return (
      <div className="text-area">
        <h3>Pronouns</h3>
        <p>{`You tend to use ${maxPronouns} more frequently than ${minPronouns}.`}</p>
        <ul className="legend">
          { legend }
        </ul>
      </div>
    );
  }
}

export default PronounColors;
