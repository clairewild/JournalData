import React from 'react';
import { render } from 'react-dom';
// import WordCloud from 'react-d3-cloud';

class Cloud extends React.Component {
  constructor(props) {
    super(props);
    // this.data = this.data.bind(this);
    this.cloudImage = this.cloudImage.bind(this);
  }

  // data() {
  //   let entities = this.props.word_cloud.entities;
  //   let other_words = this.props.word_cloud.other_words;
  //
  //   if (!this.props.proper_nouns) {
  //     entities = [];
  //   }
  //   if (!this.props.common_nouns) {
  //     other_words = [];
  //   }
  //   return entities.concat(other_words);
  // }

  toggleButtons() {
    return (
      <div>
        <div className="toggle-button">
          <label className="switch">
              <input onClick={this.props.toggleProperNouns} type="checkbox"></input>
              <div className="slider"></div>
          </label>
          <p>Proper nouns</p>
        </div>

        <div className="toggle-button">
          <label className="switch">
              <input onClick={this.props.toggleCommonNouns} type="checkbox"></input>
              <div className="slider"></div>
          </label>
          <p>Common nouns</p>
        </div>
      </div>
    );
  }

  cloudImage() {
    let filename = "book_mask.png";

    if (this.props.proper_nouns && this.props.common_nouns) {
      filename = "allwords.png";
    }
    else if (this.props.proper_nouns) {
      filename = "entities.png";
    }
    else if (this.props.common_nouns) {
      filename = "otherwords.png";
    }
    return (
      <img src={`../../../assets/${filename}`} alt="word-cloud" />
    );
  }

  render() {
    // const fontSizeMapper = word => Math.log2(word.value) * 5;
    // const rotate = word => {
    //   return (Math.random() >= 0.5) ? 0 : 90;
    // }

    return (
      <div>
        <div className="text-area cloud-text">
          <h3>Word Frequency</h3>

          { this.toggleButtons() }

        </div>

        <div className="word-cloud">

          { this.cloudImage() }

        </div>
      </div>
    );
  }
}

export default Cloud;

// <WordCloud
//   data={this.data()}
//   fontSizeMapper={fontSizeMapper}
//   rotate={rotate}
//   padding={4}>
// </WordCloud>
