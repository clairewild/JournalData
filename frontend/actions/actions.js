import * as ApiUtil from '../util/util';

export const RECEIVE_DATA = "RECEIVE_DATA";

export const receiveData = data => ({
  type: RECEIVE_DATA,
  data
});

export const fetchData = () => dispatch => {
  console.log("fetchData");
  return (
    ApiUtil.fetchData()
      .then(data => dispatch(receiveData(data)))
  );
}
