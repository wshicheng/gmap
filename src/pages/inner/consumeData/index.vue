<template>
  <div class="consumeData">
    <div class="countInfo">
      <el-row class="countTitle">
        <span class="countDimension">统计维度</span>
        <el-button>日</el-button>
        <el-button>周</el-button>
        <el-button>月</el-button>
        <span class="timePeried">数据时间段：</span>
        <el-date-picker v-model='form.data1' type="date" placeholder="选择日期"  ></el-date-picker>
        <span class="division">至</span>
        <el-date-picker v-model='form.data2' type="date" placeholder="选择日期"  ></el-date-picker>
        <el-button class="query" type="primary">查询</el-button>
      </el-row>
      <el-row class="countDetail">
        <router-view></router-view>
      </el-row>
    </div>
  </div>  
</template>
<script>
  export default {
    data: function () {
      return {
        form: {
          data1: '',
          data2: ''
        }
      }
    }
  }
</script>
<style scoped>
  div.countTitle{background:#48576a;padding:10px;color:#fff;margin-bottom:20px;}
  span.timePeried{margin-left:10px;}
  span.division{padding:0 2px;}
  button.query{float:right;}
  </style>

