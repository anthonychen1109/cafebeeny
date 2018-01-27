import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000';

export const FETCH_MENU = 'FETCH_MENU';
export const POST_MENU = 'POST_MENU';
export const UPDATE_MENU = 'UPDATE_MENU';

export function fetchMenu() {
  const url = `${BASE_URL}/menu/`;
  const request = axios.get(url)
  .then(response => response.data)
  .catch(error => console.log(error));

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

export function updateMenu(menuid, name, subtext, image) {
  let id = menuid;
  const url = `${BASE_URL}/menu/${id}`;
  const request = axios.post(url, {
    "name": name,
    "subtext": subtext,
    "image": image
  }).then(response => console.log(response))
  .catch(error => console.log(error));

  return {
    type: UPDATE_MENU,
    payload: request
  }
}
