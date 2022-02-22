import axios from 'axios';

export const axiosInstance = (() => {
  const options = {
    baseURL: 'http://localhost:5000',
    Accept: 'application/json',
    timeout: 25000,
  };
  
  const axiosClient = axios.create(options);

  return axiosClient;
})();

function makeRequest(meta) {
  const { url, method = 'get', params, headers, data, ...rest } = meta;
  let requestHeaders = headers || {};
  const httpOptions = {
    method: method.toLowerCase(),
    url,
    params,
    headers: requestHeaders,
    data,
    ...rest,
  };
  return axiosInstance.request(httpOptions);
}

export default makeRequest;
