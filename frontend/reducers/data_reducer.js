import merge from 'lodash/merge';

import { RECEIVE_DATA } from '../actions/actions.js';

const _state = {
  word_count: [],
  word_cloud: {
    entities: [],
    other_words: []
  },
  pronouns: {
    area: {
      first_person: [{"date": 1.0, "percentage": 1.0}, {"date": 2.0, "percentage": 1.0}],
      first_plural: [{"date": 1.0, "percentage": 1.0}, {"date": 2.0, "percentage": 1.0}],
      second_person: [{"date": 1.0, "percentage": 1.0}, {"date": 2.0, "percentage": 1.0}],
      third_person: [{"date": 1.0, "percentage": 1.0}, {"date": 2.0, "percentage": 1.0}]
    },
    pie: {
      first_person: 1,
      first_plural: 0,
      second_person: 0,
      third_person: 0
    }
  },
  time_orientation: {
    area: {
      past: [{"date": 1.0, "percentage": 1.0}, {"date": 2.0, "percentage": 1.0}],
      present: [{"date": 1.0, "percentage": 1.0}, {"date": 2.0, "percentage": 1.0}],
      future: [{"date": 1.0, "percentage": 1.0}, {"date": 2.0, "percentage": 1.0}]
    },
    pie: {
      past: 1,
      present: 0,
      future: 0
    }
  },
  tone: {
    summary: {
      Joy: 0,
      Fear: 0,
      Sadness: 0,
      Anger: 0,
      Disgust: 0
    },
    area: {
      Joy: [{"date": 1.0, "percentage": 1.0}, {"date": 2.0, "percentage": 1.0}],
      Fear: [{"date": 1.0, "percentage": 1.0}, {"date": 2.0, "percentage": 1.0}],
      Sadness: [{"date": 1.0, "percentage": 1.0}, {"date": 2.0, "percentage": 1.0}],
      Anger: [{"date": 1.0, "percentage": 1.0}, {"date": 2.0, "percentage": 1.0}],
      Disgust: [{"date": 1.0, "percentage": 1.0}, {"date": 2.0, "percentage": 1.0}]
    }
  },
  date: {
    min: null,
    max: null
  }
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
