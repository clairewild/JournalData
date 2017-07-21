import { connect } from 'react-redux';

import WordCount from './word_count';

const mapStateToProps = state => ({
  word_count: state.data.word_count,
});

export default connect(mapStateToProps, null)(WordCount);
