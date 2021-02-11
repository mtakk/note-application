import axios from 'axios'

const AXIOS = axios.create({
  baseURL: 'http://localhost:8081',
  timeout: 1000
})

export default {
  login(userName, password) {
    return AXIOS.get('/login/' + userName + '/' + password )
    // return AXIOS.post('/login', {
    //   userName: userName,
    //   password: password
    // })
    // .catch(error => {
    //   console.log("Error in axios.js: " + error);
    // })
    // return AXIOS.get('/login', {
    //   auth: {
    //     username: userName,
    //     password: password
    //   }
    // });
  }
}
