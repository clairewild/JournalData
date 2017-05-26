import React from 'react';

import PronounsPie from './pronouns_pie';
import PronounsArea from './pronouns_area';

class Pronouns extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <PronounsPie pie={ this.props.pie } />
        <PronounsArea area={ this.props.area } />
      </div>
    );
  }
}

export default Pronouns;
