<template>
  <el-table :data="tableData" height="250" border style="width: 100%">
    <el-table-column prop="id" label="id" >
    </el-table-column>
    <el-table-column prop="firstName" label="firstname">
    </el-table-column>
    <el-table-column prop="lastName" label="lastname">
    </el-table-column>
    <el-table-column prop="createdAt" label="createdAt">
    </el-table-column>
    <el-table-column label="操作">
      <template scope="scope">
        <el-button type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import request from 'superAgent'
export default {
  data () {
    return {
      tableData: []
    }
  },
  mounted: function () {
    var that = this
    request
      .get('http://localhost:3000/userlist')
      .end(function (error, res) {
        if (error) {
          console.log(error)
        } else {
          that.tableData = JSON.parse(res.text)
        }
      })
  }
}
</script>
