import axios from 'axios';

const API_URL = '/api/users';

const userService = {
  createUser: (user) => axios.post(API_URL, user),
  getUsers: () => axios.get(API_URL),
  updateUser: (id, user) => axios.put(`${API_URL}/${id}`, user),
  deleteUser: (id) => axios.delete(`${API_URL}/${id}`)
};

export default userService;
