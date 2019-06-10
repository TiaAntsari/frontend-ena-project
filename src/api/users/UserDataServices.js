import axios from 'axios'
import { API_URL } from '../Constants/ApiUrl';
import AuthenticationService from '../../services/AuthenticationService';
import { TOKEN_NAME } from '../Constants/nameConstants';
 
const jwtToken = AuthenticationService.loadToken();
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

  getAllUsers() {
    if (jwtToken == null) {
      let jwt = AuthenticationService.loadToken(TOKEN_NAME)
console.log('*********jwt********executed service'+jwt)
    return axios.get(`${API_URL}/users`, {headers: {'Authorization': jwt}})
    }
    else{
      console.log('*********jwtToken********executed service'+jwtToken)
      return axios.get(`${API_URL}/users`, {headers: {'Authorization': jwtToken}})
    }
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