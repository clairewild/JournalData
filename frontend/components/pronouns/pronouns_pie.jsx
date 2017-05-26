import React from 'react';
import { VictoryPie } from 'victory';

import COLORS from '../colors';

const colors = {
  "First Person": COLORS.green,
  "First Plural": COLORS.orange,
  "Second Person": COLORS.lightBlue,
  "Third Person": COLORS.blue
};

class PronounsPie extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const first_person_count = this.props.pie.first_person;
    const first_plural_count = this.props.pie.first_plural;
    const second_person_count = this.props.pie.second_person;
    const third_person_count = this.props.pie.third_person;
    const total = first_person_count + first_plural_count + second_person_count + third_person_count;

    return (
      <VictoryPie
        data={[
          { person: "First Person", value: first_person_count / total },
          { person: "First Plural", value: first_plural_count / total },
          { person: "Second Person", value: second_person_count / total },
          { person: "Third Person", value: third_person_count / total }
        ]}
        x="person"
        y="value"
        style={{
          data: { fill: datum => colors[datum.person] }
        }}>
      </VictoryPie>
    );
  }
}

export default PronounsPie;