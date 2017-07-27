import merge from 'lodash/merge';

import { TOGGLE_PROPER_NOUNS, TOGGLE_OTHER_WORDS } from '../actions/actions';

const _state = {
  proper_nouns: true,
  other_words: true
};

const SettingsReducer = (state = _state, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case TOGGLE_PROPER_NOUNS:
      newState.proper_nouns = !state.proper_nouns;
      return newState;
    case TOGGLE_OTHER_WORDS:
      newState.other_words = !state.other_words;
      return newState;
    default:
      return state;
  }
};

export default SettingsReducer;
