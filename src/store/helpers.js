import axios from 'axios';

export function fetchFromAPI(endpoint) {
  // security+caching to go here
  return axios.get(endpoint);
}
