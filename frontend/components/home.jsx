import React from 'react';

import Nav from './nav';

import WordCountContainer from './word_count/word_count_container';
import CloudContainer from './word_cloud/cloud_container';
import PronounsContainer from './pronouns/pronouns_container';
import TimeOrientationContainer from './time_orientation/time_orientation_container';

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
        <Nav />
        <WordCountContainer />
        <CloudContainer />
        <PronounsContainer />
        <TimeOrientationContainer />
      </div>
    );
  }
}

export default Home;
