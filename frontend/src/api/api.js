import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// Add interceptor to attach token for protected routes
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // Store token on login
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
