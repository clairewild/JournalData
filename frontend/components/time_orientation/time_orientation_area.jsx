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
    const first_moment = Moment(first_date)

    return (
      <VictoryChart height={140} padding={{top: 0, bottom: 40, left: 40, right: 40}} >

        <VictoryAxis
          scale="date"
          standalone={false}
          tickCount={5}
          tickFormat={
            (x) => {
              const newMoment = first_moment.clone();
              newMoment.add(x, 'seconds');
              return `${newMoment.year()}-${newMoment.month()+1}-${newMoment.date()}`;
            }
          } />

        <VictoryArea
          data={future_data}
          x="date"
          y={(datum) => datum.percentage * 100.00}
          style={{
            data: {fill: timeColors["Future"]}
          }}>
        </VictoryArea>

        <VictoryArea
          data={present_data}
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
