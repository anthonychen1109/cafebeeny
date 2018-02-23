import { FETCH_MENU_ID } from '../actions';

const initialState = {
  menuItems: []
}
export default function(state=initialState, action) {
  switch(action.type) {
    case FETCH_MENU_ID:
      console.log('action.payload', action.payload);
      return {
        ...state,
        menuItems: action.payload
      }
    default:
      return state;
  }
}
