import React from 'react';
import { VictoryPie } from 'victory';

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
        labels={ datum => `${datum.tense}: ${Math.round(datum.value * 100)}%` }
        events={[
          {
            target: "data",
            eventHandlers: {
              onMouseOver: () => {
                return [{
                  target: "labels",
                  mutation: (props) => ({
                    style: Object.assign({}, props.style, {fill: "orange"})
                  })
                }];
              },
              onMouseOut: () => {
                return [{
                  target: "labels",
                  mutation: (props) => ({
                    style: Object.assign({}, props.style, {fill: "black"})
                  })
                }];
              }
            }
          }
        ]}
        style={{
          data: { fill: datum => timeColors[datum.tense] }
        }}>
      </VictoryPie>
    );
  }
}



export default TimeOrientationPie;
