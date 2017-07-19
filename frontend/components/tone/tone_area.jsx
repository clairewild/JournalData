import React from 'react';
import { VictoryChart, VictoryArea, VictoryAxis } from 'victory';
import Moment from 'moment'

import { toneColors } from '../colors';

class ToneArea extends React.Component {
  constructor(props) {
    super(props);
    this.renderArea = this.renderArea.bind(this);
  }

  renderArea(emotion) {
    const data = this.props.area[emotion];
    return (
      <VictoryArea
        data={data}
        x="date"
        y={(datum) => datum.percentage * 100.00}
        style={{
          data: {fill: toneColors[emotion]}
        }}>
      </VictoryArea>
    );
  }

  render() {
    const emotions = ["Anger", "Disgust", "Fear", "Joy", "Sadness"];
    const areas = emotions.map(emotion => this.renderArea(emotion));

    // const anger_data = this.props.area.Anger;
    // const disgust_data = this.props.area.Disgust;
    // const fear_data = this.props.area.Fear;
    // const joy_data = this.props.area.Joy;
    // const sadness_data = this.props.area.Sadness;

    const first_date = this.props.date.min;
    const first_moment = Moment(first_date)

    return (
      <VictoryChart height={140} padding={{top: 0, bottom: 40, left: 40, right: 40}}>

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

export default ToneArea;
