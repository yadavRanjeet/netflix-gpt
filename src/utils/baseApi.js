// BaseApi.js
import axios from "axios";

const makeApiCall = async (method, url, data = {}, additionalHeaders = {}) => {
  const headers = {
    // Authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  const headersWithContentType = {
    ...headers,
    ...additionalHeaders,
  };
  const config = {
    method,
    url,
    headers: headersWithContentType,
    data,
  };
  return await axios.request(config);
};

export default makeApiCall;
