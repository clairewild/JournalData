import { connect } from 'react-redux';

import Cloud from './cloud';
import { toggleProperNouns, toggleOtherWords } from '../../actions/actions';

const mapStateToProps = state => ({
  proper_nouns: state.settings.proper_nouns,
  other_words: state.settings.other_words
});

const mapDispatchToProps = dispatch => ({
  toggleProperNouns: () => dispatch(toggleProperNouns()),
  toggleOtherWords: () => dispatch(toggleOtherWords())
});

export default connect(mapStateToProps, mapDispatchToProps)(Cloud);
