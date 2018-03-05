import { DELETE_MENU_ITEM } from '../actions';

export function(state={}, action) {
  switch(action.type) {
    case DELETE_MENU_ITEM:
    console.log(state);
      return {
        ...state,
        items: state.items.filter(item => item !== action.payload)
      }
    default:
      return state;
  }
}
