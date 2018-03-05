import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000';

export const FETCH_MENU = 'FETCH_MENU';
export const POST_MENU_ITEM = 'POST_MENU_ITEM';
export const FETCH_MENU_ITEM = 'FETCH_MENU_ITEM';

export function fetchMenu() {
  const url = `${BASE_URL}/menu/`;

  const request = axios.get(url).then(response => response.data).catch(err => console.log(err));

  return {
    type: FETCH_MENU,
    payload: request
  }
}

export function postMenuItem(id, name, subtext, image) {
  const url = `${BASE_URL}/menu/`;

  const request = axios.post(url, {
    "menuid": id,
    "name": name,
    "subtext": subtext,
    "image": image
  }).then(response => response.data).catch(err => console.log(err));

  return {
    type: POST_MENU_ITEM,
    payload: request
  }
}

export function fetchMenuItem(id) {
  const url = `${BASE_URL}/menu/${id}`;
  const request = axios.get(url)
    .then(response => response.data)
    .catch(error => console.log(error));
  return {
    type: FETCH_MENU_ITEM,
    payload: request
  }
}
