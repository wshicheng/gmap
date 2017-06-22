<template>
  <div class="queryCharts">
    <el-row class="watchLists">
      <el-button @click="handleClick">查看列表</el-button>
    </el-row>
    <el-row class="watchButton">
      <el-col :span="2">
        <span class="orderMoney"></span>
        <i>金额</i>
      </el-col>
      <el-col :span="2">
        <span class="orderNum"></span>
        <i>单数</i>
      </el-col>
    </el-row>
    <div class="chartsRect">
      <highChartRect></highChartRect>
    </div>
  </div>
</template>
<style scoped>
div.queryCharts {
  width: 100%;
  background: #fff;
  box-sizing: border-box;
  padding: 20px;
}

div.queryCharts table {
  width: 100%;
  border-collapse: collapse;
}

div.queryCharts table tr th {
  text-align: left;
  border: 1px solid #cccfd2;
  padding: 10px;
  background: #1c84d2;
  color: #444;
}

div.queryCharts table tr th {
  text-align: left;
  border: 1px solid #cccfd2;
  padding: 10px;
  background: #1c84d2;
  color: #fff;
}

div.queryCharts div.chartsRect {
  width: 100%;
}

div.queryCharts div.watchLists {
  line-height: 40px;
  height: 40px;
  text-align: right;
}

div.queryCharts div.watchLists button {
  margin-right: 0px;
  width: 137px;
}

div.queryCharts div.watchButton {
  margin-bottom: 20px;
  margin-top: 20px;
}

div.queryCharts div.watchButton div.el-col-2 {
  float: right;
  margin-left: 20px;
  width: 6.668%
}

div.queryCharts div.watchButton span {
  vertical-align: middle;
  width: 0;
  height: 0;
  padding: 10px;
  display: inline-block;
  border: 1px solid #000;
}

div.queryCharts div.watchButton span.orderNum {
  background: #74f7af;
}

div.queryCharts div.watchButton span.orderMoney {
  background: #ff4949;
}

div.queryCharts div.watchButton i {
  font-style: normal;
  margin-left: 5px;
  vertical-align: middle;
  font-size: 14px;
}
</style>
<script>
import highChartRect from '../../../components/highChartRect..vue'
export default {
  data: function () {
    return {
      orders: [
        {
          time: '6-1',
          orderNum: 1020,
          money: 1827
        },
        {
          time: '6-2',
          orderNum: 289,
          money: 1928
        },
        {
          time: '6-3',
          orderNum: 3321,
          money: 5020
        },
        {
          time: '6-4',
          orderNum: 998,
          money: 1200
        },
        {
          time: '6-5',
          orderNum: 2123,
          money: 4200
        }
      ]
    }
  },
  methods: {
    handleClick () {
      this.$router.push('/index/consumeData')
    }
  },
  components: {
    highChartRect
  }
}
</script>
