<template>
  <el-container id="mainpage">
    <el-aside width="auto">
      <common-aside></common-aside>
    </el-aside>
    <el-container>
      <el-header style="height: 70px; min-height: 50px">
        <common-header></common-header>
      </el-header>
      <el-main>
        <router-view></router-view>  <!-- 路由展示 -->
      </el-main>

      <el-footer>
        ©Rico Ouyang
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from '../components/CommonAside.vue'
import CommonHeader from '../components/CommonHeader.vue'
// @ is an alias to /src
  export default {
    name: 'MainPage',
    components: {
      CommonAside,
      CommonHeader
    },
/*     computed: {
        elWidth() {
            return this.$store.state.tab.isCollapse ? 'auto' : '300px'
        }
    } */
  };
</script>

<style lang="less" scoped>
  #mainpage {
    height: 100vh;
  }
  .el-footer {
    color: rgb(255, 255, 255);
    text-align: center;
    line-height: 60px;
    width: 100%;
  }
  .el-header {
    color: rgb(255, 255, 255);
    width: 100%;
  }
/*   .el-aside {
    color: rgb(255, 255, 255);
  } */
  .el-main {
    background-color: #e9eef383;
    text-align: center;
    width: 100%;
    height: 100%;
  }

</style>
