import merge from 'lodash/merge';

import { RECEIVE_DATA } from '../actions/actions.js';

const _state = {
  time_orientation: {
    area: {
      past: [{"date": 1.0, "percentage": 1.0}, {"date": 2.0, "percentage": 1.0}],
      present: [{"date": 1.0, "percentage": 1.0}, {"date": 2.0, "percentage": 1.0}],
      future: [{"date": 1.0, "percentage": 1.0}, {"date": 2.0, "percentage": 1.0}]
    },
    pie: {

    }
  },
  word_cloud: {
    entities: [],
    other_words: []
  },
  pronouns: {
    first_person: [],
    first_plural: [],
    second_person: [],
    third_person: []
  },
  word_count: []
};

const DataReducer = (state = _state, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_DATA:
      return action.data;
    default:
      return state;
  }
};

export default DataReducer;
