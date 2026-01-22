import axios from 'axios';

// Create axios instance
const API = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor to add token
API.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('access_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor to handle token refresh
API.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        
        // If error is 401 and not already retried
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            
            try {
                const refreshToken = localStorage.getItem('refresh_token');
                const response = await axios.post(
                    'http://localhost:8000/api/auth/token/refresh/',
                    { refresh: refreshToken }
                );
                
                const { access } = response.data;
                localStorage.setItem('access_token', access);
                originalRequest.headers.Authorization = `Bearer ${access}`;
                
                return API(originalRequest);
            } catch (refreshError) {
                // Refresh token failed, logout user
                localStorage.removeItem('access_token');
                localStorage.removeItem('refresh_token');
                localStorage.removeItem('user');
                window.location.href = '/login';
                return Promise.reject(refreshError);
            }
        }
        
        return Promise.reject(error);
    }
);

// Auth API functions
export const authAPI = {
    register: (userData) => API.post('/auth/register/', userData),
    login: (credentials) => API.post('/auth/login/', credentials),
    logout: () => API.post('/auth/logout/'),
    getProfile: () => API.get('/auth/profile/'),
    updateProfile: (userData) => API.put('/auth/profile/', userData),
    changePassword: (passwords) => API.post('/auth/change-password/', passwords),
};

export default API;