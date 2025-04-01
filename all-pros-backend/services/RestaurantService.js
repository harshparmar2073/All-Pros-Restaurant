import axios from 'axios';

const API_URL = '/api/profile'; 

// Create axios instance with auth headers
const axiosInstance = axios.create();

// Add auth token to requests
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const getRestaurantProfile = async (id) => {
  try {
    const response = await axiosInstance.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const getMyRestaurant = async () => {
  try {
    const response = await axiosInstance.get(`${API_URL}/owner/me`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const updateRestaurantProfile = async (id, data) => {
  try {
    const response = await axiosInstance.put(`${API_URL}/${id}`, data);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const addMenuItem = async (id, categoryName, item) => {
  try {
    const response = await axiosInstance.post(`${API_URL}/${id}/menu`, { categoryName, item });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const removeMenuItem = async (id, categoryIndex, itemIndex) => {
  try {
    const response = await axiosInstance.delete(`${API_URL}/${id}/menu`, { 
      data: { categoryIndex, itemIndex } 
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const addPhoto = async (id, photoUrl) => {
  try {
    const response = await axiosInstance.post(`${API_URL}/${id}/photos`, { photoUrl });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const removePhoto = async (id, photoIndex) => {
  try {
    const response = await axiosInstance.delete(`${API_URL}/${id}/photos`, { 
      data: { photoIndex } 
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const addJob = async (id, jobData) => {
  try {
    const response = await axiosInstance.post(`${API_URL}/${id}/jobs`, jobData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const removeJob = async (id, jobIndex) => {
  try {
    const response = await axiosInstance.delete(`${API_URL}/${id}/jobs`, { 
      data: { jobIndex } 
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const addSpecialty = async (id, specialty) => {
  try {
    const response = await axiosInstance.post(`${API_URL}/${id}/specialties`, { specialty });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const removeSpecialty = async (id, specialtyIndex) => {
  try {
    const response = await axiosInstance.delete(`${API_URL}/${id}/specialties`, { 
      data: { specialtyIndex } 
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
