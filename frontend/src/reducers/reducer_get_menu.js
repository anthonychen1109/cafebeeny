import { FETCH_MENU } from '../actions';

const initialState = {
  menuItems: []
}

export default function(state=initialState, action) {
  switch(action.type) {
    case FETCH_MENU:
      return {
        ...state,
        menuItems: action.payload
      }
    default:
      return state;
  }
}
