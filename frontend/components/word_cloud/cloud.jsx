import React from 'react';
import { render } from 'react-dom';
import WordCloud from 'react-d3-cloud';

class Cloud extends React.Component {
  constructor(props) {
    super(props);
    this.data = this.data.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  data() {
    const entities = this.props.word_count.entities;
    const other_words = this.props.word_count.other_words;
    return entities.concat(other_words);
  }

  handleToggle() {
    this.props.toggleCloud();
  }

  render() {

    // TODO: Make this dynamic
    const fontSizeMapper = word => Math.log2(word.value) * 5;
    const rotate = word => {
      // return word.value % 360;
      return (Math.random() >= 0.5) ? 0 : 90;
    }

    return (
      <div id="word-cloud">
        <WordCloud
          data={this.data()}
          fontSizeMapper={fontSizeMapper}
          rotate={rotate}
          padding={4}
          />
        <div className="settings">
          <p onClick={this.handleToggle}>Proper nouns only</p>
          <p>All words</p>
        </div>
      </div>
    );
  }
}

export default Cloud;
