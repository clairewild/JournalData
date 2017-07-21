import React from 'react';
import { VictoryChart, VictoryArea, VictoryAxis} from 'victory';
import Moment from 'moment'

import { timeColors } from '../colors';

class TimeOrientationArea extends React.Component {
  constructor(props) {
    super(props);
  }

  renderArea(tense) {
    const data = this.props.area[tense.toLowerCase()];
    return (
      <VictoryArea
        key={tense + "tensearea"}
        data={data}
        x="date"
        y={(datum) => datum.percentage * 100.00}
        style={{
          data: { fill: timeColors[tense] }
        }}>
      </VictoryArea>
    );
  }

  render() {
    const tenses = ["Future", "Present", "Past"];
    const areas = tenses.map(tense => this.renderArea(tense));

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
          }>
        </VictoryAxis>

        { areas }

      </VictoryChart>
    );
  }
}

export default TimeOrientationArea;
