import React from 'react';
import { render } from 'react-dom';
import WordCloud from 'react-d3-cloud';

class Cloud extends React.Component {
  constructor(props) {
    super(props);
    this.data = this.data.bind(this);
  }

  data() {
    const entities = this.props.word_cloud.entities;
    if (this.props.entities_only) {
      return entities;
    }
    const other_words = this.props.word_cloud.other_words;
    return entities.concat(other_words);
  }

  toggleButtons() {
    // const clickable = { color: 'blue' };
    if (this.props.entities_only) {
      return (
        <div className="cloud-toggle">
          <div id='selected'><p>Proper nouns only</p></div>
          <div onClick={ this.props.toggleCloud } id='clickable'><p>All words</p></div>

          // TODO: create 2 actions, one for each toggle, get rid of entities_only
          <label className="switch" onClick={ this.props.toggleCloud }>
              <input type="checkbox"></input>
              <div className="slider"></div>
          </label>

          <label className="switch">
              <input type="checkbox"></input>
              <div className="slider"></div>
          </label>

        </div>
      );
    }
    return (
      <div className="cloud-toggle">
        <div onClick={ this.props.toggleCloud } id='clickable'><p>Proper nouns only</p></div>
        <div id='selected'><p>All words</p></div>
      </div>
    );
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
        <div className="text-area">
          <h3>Word Frequency</h3>
          { this.toggleButtons() }
        </div>

        <WordCloud
          data={ this.data() }
          fontSizeMapper={ fontSizeMapper }
          rotate={ rotate }
          padding={ 4 }>
        </WordCloud>
      </div>
    );
  }
}

export default Cloud;
