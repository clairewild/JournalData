// TODO:
// add animation

import React from 'react';
import { VictoryChart, VictoryLabel, VictoryScatter, VictoryAxis, VictoryLegend } from 'victory';

class WordCount extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <VictoryChart>

        <VictoryScatter
          data={[
            {month: "September", profit: 35000, loss: 2000},
            {month: "October", profit: 42000, loss: 8000},
            {month: "November", profit: 55000, loss: 5000}
          ]}
          x="month"
          y={(datum) => datum.profit - datum.loss}
        />

      </VictoryChart>
    );
  }
}

export default WordCount;
