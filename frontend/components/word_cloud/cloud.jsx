import React from 'react';
import { render } from 'react-dom';

class Cloud extends React.Component {
  constructor(props) {
    super(props);
    this.cloudImage = this.cloudImage.bind(this);
  }

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
      <img src={require(`../../../assets/${filename}`)} alt="word-cloud" />
    );
  }

  render() {
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
