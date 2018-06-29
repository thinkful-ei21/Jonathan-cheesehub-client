import { createStore, applyMiddleware } from 'redux';
import cheeseReducer from './reducers/cheese';
import thunk from 'redux-thunk';

export default createStore(cheeseReducer, applyMiddleware(thunk));
