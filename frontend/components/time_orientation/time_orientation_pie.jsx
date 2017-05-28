import React from 'react';
import { VictoryPie, VictoryTooltip } from 'victory';

import COLORS from '../colors';

const colors = {
  "Past": COLORS.red,
  "Present": COLORS.yellow,
  "Future": COLORS.lightGreen
};

class TimeOrientationPie extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const past_count = this.props.pie.past;
    const present_count = this.props.pie.present;
    const future_count = this.props.pie.future;
    const total = past_count + present_count + future_count;

    return (
      <VictoryPie
        data={[
          { tense: "Past", value: past_count / total },
          { tense: "Present", value: present_count / total },
          { tense: "Future", value: future_count / total }
        ]}
        x="tense"
        y="value"
        labels={datum => `${datum.tense}: ${Math.round(datum.value * 100)}%`}
        labelComponent={<VictoryTooltip />}
        labelRadius={50}

        style={{
          data: { fill: datum => colors[datum.tense] }
        }}>
      </VictoryPie>
    );
  }
}

export default TimeOrientationPie;
