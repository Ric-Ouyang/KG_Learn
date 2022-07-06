<template>
    <el-menu
        class="el-menu-vertical-demo" 
        @open="handleOpen" 
        @close="handleClose" 
        :collapse="isCollapse"
        :collapse-transition = "true"
        background-color="#202c7c"
        text-color="#fff">
        <h4>{{isCollapse ? '后台' : '后台管理'}}</h4>
        <!-- 没有二级菜单的menu ,click实现动态路由导航-->
        <el-menu-item @click="clickMenu(item)" v-for="item of noChildren" :index="item.path" :key="item.path">
            <i :class="'el-icon-' + item.icon"></i>
            <span slot="title">{{item.label}}</span>
        </el-menu-item>
        <!-- 有二级菜单的menu -->
        <el-submenu v-for="items of hasChildren" :index="items.path" :key="items.path">
            <template slot="title">
                <i :class="'el-icon-' + items.icon"></i>
                <span slot="title">{{items.label}}</span>
            </template>
            <el-menu-item-group v-for="(child, childIndex) in items.children" :key="child.path">
                <el-menu-item @click="clickMenu(child)" :index="child.path">
                    {{child.label}}
                </el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>

<script>
  export default {
    name: 'CommonAside',
    data() {
      return {
            menu: [
                {
                    path: '/',
                    name: 'Home',  //name用于简化路由名
                    label: '首页',
                    icon: 's-home',
                    url: 'Home/Home'
                },
                {
                    path: '/onlineUser',
                    name: 'OnlineUser',
                    label: '在线用户状态',
                    icon: 's-custom',
                    url: 'OnlineUser/OnlineUser'
                },
                {
                    path: '/CAManager',
                    label: '在册证书管理',
                    icon: 's-check',
                    children: [
                        {
                            path: '/ValidCA',
                            name: 'ValidCA',
                            label: '生效证书',
                            icon: 'monitor',
                            url: 'ValidCA/ValidCA'
                        },
                        {
                            path: '/InvalidCA',
                            name: 'InvalidCA',
                            label: '失效证书',
                            icon: 'monitor',
                            url: 'InvalidCA/InvalidCA'
                        },
                    ]
                },
                {
                    path: '/UserInfo',
                    name: 'UserInfo',
                    label: '用户信息管理',
                    icon: 's-management',
                    url: 'UserInfo/UserInfo'
                },
                {
                    path: '/RiskManager',
                    label: '用户风险管理',
                    icon: 'monitor',
                    children: [
                        {
                            path: '/ShowRisk',
                            name: 'ShowRisk',
                            label: '风险展示',
                            icon: 'monitor',
                            url: 'ShowRisk/ShowRisk'
                        },
                        {
                            path: '/AccessControl',
                            name: 'AccessControl',
                            label: '接入控制',
                            icon: 'monitor',
                            url: 'AccessControl/AccessControl'
                        },
                    ]
                },
            ]
        }
    },
    methods: {
        clickMenu(item) {   /* 动态路由导航 */
            this.$router.push({
                name: item.name
            })
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    },
    computed: {
        noChildren() {
            return this.menu.filter(item => !item.children)
        },
        hasChildren() {
            return this.menu.filter(item => item.children)
        },
        isCollapse() {
            return this.$store.state.tab.isCollapse  // 计算属性，返回存储在vuex中的isCollapse值
        }
    },
/*     mounted() {
        console.log(this.menu, this.noChildren)
    } */

  }
</script>

<style lang="less" scoped>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
    .el-menu {
        color: antiquewhite;
        background-color: #4a7bb3d0;
        height: 100%;
        border: none;
        h4 {
            text-align: center;
            line-height: 22px;
        }
    }
/*     .el-aside {   /*菜单折叠效果另一种方法
        transition: width 0.25s;
        -webkit-transition: width 0.15s;
        -moz-transition: width 0.15s;
        -webkit-transition: width 0.15s;
        -o-transition: width 0.15s;
    } */
</style>
