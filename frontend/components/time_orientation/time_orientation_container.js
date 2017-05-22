import { connect } from 'react-redux';

import TimeOrientation from './time_orientation';

const mapStateToProps = state => ({
  time_orientation: state.data.time_orientation
});

export default connect(mapStateToProps, null)(TimeOrientation);
