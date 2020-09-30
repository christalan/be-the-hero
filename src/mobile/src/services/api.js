import axios from 'axios';

const api = axios.create({
	baseURL: 'https://3333-dd3575f4-176d-4e9c-975d-e440076dd992.ws-us02.gitpod.io' //'http://192.168.####:3333'
});

export default api;