import { FETCH_MENU_ITEM } from '../actions';

const initialState = {
  menuItems: []
}
export default function(state=initialState, action) {
  switch(action.type) {
    case FETCH_MENU_ITEM:
      // console.log('action.payload', action.payload);
      return {
        ...state,
        menuItems: action.payload
      }
    default:
      return state;
  }
}
