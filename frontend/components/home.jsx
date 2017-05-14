import React from 'react';

import TimeOrientationContainer from './time_orientation_container';

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
        <TimeOrientationContainer />
      </div>
    );
  }
}

export default Home;
