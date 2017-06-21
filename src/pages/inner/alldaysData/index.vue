<template>
  <div class="allDays">
    <el-row class="DatePicker">
      <el-col>
        <div class="timeSelectBtn">
          <el-button @click="handleChangeType" type="primary">今日</el-button>
          <el-button @click="handleChangeType">本周</el-button>
          <el-button @click="handleChangeType">本月</el-button>
          <el-button @click="handleChangeType">所有日期</el-button>
          <el-button @click="handleChangeType">指定时间段</el-button>
        </div>
        <el-date-picker
            v-show = "show"
            v-model="value4"
            type="datetimerange"
            :picker-options="pickerOptions2"
            placeholder="选择时间范围"
            align="right"
            >
        </el-date-picker>
        <el-button type="primary">查询</el-button>
      </el-col>
    </el-row>
    <el-row class="showTime">
      <el-col class="dateArrow" ref="dateArrow" v-bind:data-timetype="arrowTimeType">
        <el-button @click = "dateMinus">
          <i class="el-icon-arrow-left"></i>
        </el-button>
        <span class="nowTime">{{nowTime}}</span>
        <el-button @click = "dateAplus">
          <i class="el-icon-arrow-right"></i>
        </el-button>
      </el-col>
      <el-col>
        24小时数据走势
      </el-col>
    </el-row>  
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
  div.timeSelectBtn {display:inline-block;}
  div.dateArrow{margin: 20px  0 20px 0}
  div.dateArrow button{cursor:pointer}
  div.dateArrow span.nowTime {margin-left:5px;margin-right: 5px}
</style>
<script>
  import highChart from '../../../components/highChart.vue'
  import {siblings} from '../../../../utils/index.js'
  import moment from 'moment'
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
        value4: '',
        nowTime: '2017-06-20',
        show: false,
        clickTimes: 0,
        arrowTimeType: 'day'
      }
    },
    components: {
      highChart
    },
    methods: {
      handleChangeType (e) {
        var siblingsBtn = siblings(e.currentTarget)
        for (var i = 0; i < siblingsBtn.length; i++) {
          siblingsBtn[i].setAttribute('class', 'el-button el-button--default')
        }
        e.currentTarget.setAttribute('class', 'el-button el-button--primary')
        if (e.currentTarget.innerText === '指定时间段') {
          this.show = true
        } else {
          this.show = false
        }
        var nowTime
        switch (e.currentTarget.innerText) {
          case '今日': {
            nowTime = moment().format('YYYY-MM-DD')
            this.nowTime = nowTime
            this.arrowTimeType = 'day'
            this.clickTimes = 0
            break
          }
          case '本周': {
            nowTime = moment().format('YYYY年第ww周')
            this.nowTime = nowTime
            this.arrowTimeType = 'week'
            this.clickTimes = 0
            break
          }
          case '本月': {
            nowTime = moment().format('YYYY年MM月')
            this.nowTime = nowTime
            this.arrowTimeType = 'month'
            this.clickTimes = 0
            break
          }
        }
      },
      dateMinus () {
        var dateTimeType = this.$refs.dateArrow.$el.dataset.timetype
        var nums = null
        switch (dateTimeType) {
          case 'day': {
            nums = --this.clickTimes
            console.log(nums)
            var lastDay = new Date().getTime() + 24 * 60 * 60 * 1000 * nums
            console.log(moment(lastDay).format('YYYY-MM-DD'))
            this.nowTime = moment(lastDay).format('YYYY-MM-DD')
            break
          }
          case 'week': {
            nums = --this.clickTimes
            console.log(nums)
            var lastweek = new Date().getTime() + 24 * 60 * 60 * 1000 * 7 * nums
            console.log(moment(lastweek).format('YYYY年第WW周'))
            this.nowTime = moment(lastweek).format('YYYY年第WW周')
            break
          }
          case 'month': {
            nums = --this.clickTimes
            var lastmonth = new Date().getTime() + 24 * 60 * 60 * 1000 * 7 * 4 * nums
            console.log(moment(lastmonth).format('YYYY年MM月'))
            this.nowTime = moment(lastmonth).format('YYYY年MM月')
            break
          }
        }
      },
      dateAplus () {
        var dateTimeType = this.$refs.dateArrow.$el.dataset.timetype
        var nums = null
        switch (dateTimeType) {
          case 'day': {
            nums = ++this.clickTimes
            console.log(nums)
            var lastDay = new Date().getTime() + 24 * 60 * 60 * 1000 * nums
            console.log(moment(lastDay).format('YYYY-MM-DD'))
            this.nowTime = moment(lastDay).format('YYYY-MM-DD')
            break
          }
          case 'week': {
            nums = ++this.clickTimes
            console.log(nums)
            var lastweek = new Date().getTime() + 24 * 60 * 60 * 1000 * 7 * nums
            console.log(moment(lastweek).format('YYYY年第WW周'))
            this.nowTime = moment(lastweek).format('YYYY年第WW周')
            break
          }
          case 'month': {
            nums = ++this.clickTimes
            var lastmonth = new Date().getTime() + 24 * 60 * 60 * 1000 * 7 * 4 * nums
            console.log(moment(lastmonth).format('YYYY年MM月'))
            this.nowTime = moment(lastmonth).format('YYYY年MM月')
            break
          }
        }
      }
    }
  }
</script>
