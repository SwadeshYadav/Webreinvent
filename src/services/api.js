import axios from 'axios';

const api = axios.create({
  baseURL: 'https://reqres.in/api',
});

// Function to fetch users
export const fetchUsers = (page = 1) => {
  return api.get(`/users?page=${page}`);
};

// Function to fetch a user by ID
export const fetchUserById = (id) => {
    return api.get(`/users/${id}`);
  };
  

export default api;
