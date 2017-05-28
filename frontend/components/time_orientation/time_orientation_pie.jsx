import React from 'react';
<<<<<<< HEAD
import { VictoryPie, VictoryTooltip } from 'victory';
=======
import { VictoryPie } from 'victory';
>>>>>>> debe07ed5803417743a9396ded8cf199f8cdf24d

import { timeColors } from '../colors';

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
          data: { fill: datum => timeColors[datum.tense] }
        }}>
      </VictoryPie>
    );
  }
}

export default TimeOrientationPie;
