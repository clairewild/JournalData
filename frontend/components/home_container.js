import { connect } from 'react-redux';
import { withRouter } from 'react-router'

import Home from './home';
import { fetchData } from '../actions/actions';

const mapStateToProps = state => ({
  data: state.data
});

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchData())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
