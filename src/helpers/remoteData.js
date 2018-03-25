import axios from 'axios';

export function fetchFromAPI(endpoint, options) {
  // security+caching to go here

  let query = '';
  if (options && options.query) {
    query = objToQueryString(options.query);
  }

  return axios.get(endpoint + query);
}

function objToQueryString(obj) {
  return Object.keys(obj).reduce((string, key) => {
    const value = encodeURIComponent(obj[key]);
    return `${string}&${key}=${value}`;
  }, '?');
}
