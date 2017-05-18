import { connect } from 'react-redux';

import TimeOrientationChart from './time_orientation_chart';

const mapStateToProps = state => ({
  time_orientation: state.data.time_orientation
});

export default connect(mapStateToProps, null)(TimeOrientationChart);
