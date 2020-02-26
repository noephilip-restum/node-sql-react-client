import axios from "axios";

const baseUrl = "http://localhost:4000";

const req = {
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI0LCJpYXQiOjE1ODI2ODc1OTN9.gAx_SD3tu8lNOLgICJyr35klRZrZIlalACCfH-pAlkc"
  }
};

const get = (endpoint, data) => {
  return axios.get(
    `${baseUrl}${endpoint}`,
    data,
    endpoint !== "/login" ? req : null
  );
};

const post = (endpoint, data) => {
  return axios.post(
    `${baseUrl}${endpoint}`,
    data,
    endpoint !== "/login" ? req : null
  );
};

const patch = (endpoint, data) => {
  return axios.patch(
    `${baseUrl}${endpoint}`,
    data,
    endpoint !== "/login" ? req : null
  );
};

const remove = (endpoint, data) => {
  return axios.delete(
    `${baseUrl}${endpoint}`,
    data,
    endpoint !== "/login" ? req : null
  );
};

export { get, patch, post, remove };
