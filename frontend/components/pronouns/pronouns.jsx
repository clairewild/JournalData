import React from 'react';

import PronounsPie from './pronouns_pie';
import PronounsText from './pronouns_text';
import PronounsArea from './pronouns_area';

class Pronouns extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const maxFirstTense = (this.props.pie.first_person > this.props.pie.first_plural) ? "singular" : "plural";

    return (
      <div>
        <div className="pie-with-text">
          <PronounsPie pie={this.props.pie} className="pie-chart"/>
          <PronounsText max={maxFirstTense} />
        </div>

        <PronounsArea area={this.props.area} date={this.props.date} />
      </div>
    );
  }
}

export default Pronouns;
