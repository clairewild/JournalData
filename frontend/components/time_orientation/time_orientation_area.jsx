import React from 'react';
import { VictoryChart, VictoryArea } from 'victory';

import COLORS from '../colors';

const colors = {
  past: COLORS.red,
  present: COLORS.yellow,
  future: COLORS.lightGreen
};

class TimeOrientationArea extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const past_data = this.props.area.past;
    const present_data = this.props.area.present;
    const future_data = this.props.area.future;

    return (
      <VictoryChart height={ 200 }>

        <VictoryArea
          data={ future_data }
          x="date"
          y={ (datum) => datum.percentage * 100.00 }
          style={{
            data: { fill: colors.future }
          }}>
        </VictoryArea>

        <VictoryArea
          data={ present_data }
          x="date"
          y={ (datum) => datum.percentage * 100.00 }
          style={{
            data: { fill: colors.present }
          }}>
        </VictoryArea>

        <VictoryArea
          data={ past_data }
          x="date"
          y={ (datum) => datum.percentage * 100.00 }
          style={{
            data: { fill: colors.past }
          }}>
        </VictoryArea>

      </VictoryChart>
    );
  }
}

export default TimeOrientationArea;
