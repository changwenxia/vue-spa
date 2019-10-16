<template>
  <div class="home">
    菜谱管理 -- 餐别管理
     <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column prop="name"  label="餐别名称" />
      <el-table-column prop="startTime" label="就餐开始时间" />
      <el-table-column prop="endTime" label="就餐结束时间" />
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="dialogVisible = true" type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      title="编辑"
      :visible.sync="dialogVisible"
      width="30%">
      <span>我是dialog对话框内容</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Manage',
  data() {
      return {
        dialogVisible: false,
        tableData: [
          {
            name: 'aaa',
            startTime: '06:00',
            endTime: '07:00',
          }, 
          {
            name: 'bbb',
            startTime: '06:00',
            endTime: '07:00',
          }, 
        ]
      }
  },
}
</script>
