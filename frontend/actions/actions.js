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

export const TOGGLE_CLOUD = "TOGGLE_CLOUD";
export const toggleCloud = () => ({
  type: TOGGLE_CLOUD
});
