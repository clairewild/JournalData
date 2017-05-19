import merge from 'lodash/merge';

import { TOGGLE_CLOUD } from '../actions/actions.js';

const _state = {
  entities_only: false
};

const SettingsReducer = (state = _state, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case TOGGLE_CLOUD:
      newState.entities_only = !newState.entities_only;
      return newState;
    default:
      return state;
  }
};

export default SettingsReducer;
