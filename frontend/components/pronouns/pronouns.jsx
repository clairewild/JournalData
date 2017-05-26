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
        <PronounsArea area={ this.props.area } />
        <PronounsPie pie={ this.props.pie } />
      </div>
    );
  }
}

export default Pronouns;
