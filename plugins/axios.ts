import axios from 'axios';

axios.interceptors.request.use(
  config => {
    config.headers.common['Authorization'] = 'Bearer ' + process.env.token;
    return config;
  }
)