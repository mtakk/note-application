import axios from 'axios'

const AXIOS = axios.create({
  baseURL: 'http://localhost:8081',
  timeout: 10000
})

export default {
  login(userName, password) {
    return AXIOS.post('/login/' + userName + '/' + password )
    // GETの例
    // return AXIOS.get('/login/' + userName + '/' + password )
    // TODO: jsonによる通信方を知る(一旦後回し)
  }
}
