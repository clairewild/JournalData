import React from 'react';

import Nav from './nav';
import FileUpload from './file_upload/file_upload';
import WordCountContainer from './word_count/word_count_container';
import CloudContainer from './word_cloud/cloud_container';
import PronounsContainer from './pronouns/pronouns_container';
import TimeOrientationContainer from './time_orientation/time_orientation_container';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.renderFileUpload = this.renderFileUpload.bind(this);
  }

  componentDidMount() {
    this.props.fetchData();
  }

  renderFileUpload() {
    if (!this.props.location.pathname.startsWith("/uploads")) {
      return (
        <div className="full-width-element" id="full-width-upload">
          <div className="inner-element" id="inner-upload">
            <FileUpload />
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div id="home">

        <Nav />
        <div id="nav-buffer"></div>

        {this.renderFileUpload()}

        <div className="full-width-element" id="full-width-cloud">
          <div className="inner-element" id="inner-cloud">
            <CloudContainer />
          </div>
        </div>

        <div className="full-width-element" id="full-width-pronouns">
          <div className="inner-element" id="inner-pronouns">
            <PronounsContainer />
          </div>
        </div>

        <div className="full-width-element" id="full-width-time-orientation">
          <div className="inner-element" id="inner-time-orientation">
            <TimeOrientationContainer />
          </div>
        </div>

      </div>
    );
  }
}

export default Home;

// <div className="full-width-element" id="full-width-word-count">
//   <div className="inner-element" id="inner-word-count">
//     <WordCountContainer />
//   </div>
// </div>
