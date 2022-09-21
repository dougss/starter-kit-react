import axios from 'axios';

const URL = 'https://api.publicapis.org/';

export const api = axios.create({
  baseURL: URL,
});
