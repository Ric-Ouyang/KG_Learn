import axios from "axios";
import { Message } from "element-ui";
import router from '../router'

//请求拦截器
axios.interceptors.request.use(config => {
    if (window.sessionStorage.getItem('tokenStr')){
        //如果存在token，之后每次请求就在请求头添加key为Authorization，value为token，携带这个token
        config.headers['Authorization'] = window.sessionStorage.getItem('tokenStr');
    }
    return config;
}, error => {
    console.log(error)
})



/* 响应拦截器： 统一处理各种响应问题 */
// 添加响应拦截器
/* axios.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  }); */

  axios.interceptors.response.use(success => {
    //业务逻辑错误：成功调到后端接口,状态码200 OK，但是业务逻辑错误返回代码
    //error错误：没有访问到服务器
    //后端返回code响应码，message响应信息
    if (success.status && success.status == 200){
        if (success.data.code == 500 || success.data.code == 401 || success.data.code == 403){
            Message.error({
                message:success.data.message
            })
            return;
        }
        if (success.data.message) {
            Message.success({
                message: success.data.message
            })
        } 
    }
    return success.data;  /* 返回成功的数据 */
    }, error => {
        if (error.response.code == 504 || error.response.code == 404){
            Message.error({
                message: '服务器走丢了( ╯□╰ )'
            })
        } else if (error.response.code == 403) {
            Message.error({
                message: '权限不足，请联系管理员！'
            })
        } else if (error.response.code == 401) {
            Message.error({
                message: '尚未登录，请登录'
            })
            router.replace('/')  /* 跳转到登录页 */
        } else {
            if (error.response.data.message) {
                Message.error({
                    message: error.response.data.message  /* 提示未知的错误 */
                })
            } else {
                Message.error({
                    message: '未知错误！'  /* 提示未知的错误 */
                })
            }
        }
        return;  /* 由于有错误，返回空 */
})

