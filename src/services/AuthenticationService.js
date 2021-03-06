import axios from 'axios'
import { API_URL } from '../api/Constants/ApiUrl';
import { TOKEN_NAME, USERNAME_ATTRIBUTE_NAME } from '../api/Constants/nameConstants';



class AuthenticationService {

// ##########################################

    executeJwtAuthenticationService(username, password) {
      // console.log("username: " + username + "\nPassword: " + password);
      return axios.post(`${API_URL}/login`, {
        username,
        password
      })
    }

    saveToken(jwtToken) {
      localStorage.setItem(TOKEN_NAME, jwtToken);
    }

    loadToken() {
        let jwt = localStorage.getItem(TOKEN_NAME);
        if (jwt === null) return ''
        return jwt
      
    }

    saveUsernameLoggedIn(username) {
        localStorage.setItem(USERNAME_ATTRIBUTE_NAME, username);
    }

    getUsernameLoggedIn() {
        let username = localStorage.getItem(USERNAME_ATTRIBUTE_NAME)
        if (username === null) return ''
        return username
    }

    logout() {
      localStorage.removeItem(TOKEN_NAME);
      localStorage.removeItem(USERNAME_ATTRIBUTE_NAME);
    }
    

    // ##########################################

    executeBasicAuthenticationService(username, password) {
        return axios.get(`${API_URL}/basicauth`,
            { headers: { authorization: this.createBasicAuthToken(username, password) } })
    }

    /* registerSuccessfulLoginForJwt(username, token) {
        localStorage.setItem(TOKEN_NAME, token)
        this.setupAxiosInterceptors(this.createJWTToken(token))
    } 

    createJWTToken(token) {
        return 'Bearer ' + token
    }
    */

    isUserLoggedIn() {
        let user = localStorage.getItem(USERNAME_ATTRIBUTE_NAME)
        if (user === null) return false
        return true
    }

    getLoggedInUserName() {
        let user = localStorage.getItem(USERNAME_ATTRIBUTE_NAME)
        if (user === null) return ''
        return user
    }

    setupAxiosInterceptors(token) {

        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = token
                }
                return config
            }
        )
    }
}

export default new AuthenticationService()