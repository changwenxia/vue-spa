<template>
  <div>
    <el-container class="container">
      <el-header height="80"> <header-bar /> </el-header>
      <el-container>
        <el-aside width="200px" style="background: #303133;">
          <menu-bar />
        </el-aside>
        <el-container>
          <el-main>
            <router-view />
            <div ref='routeId' />
          </el-main>

          <el-footer style="height: 80px">
            <foot-bar />
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
  
</template>

<script>
import HeaderBar from '@/views/header.vue';
import MenuBar from '@/views//menu.vue';
import FootBar from '@/views/footer.vue';

export default {
  name: 'layout',
  components: {
    HeaderBar,
    MenuBar,
    FootBar,
  },
  watch: {
    $route(to,from) {
      this.getApp()
    }
  },
  mounted(){
    this.getApp()
  },
  methods: {
    getApp(){
      const routeId = this.$refs.routeId,
      id = 'single-spa-application:'+(this.$route.path.split('/')[1]);
      routeId.setAttribute('id', id)
    },
  },
}
</script>