import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import searchReducer from './reducers/searchReducer';

export default createStore(
  combineReducers({ searchReducer }),
  {},
  applyMiddleware(createLogger(), thunk, promise())
);
