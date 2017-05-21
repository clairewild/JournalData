import { connect } from 'react-redux';

import Cloud from './cloud.jsx';
import { toggleCloud } from '../../actions/actions.js';

const mapStateToProps = state => ({
  word_cloud: state.data.word_cloud,
  entities_only: state.settings.entities_only
});

const mapDispatchToProps = dispatch => ({
  toggleCloud: () => dispatch(toggleCloud())
});

export default connect(mapStateToProps, mapDispatchToProps)(Cloud);
