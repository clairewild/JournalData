import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.props.fetchData();
  }

  render() {
    return (
      <div>
        <p>This is the data!</p>
      </div>
    )
  }
}

export default Home;
