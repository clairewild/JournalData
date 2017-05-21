import React from 'react';
import { VictoryChart, VictoryLabel, VictoryArea, VictoryAxis, VictoryLegend } from 'victory';

class WordCount extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div><p>hellooooooo</p></div>
    )
    // return (
    //   <VictoryChart>
    //     <VictoryLabel
    //       text="Time Orientation">
    //     </VictoryLabel>
    //
    //     <VictoryArea
    //       data={ past_data }
    //       x="date"
    //       y={ (datum) => datum.percentage * 100.00 }
    //       style={{
    //         data: {fill: "blue", opacity: 0.9}
    //       }}>
    //     </VictoryArea>
    //
    //     <VictoryLegend
    //       data={[{ name: "Past", labels: { fill: "blue" } }, { name: "Present", labels: { fill: "green" } }, { name: "Future", labels: { fill: "purple" } }]}>
    //     </VictoryLegend>
    //   </VictoryChart>
    // );
  }
}

export default WordCount;
