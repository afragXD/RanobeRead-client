import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-dev.ranobe-read.ru/',
  timeout: 6000,
});

export default api;
