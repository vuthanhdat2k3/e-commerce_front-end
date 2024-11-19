
import axios from 'axios';
const DEPLOYED='https://n9-ecommerce-b6cfade35d7b.herokuapp.com'
const LOCALHOST='http://localhost:5454'

export const API_BASE_URL = DEPLOYED

const api = axios.create({
  baseURL: API_BASE_URL,
});

const token = localStorage.getItem('jwt');

api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

api.defaults.headers.post['Content-Type'] = 'application/json';

export default api;
