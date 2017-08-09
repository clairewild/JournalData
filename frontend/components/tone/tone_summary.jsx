import React from 'react';
import { VictoryGroup, VictoryStack, VictoryBar, VictoryAxis } from 'victory';

import { toneColors } from '../colors';

class ToneSummary extends React.Component {
  constructor(props) {
    super(props);
  }

  renderBar(emotion) {
    const data = [{ x: emotion, y: this.props.summary[emotion] }];
    return (
      <VictoryStack horizontal
        key={emotion + "tonesummary"}
        domain={{ x: [0, 1] }}>

        <VictoryBar
          data={data}
          labels={datum => datum.x}
          style={{
            data: { fill: toneColors[emotion] }
          }}>
        </VictoryBar>

        <VictoryBar
          data={data}
          y={datum => 1 - datum.y}
          labels={datum => Math.round(datum.y * 100) / 100}
          style={{
            data: { fill: "whitesmoke" }
          }}>
        </VictoryBar>

      </VictoryStack>
    );
  }

  render() {
    const emotions = ["Joy", "Fear", "Sadness", "Anger", "Disgust"];
    const bars = emotions.map(emotion => this.renderBar(emotion));

    return (
      <div>
        <VictoryGroup horizontal
          offset={25}
          width={380}
          height={250}
          padding={{ top: 100, bottom: 100, left: 100, right: 100 }}
          style={{
            data: { width: 17 },
            labels: { fontSize: 11 }
          }}>

          { bars }

        </VictoryGroup>

        <VictoryAxis dependentAxis
          height={}
          width={}
          padding={}
          style={

          }
          tickLabelComponent={}
          tickValues={}>
        </VictoryAxis>
      </div>
    );
  }
}

export default ToneSummary;
