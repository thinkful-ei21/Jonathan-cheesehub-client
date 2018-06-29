import {
  FETCH_CHEESES_REQUEST,
  FETCH_CHEESES_SUCCESS,
  FETCH_CHEESES_ERROR
} from '../actions/cheese';

const initialState = {
  cheeses: [],
  loading: false,
  error: null
};

const cheeseReducer = (state = initialState, action) => {
  if (action.type === FETCH_CHEESES_REQUEST) {
    return {
      ...state,
      loading: true
    };
  }
  if (action.type === FETCH_CHEESES_SUCCESS) {
    return {
      ...state,
      loading: false,
      cheeses: action.cheeses
    };
  }
  if (action.type === FETCH_CHEESES_ERROR) {
    return {
      ...state,
      loading: false,
      error: true
    };
  }
  return state;
};

export default cheeseReducer;
