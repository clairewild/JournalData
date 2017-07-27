import * as ApiUtil from '../util/util';

export const fetchData = () => dispatch => {
  return (
    ApiUtil.fetchData()
      .then(data => dispatch(receiveData(data)))
  );
}

export const RECEIVE_DATA = "RECEIVE_DATA";
export const receiveData = data => ({
  type: RECEIVE_DATA,
  data
});

export const TOGGLE_PROPER_NOUNS = "TOGGLE_PROPER_NOUNS";
export const toggleProperNouns = () => ({
  type: TOGGLE_PROPER_NOUNS
});

export const TOGGLE_OTHER_WORDS = "TOGGLE_OTHER_WORDS";
export const toggleOtherWords = () => ({
  type: TOGGLE_OTHER_WORDS
});
