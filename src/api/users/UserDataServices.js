import axios from 'axios'
import { API_URL } from '../Constants/ApiUrl';

class UserDataServices {
  retrieveAllTodos(name) {
    //console.log('executed service')
    return axios.get(`${API_URL}/users/${name}/todos`);
  }

  retrieveTodo(name, id) {
    //console.log('executed service')
    return axios.get(`${API_URL}/users/${name}/todos/${id}`);
  }

  deleteTodo(name, id) {
    //console.log('executed service')
    return axios.delete(`${API_URL}/users/${name}/todos/${id}`);
  }

  updateTodo(name, id, todo) {
    //console.log('executed service')
    return axios.put(`${API_URL}/users/${name}/todos/${id}`, todo);
  }

  createUser(user) {
    //console.log('executed service')
    return axios.post(`${API_URL}/users`, user);
  }

  addUser(user) {
    return axios.post('/user',user)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

}

export default new UserDataServices()