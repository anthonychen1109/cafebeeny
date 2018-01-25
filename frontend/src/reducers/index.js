import { combineReducers } from 'redux';

import fetchmenu from './reducer_fetch';
import postmenu from './reducer_post';

const rootReducer = combineReducers({
  fetchmenu,
  postmenu
});

export default rootReducer;
