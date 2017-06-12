import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';

import HomeContainer from './home_container';

const Root = ({ store }) => {

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={HomeContainer} />
        <Route path="/uploads/:filename" component={HomeContainer} />
      </Router>
    </Provider>
  );
};

export default Root;
