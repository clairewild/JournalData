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
              <input onClick={this.props.toggleOtherWords} type="checkbox"></input>
              <div className="slider"></div>
          </label>
          <p>Other words</p>
        </div>
      </div>
    );
  }

  cloudImage() {
    const urls = this.props.urls;
    let url = "https://res.cloudinary.com/dq5kxnx9d/image/upload/v1501875232/book_mask_olgmeu.jpg";

    if (this.props.proper_nouns && this.props.other_words && urls.all_words) {
      url = urls.all_words;
    }
    else if (this.props.proper_nouns && urls.proper_nouns) {
      url = urls.proper_nouns;
    }
    else if (this.props.other_words && urls.other_words) {
      url = urls.other_words;
    }
    return (
      <img src={url} alt="word-cloud" />
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
