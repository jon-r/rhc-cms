import axios from 'axios';

export function fetchFromAPI(endpoint, options) {
  // security+caching to go here

  let query = '';
  if (options && options.query) {
    query = objToQueryString(options.query);
  }

  let method = 'get';
  if (options && options.method) {
    method = options.method;
  }

  return axios[method](endpoint + query, options && options.body)
    .then(res => res.data);
}

function objToQueryString(obj) {
  return Object.keys(obj)
    .reduce((string, key) => `${string}&${key}=${encodeURIComponent(obj[key])}`, '?');
}
