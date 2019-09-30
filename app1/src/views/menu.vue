<template>
  <div class="home">
    菜谱管理
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column prop="name"  label="门店名称">
      </el-table-column>
      <el-table-column prop="org"  label="组织机构">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <router-link to='/manage'>进入餐别管理</router-link>
          <el-button @click="handleClick(scope.row)" type="text" size="small"></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data() {
      return {
        tableData: [{
          name: '寿司家',
          org: '天津高校测试/第二食堂',
        }, {
          name: '国福麻辣烫',
          org: '天津高校测试/第二食堂',
        }]
      }
  },

}
</script>
