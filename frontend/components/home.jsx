import React from 'react';

import TimeOrientationContainer from './time_orientation/time_orientation_container';
import CloudContainer from './word_cloud/cloud_container';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <div>
        <CloudContainer />
        <TimeOrientationContainer />
      </div>
    );
  }
}

export default Home;
