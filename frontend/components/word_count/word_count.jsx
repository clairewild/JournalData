// TODO 1
// set y minimum to 00:00
// set y maximum to 23:59
// fix negative dates (before 1970)
//
// TODO 2
// style
//
// TODO 3
// add animation

import React from 'react';
import { VictoryChart, VictoryLabel, VictoryScatter, VictoryAxis, VictoryLegend } from 'victory';

class WordCount extends React.Component {
  constructor(props) {
    super(props);
    this.parseTime = this.parseTime.bind(this);
    this.parseDate = this.parseDate.bind(this);
  }

  parseTime(dateTime) {
    const time = dateTime.substring(11, 19);
    const hours = dateTime.substring(11, 13);
    const minutes = dateTime.substring(14, 16);
    const seconds = dateTime.substring(17, 19);
    const secondsSinceMidnight = parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
    return secondsSinceMidnight;
  }

  parseDate(dateTime) {
    return Date.parse(dateTime.substring(0, 10));
  }

  render() {
    return (
      <VictoryChart>

        <VictoryScatter
          data={this.props.word_count}
          x={(datum) => this.parseDate(datum.date)}
          y={(datum) => this.parseTime(datum.date)}
        />

      </VictoryChart>
    );
  }
}

export default WordCount;
