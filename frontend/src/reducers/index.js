import { combineReducers } from 'redux';

import getMenu from './reducer_get_menu';
import getMenuItem from './reducer_get_menu_item';

const rootReducer = combineReducers ({
  getMenu,
  getMenuItem
})

export default rootReducer;
