<template>
  <el-menu
    background-color="#303133"
    text-color="#d0d1d1"
    :router="true"
    :unique-opened="true"
    default-active="index"
  >
    <el-menu-item index='index'>首页</el-menu-item>
    <el-menu-item index='app1' @click='click()'>
      子页面里的路由弹窗遮罩</el-menu-item>
  </el-menu> 
</template>

<script>
export default {
  name: 'MenuBar',
  methods: {
    click() {
      // 向子应用传参数
      window.postMessage({
        token: 'aaaa',
      });
    },
  },
}
</script>

<style>
#navbar-app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>