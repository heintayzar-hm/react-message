import axiosInstance from '../axios/axios';

export const getMessage = async (id) => {
  try {
    const response = await axiosInstance.get(`/messages/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getMessages = async () => {
  try {
    const response = await axiosInstance.get('/messages');
    return response.data;
  } catch (error) {
    return error;
  }
};

export const createMessage = async (message) => {
  try {
    const response = await axiosInstance.post('/messages', message);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const updateMessage = async (id, message) => {
  try {
    const response = await axiosInstance.put(`/messages/${id}`, message);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const deleteMessage = async (id) => {
  try {
    const response = await axiosInstance.delete(`/messages/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getRandomMessage = async () => {
  try {
    const response = await axiosInstance.get('/random-messages');
    return response.data;
  } catch (error) {
    return error;
  }
};
