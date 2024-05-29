import { apiUrl } from '../config/api.config';
import axios from 'axios';

export const getAllFiles = async (params) => {
  const response = await axios.get(`${apiUrl}/files`, { params });

  return response?.data || [];
};

export const getFileById = async (id) => {
  const response = await axios.get(`${apiUrl}/files/${id}`);

  return response?.data || {};
};

export const uploadFile = async (formData) => {
  const response = await axios.post(`${apiUrl}/files`, formData);

  return response?.data || {};
};
