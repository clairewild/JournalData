import { connect } from 'react-redux'

import Pronouns from './pronouns_chart';

const mapStateToProps = state => ({
  pronouns: state.data.pronouns
});

export default connect(mapStateToProps, null)(Pronouns);
