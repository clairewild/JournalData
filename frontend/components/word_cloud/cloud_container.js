import { connect } from 'react-redux';

<<<<<<< HEAD
import Cloud from './cloud';
=======
import Cloud from './cloud.jsx';
import { toggleCloud } from '../../actions/actions.js';
>>>>>>> 7d79913f12ff3a29073879a93012a7d1a49db44c

const mapStateToProps = state => ({
  word_count: state.data.word_count,
  entities_only: state.settings.entities_only
});

const mapDispatchToProps = dispatch => ({
  toggleCloud: () => dispatch(toggleCloud())
});

export default connect(mapStateToProps, mapDispatchToProps)(Cloud);
