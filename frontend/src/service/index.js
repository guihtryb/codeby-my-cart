import axios from 'axios';

const api = axios.create({
  baseURL: 'https://codebyapi.herokuapp.com/',
});

export default api;
