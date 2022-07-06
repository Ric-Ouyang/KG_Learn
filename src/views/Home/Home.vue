<template>
  <el-row class="Illustrate" :gutter="20">  <!-- el-row是使用24格分栏，gutter：栅格间隔，span：栅格占据的列数 -->
    <el-col :xs="8" :sm="6" :md="7" :lg="8" :xl="8">
      <el-card shadow="hover" class="UserCard">  <!-- 登录人员卡片信息 -->
        <div slot="header" class="User" style="margin-top: 10px">
          <img :src="userImg" class="user">
          <div class="userInfo">
            <p class="name">Admin</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p class="login-address">上次登陆地点：<span>重庆邮电大学</span></p>
          <p class="login-time">上次登陆时间：<span>2022/3/28</span></p>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
// @ is an alias to /src
  export default {
    name: 'Home',
    data() {
      return {
        userImg: require("../../assets/defaultUser.png") //返回用户图片地址
      }
    },
  };
</script>

<style lang="less" scoped>
  .UserCard{
    background-color: rgba(240, 248, 255, 0.863);
    .user {
      width: 120px;
        height: 120px;
        border-radius: 0%;
      }
  }
</style>
