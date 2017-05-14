import React from 'react';
import { VictoryChart, VictoryLabel, VictoryArea, VictoryAxis, VictoryLegend } from 'victory';

class TimeOrientationChart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let past_data = [];
    let present_data = [];
    let future_data = [];

    if (this.props.data) {
      past_data = this.props.data.time_orientation.past;
      present_data = this.props.data.time_orientation.present;
      future_data = this.props.data.time_orientation.future;
    }

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
            data: {fill: "blue", opacity: 0.7}
          }}>
        </VictoryArea>

        <VictoryArea
          data={ present_data }
          x="date"
          y={ (datum) => datum.percentage * 100 }
          style={{
            data: {fill: "green", opacity: 0.7}
          }}>
        </VictoryArea>

        <VictoryArea
          data={ future_data }
          x="date"
          y={ (datum) => datum.percentage * 100 }
          style={{
            data: {fill: "purple", opacity: 0.7}
          }}>
        </VictoryArea>


        <VictoryAxis
          dependentAxis
          tickFormat={["20%", "40%", "60%", "80%", "100%"]}
        />

        <VictoryLegend
          data={[{ name: "Past", labels: { fill: "blue" } }, { name: "Present", labels: { fill: "green" } }, { name: "Future", labels: { fill: "purple" } }]}
        />
      </VictoryChart>
    );
  }
}

// <VictoryAxis
//   tickValues={[1, 2, 3, 4, 5]}
//   tickFormat={["Jan", "Feb", "Mar", "Apr", "May"]}
// />

export default TimeOrientationChart;
