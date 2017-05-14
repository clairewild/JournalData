import React from 'react';

import TimeOrientationChart from './time_orientation_chart.jsx';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.props.fetchData();
  }

  render() {
    return (
      <div>
        <TimeOrientationChart />
      </div>
    );
  }
}

export default Home;
