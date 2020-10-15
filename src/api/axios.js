import axios from 'axios';
import {message} from 'antd';

//Add a response interceptor change promise
axios.interceptors.response.use(function (response) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  //get data directly
  return response.data;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Message all the response errors
  message.error('response error ' + error.message)
  // return a new promise(pending), break promise chain
  return new Promise(() => {});
});

export  default axios;