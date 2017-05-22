import React from 'react';
import { VictoryChart, VictoryArea } from 'victory';

const colors = {
  past: "red",
  present: "yellow",
  future: "green"
}

class TimeOrientationChart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const past_data = this.props.time_orientation.past;
    const present_data = this.props.time_orientation.present;
    const future_data = this.props.time_orientation.future;

    return (
      <VictoryChart height={200}>

        <VictoryArea
          data={ future_data }
          x="date"
          y={ (datum) => datum.percentage * 100.00 }
          style={{
            data: {fill: colors.future}
          }}>
        </VictoryArea>

        <VictoryArea
          data={ present_data }
          x="date"
          y={ (datum) => datum.percentage * 100.00 }
          style={{
            data: {fill: colors.present}
          }}>
        </VictoryArea>

        <VictoryArea
          data={ past_data }
          x="date"
          y={ (datum) => datum.percentage * 100.00 }
          style={{
            data: {fill: colors.past}
          }}>
        </VictoryArea>

      </VictoryChart>
    );
  }
}

export default TimeOrientationChart;
