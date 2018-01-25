import { FETCH_MENU } from '../actions';

export default function(state=[], action) {
  switch(action.type) {
    case FETCH_MENU:
      console.log(action.payload.data);
      return [...state,action.payload.data];
    default:
      return state;
  }
}
