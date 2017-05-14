import { connect } from 'react-redux';

import TimeOrientationChart from './time_orientation_chart.jsx';

const mapStateToProps = state => ({
  data: state.data
});

export default connect(mapStateToProps, null)(TimeOrientationChart);
