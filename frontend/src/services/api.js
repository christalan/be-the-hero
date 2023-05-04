import axios from 'axios';

const api = axios.create({
  baseURL: 'https://be-the-hero-api-ntqg.onrender.com/' // 'http://localhost:3333'
})

export default api