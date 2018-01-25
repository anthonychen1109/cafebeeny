import { POST_MENU } from '../actions';

export default function(state=[], action) {
  switch(action.type) {
    case POST_MENU:
      console.log(action.payload);
      return [action.payload, ...state];
    default:
      return state;
  }
}
