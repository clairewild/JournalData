import merge from 'lodash/merge';

import { RECEIVE_DATA } from '../actions/actions.js';

const DataReducer = (state = _state, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_DATA:
      console.log(action);
      return action.data;
    default:
      return state;
  }
};

export default DataReducer;
