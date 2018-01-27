import { combineReducers } from 'redux';

import fetchmenu from './reducer_fetch';
import postmenu from './reducer_post';
import updatemenu from './reducer_update';

const rootReducer = combineReducers({
  fetchmenu,
  postmenu,
  updatemenu
});

export default rootReducer;
