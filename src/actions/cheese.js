import { API_BASE_URL } from '../config';

export const FETCH_CHEESES_REQUEST = 'FETCH_CHEESES_REQUEST';
const fetchCheesesRequest = () => {
  return {
    type: FETCH_CHEESES_REQUEST
  };
};

export const FETCH_CHEESES_SUCCESS = 'FETCH_CHEESES_SUCCESS';
const fetchCheesesSuccess = cheeses => {
  return {
    type: FETCH_CHEESES_SUCCESS,
    cheeses
  };
};

export const FETCH_CHEESES_ERROR = 'FETCH_CHEESES_ERROR';
const fetchCheesesError = err => {
  return {
    type: FETCH_CHEESES_ERROR,
    err
  };
};

export const fetchCheeses = () => dispatch => {
  dispatch(fetchCheesesRequest());
  fetch(`${API_BASE_URL}/cheeses`, {
    method: 'GET'
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(data => dispatch(fetchCheesesSuccess(data.cheeses)))
    .catch(err => dispatch(fetchCheesesError(err)));
};
