import React from 'react';
import { VictoryGroup, VictoryBar, VictoryAxis } from 'victory';

import { toneColors } from '../colors';

class ToneSummary extends React.Component {
  constructor(props) {
    super(props);
    this.renderBar = this.renderBar.bind(this);
  }

  renderBar(emotion) {
    const data = [{x: emotion, y: this.props.summary[emotion]}];
    return (
      <VictoryBar
        key={emotion + "tonesummary"}
        data={data}
        style={{
          data: {fill: toneColors[emotion]}
        }}>
      </VictoryBar>
    );
  }

  render() {
    const emotions = ["Joy", "Fear", "Sadness", "Anger", "Disgust"];
    const bars = emotions.map(emotion => this.renderBar(emotion));

    return (
      <VictoryGroup horizontal
        offset={25}
        padding={{top: 40, bottom: 40, left: 40, right: 40}}
        style={{
          data: {width: 20}
        }}>

        { bars }

      </VictoryGroup>
    );
  }
}

export default ToneSummary;
