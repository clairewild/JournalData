import { connect } from 'react-redux';

import Cloud from './cloud.jsx';

const mapStateToProps = state => ({
  word_count: state.data.word_count
});

export default connect(mapStateToProps, null)(Cloud);
