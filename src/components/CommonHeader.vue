<template>
    <header>
        <div class="l-content">
            <el-button @click="handleMenu" icon="el-icon-menu" size="mini"></el-button>
            <h4 class="bread" style="color: #fff">首页</h4>  <!--面包屑显示当前页面的路径，快速返回之前的任意页面-->
        </div>
        <div class="c-content">
            <h3 class="mytitle" style="color: #fff">基于区块链的用户接入及信息安全系统</h3>  <!--大标题-->
        </div>
        <div class="r-content">
            <el-dropdown trigger="click" szie="mini"> <!--用户下拉菜单-->
            <span>
                <img :src="userImg" class="user">
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
            </el-dropdown>
        </div>
    </header>
</template>

<script>
    export default {
    name: 'CommonHeader',
    data() {
        return{
        userImg: require('../assets/defaultUser.png') //返回用户图片地址
        }
    },
    methods: {
        handleMenu() {
            this.$store.commit('collapseMenu')  //$store.commit('mutations中的方法名',数据)修改vuex中的数据
        }
    },
    }
</script>

<style lang="less" scoped>
    header {
        display: flex;
        height: 100%;
        justify-content: space-between;
        align-items: center;
    }
    .l-content {
        display: flex;
        align-items: center;
        .el-button {
        margin-right: 20px;
        }
    }
    .r-content {
        .user {
            margin-top: 5px;
            width: 45px;
            height: 45px;
            border-radius: 50%; /* 圆形 */
            background-color: aliceblue;
        }
    }
</style>
