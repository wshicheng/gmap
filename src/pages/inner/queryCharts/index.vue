<template>
  <div class="queryCharts">
     <el-row class="watchLists">
       <el-button @click="handleClick">查看列表</el-button>
     </el-row>
      <el-row class="watchButton">
        <el-col :span="2">
          <span class="orderMoney"></span><i>金额</i>
        </el-col>
        <el-col :span="2">
          <span class="orderNum"></span><i>单数</i>
        </el-col>
      </el-row>       
      <div class="chartsRect">
        <div id="canvasWrap">
          <canvas id="queryCharts"></canvas>
        </div> 
      </div>
  </div>  
</template>
<style scoped>
  div.queryCharts{width:100%;background:#f5f5f5;box-sizing:border-box;padding:20px;}
  div.queryCharts table{width:100%;border-collapse:collapse;}
  div.queryCharts table tr th {text-align: left;border: 1px solid #cccfd2;padding: 10px;background: #1c84d2;color: #fff;}
  div.queryCharts table tr th {text-align: left;border: 1px solid #cccfd2;padding: 10px;background: #1c84d2;color: #fff;}
  div.queryCharts  div.chartsRect{width:100%;}
  div.queryCharts div.watchLists {line-height: 40px;height: 40px;text-align: right;}
  div.queryCharts div.watchLists button{margin-right: 0px;width: 137px;}
  div.queryCharts div.watchButton{margin-bottom:20px;margin-top: 20px;}
  div.queryCharts div.watchButton div.el-col-2{float:right;margin-left: 20px;width:6.668%}
  div.queryCharts div.watchButton span{vertical-align:middle;width:0;height:0;padding:10px;display:inline-block;border:1px solid #000;}  
  div.queryCharts div.watchButton span.orderNum{background:#74f7af;}
  div.queryCharts div.watchButton span.orderMoney{background:#ff4949;}
  div.queryCharts div.watchButton i{font-style:normal;margin-left:5px;vertical-align: middle;font-size: 14px;}
</style>
<script>
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
      },
      generalCanvas () {
        var canvas = document.getElementById('queryCharts')
        var canvasWrapWidth = canvas.parentElement.parentElement.offsetWidth
        var canvasWrapHeight = 500
        canvas.setAttribute('width', canvasWrapWidth)
        canvas.setAttribute('height', canvasWrapHeight)
        var ctx = canvas.getContext('2d')
        ctx.fillStyle = '#ff4949'
        ctx.beginPath()
        var space = 30
        var padding = 40
        var chartsNum = this.orders.length
        var radixMoney = Math.max.apply(null, this.orders.map((value) => { return value.money }))
        var radixNum = Math.max.apply(null, this.orders.map((value) => { return value.orderNum }))
        // 金额柱状图
        for (var i = 0; i < chartsNum; i++) {
          ctx.fillRect(padding + i * 70 + space * (i + 1), canvasWrapHeight / 2, 29, -canvasWrapHeight * (this.orders[i].money / radixMoney))
        }
        ctx.closePath()
        ctx.beginPath()
        ctx.fillStyle = '#74f7af'
        // 单数柱状图
        for (var k = 0; k < chartsNum; k++) {
          ctx.fillRect(padding + 30 + k * 70 + space * (k + 1), canvasWrapHeight / 2, 29, -canvasWrapHeight * (this.orders[k].orderNum / radixNum))
        }
        ctx.stroke()
        ctx.closePath()
        // 画x轴
        ctx.strokeStyle = 'red'
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(padding + 5, canvasWrapHeight / 2 + 0.5)
        ctx.lineTo(canvasWrapWidth - padding * 2, canvasWrapHeight / 2 + 0.5)
        ctx.stroke()
        // 画 y 轴
        ctx.moveTo(padding + 5, 0)
        ctx.lineTo(padding + 5, canvasWrapHeight / 2 + 0.5)
        ctx.stroke()
        ctx.closePath()
        // 画x轴数据
        ctx.fillStyle = 'black'
        for (var j = 0; j < chartsNum; j++) {
          ctx.fillText(this.orders[j].time, padding + 20 + j * 70 + (space) * (j + 1), canvasWrapHeight / 2 + 15)
        }
      }
    },
    mounted () {
      this.generalCanvas()
    }
  }
</script>
