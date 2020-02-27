import axios from "axios";

const baseUrl = "http://localhost:4000";
let token = localStorage.getItem("token");

const req = {
  headers: {
    "Content-Type": "application/json",
    "Authorization":
      `token ${token}`
  }
};

const get = (endpoint, data) => {
  console.log(token)
  return axios.get(
    `${baseUrl}${endpoint}`,
    data,
    {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI0LCJpYXQiOjE1ODI2NDA4ODJ9.GMXMrxOEVUWRWQKxrvwhlfSseyJ1GfYDL-8zr2gvpMI"
      }
    }
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
