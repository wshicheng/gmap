<template>
  <div class="carManager">
    <div class="queryCarInfo">
      <el-form :model="form">
        <el-row>
          <el-col :span="12">
            <el-form-item label="关键字:">
              <el-input placeholder="车辆号\终端编号\车辆名称"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="状态">
              <el-radio class="radio" v-model="form.radio" label="使用中">使用中</el-radio>
              <el-radio class="radio" v-model="form.radio" label="维修中">维修中</el-radio>
              <el-radio class="radio" v-model="form.radio" label="已报废">已报废</el-radio>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="20">
            <el-form-item label="上线日期:">
                <el-col :span="7">
                  <el-date-picker v-model='form.data1' type="date" placeholder="选择日期"  ></el-date-picker>
                </el-col>
                <el-col class="line" :span="1">至</el-col>
                <el-col :span="7">
                  <el-date-picker v-model='form.data2' type="date" placeholder="选择日期"></el-date-picker>
                </el-col>
            </el-form-item>
          </el-col>
          <el-col  :span="4">
            <el-button>查询</el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="showCarInfo">
      <table>
        <thead>
          <tr>
            <th>车辆号</th>
            <th>终端编号</th>
            <th>车辆名称</th>
            <th>车型</th>
            <th>上线日期</th>
            <th>状态</th>
            <th>骑行次数</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item of tableData">
            <td><router-link v-bind:to="{path:'/index/carUseDetail', query: {carNum:item.carNum}}">{{item.carNum}}</router-link></td>
            <td>{{item.finnalNum}}</td>
            <td>{{item.carName}}</td>
            <td>{{item.carType}}</td>
            <td>{{item.carOnlineTime}}</td>
            <td>{{item.carStatus}}</td>
            <td>{{item.carRideTimes}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div> 
</template>
<script>
  export default {
    data: function () {
      return {
        form: {
          radio: '使用中',
          data1: '',
          data2: ''
        },
        tableData: [
          {
            carNum: '001',
            finnalNum: '681501000555030',
            carName: '小蜜蜂1代',
            carType: '1',
            carOnlineTime: '2017-07-06',
            carStatus: '使用中',
            carRideTimes: '111'
          },
          {
            carNum: '002',
            finnalNum: '681501000555030',
            carName: '小蜜蜂2代',
            carType: '2',
            carOnlineTime: '2017-07-07',
            carStatus: '暂停使用',
            carRideTimes: '222'
          },
          {
            carNum: '003',
            finnalNum: '681501000555030',
            carName: '小蜜蜂2代',
            carType: '1',
            carOnlineTime: '2017-07-07',
            carStatus: '报废',
            carRideTimes: '333'
          }
        ]
      }
    }
  }
</script>
<style scoped>
  div.carManager{width:100%;height:100%}
  div.carManager div.queryCarInfo{background: #f1fff1;
    margin-bottom: 10px;
    padding: 10px;}
  div.line{margin-left:0px;}
  div.el-input{width:initial}
  div.showCarInfo table{border-collapse:collapse;width:100%}
  div.showCarInfo table tr th{text-align:center;border:1px solid #1d90e6;padding: 5px 0;background:#1d90e6;color:#fff;}
  div.showCarInfo table tr td{text-align: center;border:1px solid #1d90e6;padding:5px 0;color:#555;font-size:14px;}
  div.showCarInfo table tr td a{text-decoration: none;color:#555}
</style>
