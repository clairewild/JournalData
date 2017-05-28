import React from 'react';
import { VictoryChart, VictoryArea } from 'victory';

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

    return (
      <VictoryChart height={ 200 }>

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
