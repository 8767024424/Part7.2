// src/store.js
import { createStore, combineReducers } from 'redux';
import notificationReducer from './reducers/notificationReducer';

const reducer = combineReducers({
  notification: notificationReducer,
  // You will add more reducers here for blogs, users, etc.
});

const store = createStore(reducer);

export default store;