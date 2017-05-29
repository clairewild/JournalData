import { connect } from 'react-redux';

import TimeOrientation from './time_orientation';

const mapStateToProps = state => ({
  pie: state.data.time_orientation.pie,
  area: state.data.time_orientation.area,
  date: state.data.date
});

export default connect(mapStateToProps, null)(TimeOrientation);
