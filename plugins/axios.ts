import axios from 'axios';

axios.interceptors.request.use(
  config => {
    config.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRhYWMzMjYwMmY2ODAwNmM4ZjczZmMiLCJpYXQiOjE1OTEzODkyMzR9.sqBmyZKGr2gwUWwb2mSv7fdQAmKeeNZ8zuQRnKKFgMk';
    return config;
  }
)