import merge from 'lodash/merge';

import { TOGGLE_PROPER_NOUNS, TOGGLE_COMMON_NOUNS } from '../actions/actions';

const _state = {
  proper_nouns: true,
  common_nouns: true
};

const SettingsReducer = (state = _state, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case TOGGLE_PROPER_NOUNS:
      newState.proper_nouns = !state.proper_nouns;
      return newState;
    case TOGGLE_COMMON_NOUNS:
      newState.common_nouns = !state.common_nouns;
      return newState;
    default:
      return state;
  }
};

export default SettingsReducer;
