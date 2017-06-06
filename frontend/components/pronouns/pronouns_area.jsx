import React from 'react';
import { VictoryChart, VictoryArea, VictoryAxis } from 'victory';
import Moment from 'moment'

import { pronounColors } from '../colors';

class PronounsArea extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const first_person_data = this.props.area.first_person;
    const first_plural_data = this.props.area.first_plural;
    const second_person_data = this.props.area.second_person;
    const third_person_data = this.props.area.third_person;
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
              console.log(Moment("2016-01-01").toString());
              console.log(Moment("2016-01-01").month());
              console.log(`\ntick: ${x}`);
              console.log(first_moment.toString());
              const newMoment = first_moment.clone();
              newMoment.add(x, 'seconds');
              console.log(newMoment.toString());
              return `${newMoment.year()}-${newMoment.month()+1}-${newMoment.date()}`;
            }
          } />

        <VictoryArea
          data={ third_person_data }
          x="date"
          y={ (datum) => datum.percentage * 100.00 }
          style={{
            data: { fill: pronounColors["Third Person"] }
          }}>
        </VictoryArea>

        <VictoryArea
          data={ second_person_data }
          x="date"
          y={ (datum) => datum.percentage * 100.00 }
          style={{
            data: { fill: pronounColors["Second Person"] }
          }}>
        </VictoryArea>

        <VictoryArea
          data={ first_plural_data }
          x="date"
          y={ (datum) => datum.percentage * 100.00 }
          style={{
            data: { fill: pronounColors["First Plural"] }
          }}>
        </VictoryArea>

        <VictoryArea
          data={ first_person_data }
          x="date"
          y={ (datum) => datum.percentage * 100.00 }
          style={{
            data: { fill: pronounColors["First Person"] }
          }}>
        </VictoryArea>

      </VictoryChart>
    );
  }
}

export default PronounsArea;
