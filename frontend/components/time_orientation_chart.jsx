import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryArea, VictoryChart } from 'victory';

const data = [
  {month: "September", profit: 35000, loss: 2000},
    {month: "October", profit: 42000, loss: 8000},
    {month: "November", profit: 55000, loss: 5000}
];

class TimeOrientationChart extends React.Component {
  render() {
    return (
      <VictoryChart>
        <VictoryArea
          data={ data }
          x="quarter"
          y="earnings">
        </VictoryArea>
      </VictoryChart>
    );
  }
}

export default TimeOrientationChart;
