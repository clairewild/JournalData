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
        <div className="">
          <PronounsPie pie={ this.props.pie } className="pie-chart"/>
          <PronounsText max={ maxFirstTense } className="text-area"/>
        </div>
        <PronounsArea area={ this.props.area } />
      </div>
    );
  }
}

export default Pronouns;
