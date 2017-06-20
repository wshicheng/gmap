<template>
  <div class="queryLists">
     <h3><el-button @click="handeClick">查看统计图</el-button></h3>
      <div>
         <table>
          <thead>
            <tr>
              <th>消费时间</th>
              <th>消费单数</th>
              <th>消费盈利</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2017-01-03</td>
              <td>200</td>
              <td>$6000</td>
            </tr>
            <tr>
              <td>2017-01-03</td>
              <td>200</td>
              <td>$6000</td>
            </tr>
            <tr>
              <td>2017-01-03</td>
              <td>200</td>
              <td>$6000</td>
            </tr>
          </tbody>
        </table>
      </div>
  </div>  
</template>
<style scoped>
  div.queryLists{width:100%;background:#f5f5f5;box-sizing:border-box;padding:20px;}
  div.queryLists h3{text-align: right;margin-bottom: 20px;}
  div.queryLists{width:100%;background:#f5f5f5;box-sizing:border-box;padding:20px;}
  div.queryLists h3{text-align: right;margin-bottom: 20px;}
  div.queryLists h3 button{margin-right: 0px;
    width: 137px;}
  div.queryLists table{width:100%;border-collapse:collapse;}
  div.queryLists table tr th {text-align: left;
    border: 1px solid #cccfd2;
    padding: 10px;
    background: #1c84d2;
    color: #fff;}
  div.queryLists table tr td{text-align: left;border: 1px solid #cccfd2;padding:10px;}
</style>
<script>
  export default {
    methods: {
      handeClick () {
        this.$router.push('/index/consumeData/queryCharts')
      }
    }
  }
</script>
