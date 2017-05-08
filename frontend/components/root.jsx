import React from 'react';
import { Provider } from 'react-redux';
import HomeContainer from './home_container';

const Root = ({ store }) => {

  return (
    <Provider store={ store }>
      <HomeContainer />
    </Provider>
  );
};

export default Root;
