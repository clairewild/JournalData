import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryChart, VictoryLabel, VictoryArea, VictoryAxis, VictoryLegend } from 'victory';

class TimeOrientationChart extends React.Component {
  const past_data = this.props.data.time_orientation.past;
  const present_data = this.props.data.time_orientation.present;
  const future_data = this.props.data.time_orientation.future;

  render() {
    return (
      <VictoryChart>
        <VictoryLabel
          text="Time Orientation">
        </VictoryLabel>

        <VictoryArea
          data={ past_data }
          x="month"
          y=
          style={{
            data: {fill: "blue", opacity: 0.7}
          }}>
        </VictoryArea>

        <VictoryArea
          data={ present_data }
          x="month"
          y=
          style={{
            data: {fill: "green", opacity: 0.7}
          }}>
        </VictoryArea>

        <VictoryArea
          data={ future_data }
          x="month"
          y=
          style={{
            data: {fill: "purple", opacity: 0.7}
          }}>
        </VictoryArea>

        <VictoryAxis
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={["Jan", "Feb", "Mar", "Apr", "May"]}
        />

        <VictoryAxis
          dependentAxis
          tickFormat={["20%", "40%", "60%", "80%", "100%"]}
        />

        <VictoryLegend
          data={[{ name: "Past", labels: { fill: "blue" } } }, { name: "Present", labels: { fill: "green" } } }, { name: "Future", labels: { fill: "purple" } }}]}
        />
      </VictoryChart>
    );
  }
}

export default TimeOrientationChart;
