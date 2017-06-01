import * as ApiUtil from '../util/util';

export const RECEIVE_DATA = "RECEIVE_DATA";
export const receiveData = data => ({
  type: RECEIVE_DATA,
  data
});

export const fetchData = () => dispatch => {
  return (
    ApiUtil.fetchData()
      .then(data => dispatch(receiveData(data)))
  );
}

export const TOGGLE_PROPER_NOUNS = "TOGGLE_PROPER_NOUNS";
export const toggleProperNouns = () => ({
  type: TOGGLE_PROPER_NOUNS
});

export const TOGGLE_COMMON_NOUNS = "TOGGLE_COMMON_NOUNS";
export const toggleCommonNouns = () => ({
  type: TOGGLE_COMMON_NOUNS
});
