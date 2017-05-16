import React from 'react';
import { render } from 'react-dom';
import WordCloud from 'react-d3-cloud';

class Cloud extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = [
      { text: 'Hey', value: 1000 },
      { text: 'lol', value: 200 },
      { text: 'first impression', value: 800 },
      { text: 'very cool', value: 1000000 },
      { text: 'duck', value: 10 },
    ];

    const fontSizeMapper = word => Math.log2(word.value) * 5;
    const rotate = () => {
      return (Math.random() >= 0.5) ? 0 : 90;
    }

    return (
      <WordCloud
        data={data}
        fontSizeMapper={fontSizeMapper}
        rotate={rotate}
        padding={30}
      />
    );
  }
}

export default Cloud;
