import React from 'react';
import { VictoryChart, VictoryPie } from 'victory';

class TimeOrientationPie extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const past_data = this.props.time_orientation.past;
    const present_data = this.props.time_orientation.present;
    const future_data = this.props.time_orientation.future;

    return (
      <VictoryChart>
        <VictoryPie
          data={}>

        </VictoryPie>


      </VictoryChart>
    )
  }
}
