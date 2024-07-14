import axios from "axios";


const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_API_URL as string,
  withCredentials: true,
  
});

export default instance;
