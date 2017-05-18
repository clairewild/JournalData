import React from 'react';
import { VictoryChart, VictoryLabel, VictoryArea, VictoryAxis, VictoryLegend } from 'victory';

class TimeOrientationChart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const past_data = this.props.time_orientation.past;
    const present_data = this.props.time_orientation.present;
    const future_data = this.props.time_orientation.future;

    return (
      <VictoryChart>
        <VictoryLabel
          text="Time Orientation">
        </VictoryLabel>

        <VictoryArea
          data={ past_data }
          x="date"
          y={ (datum) => datum.percentage * 100.00 }
          style={{
            data: {fill: "blue", opacity: 0.9}
          }}>
        </VictoryArea>

        <VictoryArea
          data={ present_data }
          x="date"
          y={ (datum) => datum.percentage * 100.00 }
          style={{
            data: {fill: "blue", opacity: 0.6}
          }}>
        </VictoryArea>

        <VictoryArea
          data={ future_data }
          x="date"
          y={ (datum) => datum.percentage * 100.00 }
          style={{
            data: {fill: "blue", opacity: 0.3}
          }}>
        </VictoryArea>

        <VictoryLegend
          data={[{ name: "Past", labels: { fill: "blue" } }, { name: "Present", labels: { fill: "green" } }, { name: "Future", labels: { fill: "purple" } }]}>
        </VictoryLegend>
      </VictoryChart>
    );
  }
}

export default TimeOrientationChart;
