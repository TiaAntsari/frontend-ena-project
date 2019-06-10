import axios from 'axios'
import { API_URL } from '../Constants/ApiUrl';
import AuthenticationService from '../../services/AuthenticationService';
import { TOKEN_NAME } from '../Constants/nameConstants';
 
const jwtToken = AuthenticationService.loadToken();
class EtudiantDataServices {

  retrieveTodo(name, id) {
    //console.log('executed service')
    return axios.get(`http://localhost:8080/users/${name}/todos/${id}`);
  }

  deleteTodo(name, id) {
    //console.log('executed service')
    return axios.delete(`http://localhost:8080/users/${name}/todos/${id}`);
  }

  updateTodo(name, id, todo) {
    //console.log('executed service')
    return axios.put(`http://localhost:8080/users/${name}/todos/${id}`, todo);
  }

  // Etudiants

  getAllEtudiants() {
    if (jwtToken == null) {
      let jwt = AuthenticationService.loadToken(TOKEN_NAME)
    
    console.log('********************************executed service getAllEtudiants')
    return axios.get(`${API_URL}/etudiants`, {headers: {'Authorization': jwt}})
          }
  }

  createEtudiant(etudiant) {
    //console.log('executed service')
    return axios.post(`${API_URL}/etudiants`, etudiant);
  }

}

export default new EtudiantDataServices()