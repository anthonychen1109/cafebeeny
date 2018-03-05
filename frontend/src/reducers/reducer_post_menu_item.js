import { POST_MENU_ITEM } from '../actions';

const initialState = {
}

export function(state=initialState, action) {
  switch(action.type) {
    case POST_MENU_ITEM:
      return {
        ...state,
        action.payload
      }
    default:
      return state;
  }
}
