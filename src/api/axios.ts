import axios from 'axios';

const API_BASE_URL = 'http://localhost:5001/api';
export const BACKEND_URL = 'http://localhost:5001';

const axiosInstance = axios.create({
    baseURL: API_BASE_URL
});

axiosInstance.interceptors.request.use(
    (config) => {
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('token');
            if (token) {
                config.headers['x-auth-token'] = token;
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            if (typeof window !== 'undefined') {
                localStorage.removeItem('token');
                // Optional: Redirect to login if needed
                // window.location.href = '/sign-in'; 
            }
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
