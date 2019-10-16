<template>
  <el-row class="header-container">
    <el-col :span="24" class="header">
      <el-col :span="4" class="title">
        <img src="./logo.png" width="149" height="38" /> 
      </el-col>

      <el-col :span="20" class="nav-list">
        <ul>
          <li>
            <span class="el-dropdown-link"> 
              <i class="xy-v2-slfl" />刷脸付激活码 
            </span>
          </li>
          <li class="download-li">
            <span class="header-text">下载禧云商家手机客户端，随时随地查看报表</span>
          </li>
          <li>
              <span class="el-dropdown-link under-line">
                <i class="xy-v2-awm font14"  />
                <span>立即下载</span>
              </span>
          </li>
          <li>
              <span class="el-dropdown-link">
                <i class="xy-v2-yh font14" />admin<i class="xy-v2-arrow" />
              </span>
          </li>
        </ul>
      </el-col>
    </el-col>
  </el-row>
</template>
<script>

export default {
  name: 'HeaderBar',
};
</script>
<style lang="scss">
  .container{
    height: 100vh;
    .el-header{
      padding: 0; 
    }
  }
  .header-container {
    a {
      text-decoration: none;
    }
    .header {
      color: #fff;
      height: 60px;
      background-color: #20a0ff;
      .title {
        line-height: 60px;
        a {
          color: #fff;
          font-size: 40px;
          vertical-align: middle;
          text-indent: 28px;
        }
      }

      .nav-list {
        line-height: 60px;
        ul {
          margin: 0;
          padding: 0;
          float: right;
          li {
            float: left;
            list-style: none;
            height: 60px;
            cursor: pointer;
            margin-left: 10px;
            &:hover {
              background: #20a0ff;
            }
            &.download-li{
              cursor: default;
              line-height: 60px;
            }
            i {
              margin-right: 5px;
              &.font14{
                font-size: 14px;
              }
            }
          }
        }
      }
      .el-dropdown-link {
        color: #fff;
        font-size: 14px;
        display: block;
        padding: 0 10px;
      }
    }
    .el-tag {
      margin-right: 5px;
      a {
        color: #48576a;
      }
    }
  }

  .header-text {
    color: #fff;
    font-size: 14px;
    vertical-align: middle;
  }

  header.el-header .nav-list .el-dropdown {
    font-size: 16px;
    height: 40px;
    line-height: 40px;
    margin-top: 12px;
  }

  .xy-v2-arrow {
    margin-left: 5px;
  }

  header.el-header div:first-child img {
    margin: 12px 0 0 30px;
  }
</style>