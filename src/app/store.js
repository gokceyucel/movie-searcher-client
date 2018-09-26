import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware'; // async-await kullanilirsa gerek olmayabilir.

import mathReducer from './reducers/mathReducer';
import userReducer from './reducers/userReducer';

export default createStore(
  combineReducers({ mathReducer, userReducer }),
  {},
  applyMiddleware(createLogger(), thunk, promise())
);
