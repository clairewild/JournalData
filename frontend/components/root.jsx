import React from 'react';
import { Provider } from 'react-redux';
// import App from './app';

const Root = ({ store }) => {

  return (
    <Provider store={ store }>
      <h1>Hello again</h1>
    </Provider>
  );
};

export default Root;
