import axios from 'axios'

const AXIOS = axios.create({
  baseURL: '/api',
  timeout: 1000
})

export default {
  login(userName, password) {
    return AXIOS.get('/login', {
      auth: {
        username: userName,
        password: password
      }
    });
  }
}
