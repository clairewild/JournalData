// http://formidable.com/open-source/victory/guides/custom-charts/
// https://momentjs.com/docs/#/displaying/as-string/

import React from 'react';
import { VictoryChart, VictoryArea, VictoryAxis} from 'victory';
import Moment from 'moment'

import { timeColors } from '../colors';

class TimeOrientationArea extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const past_data = this.props.area.past;
    const present_data = this.props.area.present;
    const future_data = this.props.area.future;
    const first_date = this.props.date.min;
    const last_date = this.props.date.max;
    const first_moment = Moment(first_date)
    const last_moment = Moment(last_date)
    const diff = last_moment.diff(first_moment, 'days')

    return (
      <VictoryChart height={ 200 }>

        <VictoryAxis
          scale="date"
          standalone={false}
          tickCount={5}
          tickFormat={
            (x) => {
              console.log(x);
              const moment = Moment(first_date).add(x, 'second');
              const year = moment.year();
              if (diff > 1825 ) {
                return `${year}`;
              } else if (diff > 150) {
                const month = moment.month();
                return `${year}-${month}`;
              } else {
                const month = moment.month();
                const day = moment.day();
                return `${year}-${month}-${day}`;
              }
            }
          } />

        <VictoryArea
          data={ future_data }
          x="date"
          y={ (datum) => datum.percentage * 100.00 }
          style={{
            data: { fill: timeColors["Future"] }
          }}>
        </VictoryArea>

        <VictoryArea
          data={ present_data }
          x="date"
          y={ (datum) => datum.percentage * 100.00 }
          style={{
            data: { fill: timeColors["Present"] }
          }}>
        </VictoryArea>

        <VictoryArea
          data={ past_data }
          x="date"
          y={ (datum) => datum.percentage * 100.00 }
          style={{
            data: { fill: timeColors["Past"] }
          }}>
        </VictoryArea>

      </VictoryChart>
    );
  }
}

export default TimeOrientationArea;
