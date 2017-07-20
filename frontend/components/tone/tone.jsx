import React from 'react';

import ToneSummary from './tone_summary';
import ToneArea from './tone_area';

class Tone extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ToneSummary summary={this.props.summary} />
        <ToneArea area={this.props.area} date={this.props.date} />
      </div>
    );
  }
}

export default Tone;
