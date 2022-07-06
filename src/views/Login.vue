<template>
    <div class="loginPage">
        <el-form :rules="rules"
                v-loading="loading"
                element-loading-text="正在登录"
                element-loading-spinner="el-icon-loading"
                element-loading-background="rgba(255, 255, 255, 0.8)"
                ref="loginForm"
                :model="loginForm"
                class="loginContainer">
            <h3 class="loginTitle">系统登录</h3>
            <el-form-item prop="username">
                <!-- imput type：text（创建单行文本输入框）；password（密码输入框）；
                radio 单选按钮；checkbox复选框；button普通按钮；submit表单提交按钮 -->
                <el-input type="text"
                v-model="loginForm.username"
                auto-complete="false"
                placeholder="请输入用户名"></el-input>
            </el-form-item>

            <el-form-item prop="password">
                <el-input type="password"
                auto-complete="false"
                v-model="loginForm.password"
                placeholder="请输入密码">
                </el-input>
            </el-form-item>
            
            <el-form-item prop="code">
                <el-input type="text"
                auto-complete="false"
                v-model="loginForm.code"
                placeholder="点击图片更新验证码"
                style="width:225px; margin-right:5px">
                </el-input>
                <img :src="captchaUrl" @click="updateCaptcha">
            </el-form-item>

            <el-checkbox v-model="checked" class="loginRemember">记住我</el-checkbox>
            <el-button type="primary" style="width:100%" @click="submitLogin">登录</el-button>
        </el-form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "Login",
    data() {
        return{
            /* 验证码图片,url接口地址，  ?time='+new Date()确保验证码正确刷新 */
            /* captchaUrl: '/captcha?time=' + new Date(), */
            checked: true,
            //登录加载动画控制
            loading: false,
            captchaUrl: this.postRequest('/captcha','12345').then(resp => {
                    if (resp) {
                        return resp.data.img
                    }
                }),
            /* 表单数据 */
            loginForm: {
                username: 'admin',
                password: '123',
                code: ''
            },
            //校验规则
            rules: {
                /* 校验用户名，需要填写，若没有提示请输入用户名，在市区焦点时触发。
                在form的rules属性绑定校验规则，在每个form-item中使用prop绑定当前规则 */
                username: [
                    {required: true, message: '请输入用户名', trigger: 'blur'}
                ],
                /* 校验用户名，需要填写，若没有提示，在市区焦点时触发 */
                password: [
                    {required: true, message: '请输入密码', trigger: 'blur'}
                ],
                /* 校验验证码，需要填写，若没有提示，在市区焦点时触发 */
                code: [
                    {required: true, message: '请输入验证码', trigger: 'blur'}
                ],
            }
        }
    },
    methods: {
        /* 提交登录 */
        submitLogin() {
            /* ref用来给元素注册引用信息，使用this.$refs.xxx获取ref标签的对象
            validate是一个表单校验api，这里的valid相当于校验规则 */
            this.$refs.loginForm.validate((valid) => {
            if (valid) {
                    this.loading = true
                    this.postRequest('/login', this.loginForm).then(resp => {
                    if (resp) {
                        this.loading = false
                        /* 获取token,存储在sessionStorage */
/*                         const tokenStr = resp.obj.tokenHead+resp.obj.token;
                        window.sessionStorage.setItem('tokenStr', tokenStr); */

                        //自写：我的url响应得到token
                        const tokenStr = resp.data.obj.tokenHead + resp.data.obj.token;
                        console.log(tokenStr)
                        window.sessionStorage.setItem('tokenStr', tokenStr);
                        
                        this.$router.replace('/Home')  //跳转首页路由
                    }
                })
/*                 自己直接写的axios请求
                    axios.post('http://yapi.smart-xwork.cn/mock/145077/login', {
                    username: this.loginForm.username,
                    password: this.loginForm.password
                })
                .then(resp => {
                    if (resp) {
                        this.$router.push('/Home')
                    }
                }) */
                } else {
                this.$message.error("请输入所有字段！"); /* message是一个消息提示组件 */
                return false;
            }
            });
        },
        /* 更新验证码,调用/captcha接口，通过问号加参数*/
        updateCaptcha() {
            /* this.captchaUrl = '/captcha?time=' + new Date(); */
            this.captchaUrl = this.postRequest('/captcha','12345').then(resp => {
                    if (resp) {
                        /* console.log(resp.data.img) */
                        return resp.data.img
                    }
                })

        }
    },
}
</script>

<style>
    /* 让left和top都是50%，这在水平方向上让div的最左与屏幕的最左相距50%，垂直方向上一样
    再用transform向左（上）平移它自己宽度（高度）的50%，达到居中效果 */
    .loginPage {
        align-items: center;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
    .loginContainer {
        border-radius: 15px; /* 边框 */
        background-clip: padding-box; /* 背景 */
        margin: auto; /* 外边距 */
        width: 350px; /*  宽度 */
        padding: 15px 35px 15px 35px; /* 内边距 */
        background-color: rgba(255, 255, 255, 0.9);
        border: 1px solid #eaeaea; /* 边框 */
        box-shadow: 0 0 20px #d8d8d8; /* 边框阴影 */
    }
    .loginTitle {
        margin: 5px auto 35px auto;
        text-align: center;
    }
    .loginRemember {
        text-align: left;
        margin: 0px 0px 15px 0px;
    }
    /* 验证码那一行的样式 */
    .el-from-item__content {
        display: flex;
        align-items: center;
    }
</style>
