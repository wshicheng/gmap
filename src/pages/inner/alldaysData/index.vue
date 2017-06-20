<template>
  <div class="allDays">
    <el-row class="DatePicker">
      <el-col>
        <el-button>日</el-button>
        <el-button>周</el-button>
        <el-button>月</el-button>
        <el-button>所有日期</el-button>
        <el-button>指定时间段</el-button>
      </el-col>
    </el-row>
    <el-row class="showTime">
      <el-col>
        <el-date-picker
          v-model="value4"
          type="datetimerange"
          :picker-options="pickerOptions2"
          placeholder="选择时间范围"
          align="right"
          >
        </el-date-picker>
      </el-col>
      <el-row class="watchButton">
        <el-col :span="2">
          <span class="orderMoney"></span><i>金额</i>
        </el-col>
        <el-col :span="2">
          <span class="orderNum"></span><i>单数</i>
        </el-col>
      </el-row>    
      <el-col>
        <highChart></highChart>
      </el-col>
    </el-row>   
  </div>  
</template>
<style scoped>
  div.allDays div.DatePicker{padding:10px;background:#555;}
  div.allDays div.showTime{margin-top: 20px;}
  div.allDays div.showTime div.el-col{text-align:center;}
  div.allDays div.watchButton{margin-bottom:20px;margin-top: 20px;}
  div.allDays div.watchButton div.el-col-2{float:right;margin-left: 20px;width:6.668%}
  div.allDays div.watchButton span{vertical-align:middle;width:0;height:0;padding:10px;display:inline-block;border:1px solid #000;}  
  div.allDays div.watchButton span.orderNum{background:#74f7af;}
  div.allDays div.watchButton span.orderMoney{background:#ff4949;}
  div.allDays div.watchButton i{font-style:normal;margin-left:5px;vertical-align: middle;font-size: 14px;}
</style>
<script>
  import highChart from '../../../components/highChart.vue'
  export default {
    data () {
      return {
        pickerOptions2: {
          shortcuts: [
            {
              text: '最近一周',
              onClick (picker) {
                const end = new Date()
                const start = new Date()
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
                picker.$emit('pick', [start, end])
              }
            },
            {
              text: '最近一个月',
              onClick (picker) {
                const end = new Date()
                const start = new Date()
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
                picker.$emit('pick', [start, end])
              }
            },
            {
              text: '最近三个月',
              onClick (picker) {
                const end = new Date()
                const start = new Date()
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
                picker.$emit('pick', [start, end])
              }
            }
          ]
        },
        value4: ''
      }
    },
    components: {
      highChart
    }
  }
</script>
