import React from 'react';
import { VictoryChart, VictoryArea } from 'victory';

import COLORS from '../colors';

const colors = {
  firstPersonSingular: COLORS.green,
  firstPersonPlural: COLORS.orange,
  secondPerson: COLORS.lightBlue,
  thirdPerson: COLORS.blue
};

class PronounsArea extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const first_person_data = this.props.area.first_person;
    const first_plural_data = this.props.area.first_plural;
    const second_person_data = this.props.area.second_person;
    const third_person_data = this.props.area.third_person;

    return (
      <VictoryChart height={ 200 }>

        <VictoryArea
          data={ third_person_data }
          x="date"
          y={ (datum) => datum.percentage * 100.00 }
          style={{
            data: { fill: colors.thirdPerson }
          }}>
        </VictoryArea>

        <VictoryArea
          data={ second_person_data }
          x="date"
          y={ (datum) => datum.percentage * 100.00 }
          style={{
            data: { fill: colors.secondPerson }
          }}>
        </VictoryArea>

        <VictoryArea
          data={ first_plural_data }
          x="date"
          y={ (datum) => datum.percentage * 100.00 }
          style={{
            data: { fill: colors.firstPersonPlural }
          }}>
        </VictoryArea>

        <VictoryArea
          data={ first_person_data }
          x="date"
          y={ (datum) => datum.percentage * 100.00 }
          style={{
            data: { fill: colors.firstPersonSingular }
          }}>
        </VictoryArea>

      </VictoryChart>
    );
  }
}

export default PronounsArea;
