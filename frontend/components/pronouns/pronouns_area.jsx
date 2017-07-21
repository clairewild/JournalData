import React from 'react';
import { VictoryChart, VictoryArea, VictoryAxis } from 'victory';
import Moment from 'moment'

import { pronounColors } from '../colors';

class PronounsArea extends React.Component {
  constructor(props) {
    super(props);
  }

  renderArea(pronoun) {
    const p = pronoun.toLowerCase().replace(" ", "_");
    const data = this.props.area[p]
    return (
      <VictoryArea
        data={data}
        x="date"
        y={(datum) => datum.percentage * 100.00}
        style={{
          data: { fill: pronounColors[pronoun] }
        }}>
      </VictoryArea>
    );
  }

  render() {
    const pronouns = ["Third Person", "Second Person", "First Plural", "First Person"];
    const areas = pronouns.map(pronoun => this.renderArea(pronoun));

    const first_date = this.props.date.min;
    const first_moment = Moment(first_date)

    return (
      <VictoryChart height={140} padding={{ top: 0, bottom: 40, left: 40, right: 40 }}>

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

        { areas }

      </VictoryChart>
    );
  }
}

export default PronounsArea;
