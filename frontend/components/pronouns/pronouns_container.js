import { connect } from 'react-redux'

import Pronouns from './pronouns';

const mapStateToProps = state => ({
  pie: state.data.pronouns.pie,
  area: state.data.pronouns.area,
  date: state.data.date
});

export default connect(mapStateToProps, null)(Pronouns);
