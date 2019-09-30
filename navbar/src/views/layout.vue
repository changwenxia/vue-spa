<template>
   <div>
    <el-container class="container">
      <el-header height="80"> <header-bar></header-bar> </el-header>
      <el-container>
        <el-aside width="200px" style="background: #303133;">
          <menu-bar></menu-bar>
        </el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>

          <el-footer style="height: 80px"><foot-bar></foot-bar></el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import HeaderBar from './header.vue';
import MenuBar from './menu.vue';
import FootBar from './footer.vue';

export default {
  name: 'layout',
  components: {
    HeaderBar,
    MenuBar,
    FootBar,
  },
}
</script>