import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store.js';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.store = store; // TODO: remove this later!
  const content = document.getElementById("content");
  ReactDOM.render(<Root store={ store }/>, content);
});
