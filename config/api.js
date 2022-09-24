import axios from "axios";

export const API = axios.create({
  baseURL: "https://api.kontenbase.com/query/api/v1/82e3f563-a106-4a1e-8f77-574344f7ede8/",
});

export const setAuthToken = (token) => {
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer $(token)`;
  } else {
    delete API.defaults.headers.common[Authorization];
  }
};
