import axios from 'axios';
import Config from 'react-native-config';

const api = axios.create({
    baseURL: Config.BASE_URL,
});

export default api;
