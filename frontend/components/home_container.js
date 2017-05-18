import { connect } from 'react-redux';

import Home from './home';
import { fetchData } from '../actions/actions';

// TODO: do we even need this?
const mapStateToProps = state => ({
  data: state.data
});

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchData())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
