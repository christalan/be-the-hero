import axios from 'axios';

const api = axios.create({
	baseURL: 'https://3333-d1344573-c9fb-4497-a718-d23d0b8c7e47.ws-us02.gitpod.io' //'http://localhost:3333'
})

export default api;