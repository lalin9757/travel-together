import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Test function
export const testBackendConnection = async () => {
    try {
        const response = await API.get('/');
        return response.data;
    } catch (error) {
        console.error('Backend connection failed:', error);
        return { error: 'Cannot connect to backend' };
    }
};

export default API;