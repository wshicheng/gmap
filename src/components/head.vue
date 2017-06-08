<template>
    <header>
        <el-row>
            <el-col :span="24">
                <el-menu theme="dark" default-active="5" class="el-menu-demo" mode="horizontal" >
            <el-menu-item index="1">高级插件</el-menu-item>
            <el-submenu index="2">
                <template slot="title">在线商城</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
            </el-submenu>
            <el-menu-item index="3">
                客户管理
            </el-menu-item>
            <el-menu-item index="4">
                系统设置
            </el-menu-item>
            <el-menu-item index="5">
                活动发布
            </el-menu-item>
        </el-menu>
            </el-col>
        </el-row>
    </header>
</template>
<script>
export default {
  name: 'head'
}
</script>
<style scoped>
    ul.el-menu{border-radius:0;}
</style>

