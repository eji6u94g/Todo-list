const axios = require("axios");

//axios
const baseURL = 'http://localhost:3000/todoList'
const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const apiHelper = axiosInstance

