import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://burgerbuilder-540b5.firebaseio.com/'
});

export default instance;