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
        <div className="pie-with-text">
          <ToneSummary summary={this.props.summary} />
          <p>This is where some text will go...</p>
        </div>

        <ToneArea area={this.props.area} date={this.props.date} />
      </div>
    );
  }
}

export default Tone;
