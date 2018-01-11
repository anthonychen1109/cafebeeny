import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/api';

export const FETCH_MENU = 'FETCH_MENU';

export function fetchMenu() {
  const URL = `${BASE_URL}/menu`

  const request = axios.get(URL)
  .then(response => response)
  .catch(error => console.log(error));

  return {
    type: FETCH_MENU,
    payload: request
  }
}
