import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000';

export const FETCH_MENU = 'FETCH_MENU';
export const POST_MENU = 'POST_MENU';

export function fetchMenu() {
  const url = `${BASE_URL}/menu/`;
  const request = axios.get(url);
  // .then(response => console.log(response))
  // .catch(error => console.log(error));

  return {
    type: FETCH_MENU,
    payload: request
  }
}

export function postMenu(menuid, name, subtext, image) {
  const url = `${BASE_URL}/menu/`;
  const request = axios.post(url, {
    "menuid": menuid,
    "name": name,
    "subtext": subtext,
    "image": image
  }).then(response => console.log(response))
  .catch(error => console.log(error));

  return {
    type: POST_MENU,
    payload: request
  }
}
