import axios from "axios";
//import { Message } from "element-ui";
//import router from '../router' 
//import Vue from 'vue'

/* axios.defaults.baseURL = '/'
Vue.prototype.axios = axios */



let base = 'http://yapi.smart-xwork.cn/mock/145077'
//传送json格式的post请求（这里是POST方法封装）
export const postRequest = (url, params) => {
    return axios({
        method: 'post',
        url: `${base}${url}`,
        data: params
    })
}

//传送json的put请求
export const putRequest = (url, params)=>{
    return axios({
        method: 'put',
        url: `${base}${url}`,
        data: params
    })
}

//传送json的get请求
export const getRequest = (url, params)=>{
    return axios({
        method: 'get',
        url: `${base}${url}`,
        data: params
    })
}

//传送json的delete请求
export const deleteRequest = (url, params)=>{
    return axios({
        method: 'delete',
        url: `${base}${url}`,
        data: params
    })
}
