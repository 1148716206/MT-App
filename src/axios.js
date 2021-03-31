import axios from 'axios'
axios.defaults.baseURL = 'http://open.duyiedu.com';
axios.interceptors.request.use(function (config) {
  //请求拦截器
  // 在发送请求之前做些什么
  // console.log(config);
  config.params = {
    ...config.params,
    appkey: "chn123_1617085954074",
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

export default axios;

