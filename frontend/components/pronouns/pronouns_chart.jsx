import React from 'react';
import { VictoryChart, VictoryLabel, VictoryArea, VictoryAxis, VictoryLegend } from 'victory';

class PronounsChart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const first_person_data = this.props.pronouns.first_person;
    const first_plural_data = this.props.pronouns.first_plural;
    const second_person_data = this.props.pronouns.second_person;
    const third_person_data = this.props.pronouns.third_person;

    return (
      <VictoryChart>
        <VictoryLabel
          text="Pronouns">
        </VictoryLabel>

        <VictoryArea
          data={ first_person_data }
          x="date"
          y={ (datum) => datum.percentage * 100.00 }>
        </VictoryArea>

        <VictoryArea
          data={ first_plural_data }
          x="date"
          y={ (datum) => datum.percentage * 100.00 }>
        </VictoryArea>

        <VictoryArea
          data={ second_person_data }
          x="date"
          y={ (datum) => datum.percentage * 100.00 }>
        </VictoryArea>

        <VictoryArea
          data={ third_person_data }
          x="date"
          y={ (datum) => datum.percentage * 100.00 }>
        </VictoryArea>


      </VictoryChart>

    );
  }
}

export default PronounsChart;
