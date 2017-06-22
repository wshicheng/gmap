<template>
  <div class="theme">
    <div class="siderBar">
      <el-menu default-active="2" class="el-menu-vertical-demo" router>
        <el-menu-item index="/index" class="tpl-left-nav-item">
          <i class="el-icon-message"></i>首页</el-menu-item>
        <el-menu-item index="/index/carManager" class="tpl-left-nav-item">
          <i class="el-icon-message"></i>车辆管理</el-menu-item>
        <el-submenu index="3" class="tpl-left-nav-item">
          <template slot="title">
            <i class="el-icon-menu"></i>报表管理</template>
          <el-menu-item-group>
            <el-menu-item index="/index/consumeData">消费数据</el-menu-item>
            <el-menu-item index="/index/allDaysData">24小时数据走势</el-menu-item>
            <el-menu-item index="/index/hotMap">热力图</el-menu-item>
            <el-menu-item index="/index/abnormalData">异常数据</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="/index/partnerManager" class="tpl-left-nav-item">
          <i class="el-icon-message"></i>合伙人管理</el-menu-item>
        <el-submenu index="5" class="tpl-left-nav-item">
          <template slot="title">
            <i class="el-icon-setting"></i>营收记录</template>
          <el-menu-item-group>
            <el-menu-item index="/index/earningsDetail">收益明细</el-menu-item>
            <el-menu-item index="/index/settlementRecord">结算记录</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="/index/accountManager" class="tpl-left-nav-item">
          <i class="el-icon-message"></i>账号管理</el-menu-item>
        <el-menu-item index="/index/memberCenter" class="tpl-left-nav-item">
          <i class="el-icon-message"></i>个人中心</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>
<style scoped>
  div.theme {
  padding: 30px 0 0 20px;
}

.el-menu {
  border-radius: 2px;
  list-style: none;
  position: relative;
  margin: 0;
  padding-left: 0;
  background-color: #fff;
}

.el-submenu .el-menu {
  background: #fff;
}

div.siderBar {
  height: 945px;
  background: #fff;
}

.el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active,
.el-menu-item.is-active {
  color: #fff;
  background: #cecece;
  border-left: 3px solid #fced4a!important;
}

.el-submenu .el-menu-item:hover {
  background: #cecece;
}

.el-menu-item, .el-submenu__title {
    height: 50px;
    line-height: 56px;
    font-size: 14px;
    color: #999999;
    padding: 0 20px;
    cursor: pointer;
    position: relative;
    transition: border-color .3s,background-color .3s,color .3s;
    box-sizing: border-box;
    white-space: nowrap;
}

.el-menu-item, .el-submenu__title li i {
  color: #999999;
}
</style>
<script>
</script>
