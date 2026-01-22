import React, { createContext, useState, useContext, useEffect } from 'react';
import { authAPI } from '../services/api';
import { toast } from 'react-hot-toast';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Check if user is logged in on app load
    useEffect(() => {
        checkAuthStatus();
    }, []);

    const checkAuthStatus = async () => {
        const token = localStorage.getItem('access_token');
        const storedUser = localStorage.getItem('user');
        
        if (token && storedUser) {
            try {
                const response = await authAPI.getProfile();
                setUser(response.data);
                setIsAuthenticated(true);
            } catch (error) {
                console.error('Auth check failed:', error);
                logout();
            }
        }
        setLoading(false);
    };

    // Register function
    const register = async (userData) => {
        try {
            const response = await authAPI.register(userData);
            const { user, tokens } = response.data;
            
            localStorage.setItem('access_token', tokens.access);
            localStorage.setItem('refresh_token', tokens.refresh);
            localStorage.setItem('user', JSON.stringify(user));
            
            setUser(user);
            setIsAuthenticated(true);
            toast.success('Registration successful!');
            return { success: true, user };
        } catch (error) {
            toast.error(error.response?.data?.error || 'Registration failed');
            return { success: false, error };
        }
    };

    // Login function
    const login = async (credentials) => {
        try {
            const response = await authAPI.login(credentials);
            const { user, tokens } = response.data;
            
            localStorage.setItem('access_token', tokens.access);
            localStorage.setItem('refresh_token', tokens.refresh);
            localStorage.setItem('user', JSON.stringify(user));
            
            setUser(user);
            setIsAuthenticated(true);
            toast.success('Login successful!');
            return { success: true, user };
        } catch (error) {
            toast.error('Invalid username or password');
            return { success: false, error };
        }
    };

    // Logout function
    const logout = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('user');
        setUser(null);
        setIsAuthenticated(false);
        toast.success('Logged out successfully');
    };

    // Update profile
    const updateProfile = async (userData) => {
        try {
            const response = await authAPI.updateProfile(userData);
            const updatedUser = response.data.user;
            
            localStorage.setItem('user', JSON.stringify(updatedUser));
            setUser(updatedUser);
            toast.success('Profile updated successfully');
            return { success: true, user: updatedUser };
        } catch (error) {
            toast.error('Failed to update profile');
            return { success: false, error };
        }
    };

    const value = {
        user,
        loading,
        isAuthenticated,
        register,
        login,
        logout,
        updateProfile,
        checkAuthStatus,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};