<template>
  <div class="siderBar">
    <el-menu default-active="2" class="el-menu-vertical-demo" router>
      <el-menu-item index="/index"><i class="el-icon-message"></i>首页</el-menu-item>
      <el-menu-item index="/index/carManager"><i class="el-icon-message"></i>车辆管理</el-menu-item>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-menu"></i>报表管理</template>
        <el-menu-item-group>
          <el-menu-item index="/index/consumeData">消费数据</el-menu-item>
          <el-menu-item index="/index/allDaysData">24小时数据走势</el-menu-item>
           <el-menu-item index="/index/hotMap">热力图</el-menu-item>
           <el-menu-item index="/index/abnormalData">异常数据</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/index/partnerManager"><i class="el-icon-message"></i>合伙人管理</el-menu-item>
      <el-submenu index="5">
        <template slot="title"><i class="el-icon-setting"></i>营收记录</template>
        <el-menu-item-group>
          <el-menu-item index="/index/earningsDetail">收益明细</el-menu-item>
          <el-menu-item index="/index/settlementRecord">结算记录</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/index/accountManager"><i class="el-icon-message"></i>账号管理</el-menu-item>
      <el-menu-item index="/index/memberCenter"><i class="el-icon-message"></i>个人中心</el-menu-item>
    </el-menu>
  </div>
</template>
<style scoped>
  
</style>

