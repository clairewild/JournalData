import React from 'react';

import TimeOrientationText from './time_orientation_text';
import TimeOrientationPie from './time_orientation_pie';
import TimeOrientationArea from './time_orientation_area';

class TimeOrientation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let max = "present";
    Object.keys(this.props.pie).forEach(key => {
      if (this.props.pie[key] > this.props.pie[max]) {
        max = key;
      }
    });

    return (
      <div>
        <div className="pie-with-text">
          <TimeOrientationText max={max} />
          <TimeOrientationPie pie={this.props.pie} />
        </div>

        <TimeOrientationArea area={this.props.area} date={this.props.date} />
      </div>
    );
  }
}

export default TimeOrientation;
