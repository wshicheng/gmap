<template>
   <div id="container"></div>
</template>
<script>
  var Highcharts = require('highcharts')
  // 在 Highcharts 加载之后加载功能模块
  require('highcharts/modules/exporting')(Highcharts)
  export default {
    mounted: function () {
       // 创建图表
      Highcharts.chart('container', {
        /** Highcharts 配置 */
        lang: {
          printChart: '打印图表',
          contextButtonTitle: '图表导出菜单',
          decimalPoint: '.',
          downloadJPEG: '下载JPEG图片',
          downloadPDF: '下载PDF文件',
          downloadPNG: '下载PNG文件',
          downloadSVG: '下载SVG文件'
        },
        chart: {
          type: 'column'                           // 指定图表的类型，默认是折线图（line）
        },
        title: {
          text: ' '                 // 指定图表标题
        },
        xAxis: {
          categories: ['6-1', '6-2', '6-3', '6-4', '6-5', '6-6'],
          crosshair: true
        },
        yAxis: {
          title: {
            text: ''
          },
          plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
          }]
        },
        legend: {
          layout: 'vertical',
          align: 'left',
          verticalAlign: 'top',
          borderWidth: 0
        },
        series: [
          {
            name: ' ',
            color: '#74f7af',
            data: [122, 122, 922, 1422, 1822, 2200],
            tooltip: {
              valueSuffix: '单',
              useHTML: true,
              headerFormat: '<span style="font-size: 12px">日期: {point.key}</span><br/>',
              pointFormatter: function () {
                return '<span style="color:{' + this.series.color + '}"></span>单数: <b>' + this.y + '</b>'
              }
            }
          },
          {
            name: ' ',
            color: '#ff4949',
            data: [100, 28, 517, 1103, 172, 221],
            tooltip: {
              valuePrefix: '￥',
              useHTML: true,
              headerFormat: '<span style="font-size: 12px">日期: {point.key}</span><br/>',
              pointFormatter: function () {
                return '<span style="color:{' + this.series.color + '}"></span>金额: <b>￥' + this.y + '</b>'
              }
            }
          }
        ]

      })
    }
  }
</script>
<style>
  div#container g.highcharts-legend-item{display:none;}
</style>
