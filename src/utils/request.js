// axios 封装处理

import axios from "axios"

//1. 封装根域名

//2. 超时时间设置

const request = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 5000
})


//3. 请求拦截器&&相应拦截器

request.interceptors.request.use((config) => {
    return config;
}, (error) => {
    return Promise.reject(error);
})

request.interceptors.response.use((response) => {
    return response;
}, (error) => {
    return Promise.reject(error);
})

export { request };

