<template>
        <header>
            <el-row>
                <el-col :span="24">
                    <h3>蜜蜂出行加盟商管理平台</h3>
                    <div class="admin">
                         <i class="icon iconfont icon-touxiang"></i>
                        <span class="username">管理员</span>
                        <i class="icon iconfont icon-xinfeng"></i>
                        <i class="icon iconfont icon-tuichu" @click="handleLoginOut"></i>
                    </div>
                </el-col>
            </el-row>
        </header>
</template>
<script>
export default {
  methods: {
    handleLoginOut () {
      this.$router.push({path: '/'})
    }
  }
}
</script>
<style scoped>
    header{height:65px;line-height:65px;background:#4d4d4d; 
    border-color: #e9ecf3; color:#fff;}
    header h3{display: inline-block;padding-left:20px;}
    div.admin{  
        float:right;
        float: right;
        margin-right: 28px;
    }
    div.admin span.username{font-size:14px;margin-right:5px;}
    div.admin i.iconfont{font-size:30px;vertical-align: middle;margin-right: 10px;cursor:pointer;}
    div.admin i.iconfont.icon-xinfeng,div.admin i.iconfont.icon-tuichu{
        font-size:24px;
    }
    div.admin i.iconfont.icon-tuichu:hover{color:yellow;}
</style>

