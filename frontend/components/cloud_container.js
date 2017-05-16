import { connect } from 'react-redux';

import Cloud from './cloud.jsx';

const mapStateToProps = state => ({
  data: state.data
});

export default connect(mapStateToProps, null)(Cloud);
