// authApi.js
import makeApiCall from "./baseApi";

const { REACT_APP_BASE_URL } = process.env;

const login = async (data) => {
  const url = `${REACT_APP_BASE_URL}api/auth/local`;
  return await makeApiCall("post", url, data);
};

const signup = async (data) => {
  const url = `${REACT_APP_BASE_URL}api/auth/local/register`;
  return await makeApiCall("post", url, data);
};

export { login, signup };
