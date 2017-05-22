import React from 'react';
import { VictoryChart, VictoryPie } from 'victory';

class TimeOrientationPie extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const past_percent = this.props.past;
    const present_percent = this.props.present;
    const future_percent = this.props.future;

    return (
      <VictoryChart>
        <VictoryPie
          data={[
            { tense: "Past", value: past_percent },
            { tense: "Present", value: present_percent },
            { tense: "Future", value: future_percent }
          ]}
          x="tense">

        </VictoryPie>


      </VictoryChart>
    )
  }
}
