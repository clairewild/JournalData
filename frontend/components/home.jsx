import React from 'react';

import TimeOrientationContainer from './time_orientation/time_orientation_container';
import CloudContainer from './word_cloud/cloud_container';
import PronounsContainer from './pronouns/pronouns_container';


class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const test = {backgroundColor: "blue"};
    return (
      <div id="home">
        <CloudContainer />
        <TimeOrientationContainer />
        <CloudContainer />
        <PronounsContainer />
      </div>
    );
  }
}

export default Home;
