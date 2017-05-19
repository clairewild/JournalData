import React from 'react';

import TimeOrientationContainer from './time_orientation/time_orientation_container';
import CloudContainer from './word_cloud/cloud_container';
<<<<<<< HEAD
import PronounsContainer from './pronouns/pronouns_container';
=======
>>>>>>> 7d79913f12ff3a29073879a93012a7d1a49db44c

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const test = {backgroundColor: 'blue'};
    return (
<<<<<<< HEAD
      <div>
=======
      <div id='home'>
        <CloudContainer />
>>>>>>> 7d79913f12ff3a29073879a93012a7d1a49db44c
        <TimeOrientationContainer />
        <CloudContainer />
        <PronounsContainer />
      </div>
    );
  }
}

export default Home;
