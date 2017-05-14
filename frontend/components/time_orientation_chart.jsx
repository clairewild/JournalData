import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryArea, VictoryChart } from 'victory';

const data1 = [
  {month: "September", profit: 35000, loss: 2000},
    {month: "October", profit: 42000, loss: 8000},
    {month: "December", profit: 55000, loss: 5000}
];

const data2 = [
  {month: "October", profit: 2000, loss: 2000},
    {month: "November", profit: 46000, loss: 8000},
    {month: "December", profit: 50000, loss: 4000}
];

class TimeOrientationChart extends React.Component {
  render() {
    return (
      <VictoryChart>
        <VictoryArea
          data={ data1 }
          x="month"
          y={(datum) => datum.profit - datum.loss}
          style={{
            data: {fill: "tomato", opacity: 0.7}
          }}>
        </VictoryArea>

        <VictoryArea
          data={ data2 }
          x="month"
          y={(datum) => datum.profit - datum.loss}>
        </VictoryArea>


      </VictoryChart>
    );
  }
}

export default TimeOrientationChart;
