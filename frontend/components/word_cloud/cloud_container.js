import { connect } from 'react-redux';

import Cloud from './cloud.jsx';
import { toggleCloud } from '../../actions/actions.js';

const mapStateToProps = state => ({
  word_count: state.data.word_count,
  entities_only: state.settings.entities_only
});

const mapDispatchToProps = dispatch => ({
  toggleCloud: () => dispatch(toggleCloud())
});

export default connect(mapStateToProps, mapDispatchToProps)(Cloud);
