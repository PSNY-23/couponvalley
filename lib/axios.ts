import axios from 'axios';

const baseURL = 
  typeof window === 'undefined'
    ? process.env.BACKEND_URL           //this will be Used on the server (Node.js)
    : process.env.NEXT_PUBLIC_BACKEND_URL; //Used on the client (browser)


const api = axios.create({
  baseURL: baseURL,
  withCredentials: true, // only for cookies/authentication not for others
});

export default api;
