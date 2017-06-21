import { connect } from 'react-redux'

import Tone from './tone';

const mapStateToProps = state => ({
  summary: state.data.tone.summary,
  area: state.data.tone.area,
  date: state.data.date
});

export default connect(mapStateToProps, null)(Tone);
