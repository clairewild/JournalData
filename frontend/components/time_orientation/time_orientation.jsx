import React from 'react';

import TimeOrientationPie from './time_orientation_pie';
import TimeOrientationArea from './time_orientation_area';

class TimeOrientation extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    <TimeOrientationPie props={ this.props } />
    <TimeOrientationArea props={ this.props } />
  }
}
