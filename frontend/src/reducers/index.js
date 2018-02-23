import { combineReducers } from 'redux';

import fetchmenu from './reducer_fetch';
import fetchMenuId from './reducer_fetchid';
import postmenu from './reducer_post';
import updatemenu from './reducer_update';

const rootReducer = combineReducers({
  fetchmenu,
  fetchMenuId,
  postmenu,
  updatemenu,
});

export default rootReducer;
