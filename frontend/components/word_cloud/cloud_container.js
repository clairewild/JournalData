import { connect } from 'react-redux';

import Cloud from './cloud.jsx';
import { toggleProperNouns, toggleCommonNouns } from '../../actions/actions.js';

const mapStateToProps = state => ({
  word_cloud: state.data.word_cloud,
  proper_nouns: state.settings.proper_nouns,
  common_nouns: state.settings.common_nouns
});

const mapDispatchToProps = dispatch => ({
  toggleProperNouns: () => dispatch(toggleProperNouns()),
  toggleCommonNouns: () => dispatch(toggleCommonNouns())
});

export default connect(mapStateToProps, mapDispatchToProps)(Cloud);
