<template>
	<div>
		<div id="abnormalData_header">
			 <div class="abnormalData_checked">
			 		<span>异常数据：</span>
				  <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
				    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
				  </el-checkbox-group>

				  <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
			 </div>

			 <div class="abnormalData_timeLine">
				  <div class="block">
				    <span class="demonstration">数据时间段</span>
				    <el-date-picker
				      v-model="value7"
				      type="daterange"
				      align="right"
				      placeholder="选择日期范围"
				      :picker-options="pickerOptions2">
				    </el-date-picker>

				    <button>查&nbsp;&nbsp;询</button>
				  </div>
			 </div>
		</div>

		<div id="abnormalData_table">
			<el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="licensePlateNumber"
        label="车牌号"
        width="160">
      </el-table-column>
      <el-table-column
        prop="number"
        label="终端编号"
        width="240">
      </el-table-column>
      <el-table-column
        prop="time"
        label="异常情况首次出现日期"
        width="240">
      </el-table-column>
      <el-table-column
        prop="abnormalData"
        label="异常情况"
        width="240">
      </el-table-column>
      <el-table-column
        prop="readAlready"
        label="">
        <template scope="scope">
				  <el-checkbox v-model="tableData[0].readAlready">设为已读</el-checkbox>
				</template>
      </el-table-column>
    </el-table>
		</div>

		<div id="abnormalData_page">
				<el-pagination
		      :current-page.sync="currentPage"
		      :page-size="10"
		      layout="prev, pager, next, jumper"
		      :total="1000">
		    </el-pagination>
		</div>
	</div>
</template>

<style>
  html,body,h1,h2,h3,h4,h5,h6,td,tr,th,table,thead,tbody,dl,dt,dd,p,span,ul,li,ol {
  	margin: 0;
  	padding: 0;
  }

  body {
  	font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }

  /*   abnormalData_header    */

	#abnormalData_header {
		/*width: 100%;*/
		height: 150px;
		padding: 20px 20px 10px 20px;
    margin-bottom: 20px;
		line-height: 60px;
		background: #fff;
	}

	#abnormalData_header button {
		display: inline-block;
		width: 128px;
		height: 41px;
		border: none;
    font-size: 16px;
    color: #fff;
		background: rgb(106,215,209);
		border-radius: 5px;
		margin-left: 10px;
		outline: none;
	}

	#abnormalData_header button:hover {
		background: rgba(106,215,209,0.8);
		color: #fff;
	}

	#abnormalData_header button.active {
		background: #ff9900;
		color: #fff;
	}

	#abnormalData_header div.abnormalData_checked {
  	margin-left: 14px;
  	overflow: hidden;
    margin-top: -20px;
    height: 70px;
    width: 100%;
  }

  #abnormalData_header div.abnormalData_checked>span {
  	float: left;
  	color: #444;
  	font-weight: 500;
  	font-size: 14px;
  }

  #abnormalData_header div.abnormalData_checked .el-checkbox {
  	width: 180px;
  	height: 30px;
  	display: block;
  	float: left;
  }

 	#abnormalData_header div.abnormalData_checked .el-checkbox:nth-of-type(1) {
 		margin-left: 10px;
 	}

 	#abnormalData_header div.abnormalData_checked .el-checkbox:nth-of-type(5) {
 		margin-left: 10px;
 	}

 	#abnormalData_header .abnormalData_timeLine {
 		display: block;
 		width: 100%;
 		margin-top: 30px;
 		margin-left: 10px;
 	}

 	#abnormalData_header .abnormalData_timeLine span.demonstration {
 		float: left;
  	color: #444;
  	margin-right: 14px;
  	font-weight: 500;
  	font-size: 14px;
 	}

 	#abnormalData_header .abnormalData_timeLine button {
    display: block;
    float: right;
    width: 120px;
    height: 40px;
    margin-right: 94px;
    margin-top: 14px;
    line-height: 40px;
    border-radius: 6px;
    /*border: 1px solid #ccc;*/
    outline: none;
    color: #fff;
 	}

 	#abnormalData_header .abnormalData_timeLine button:hover {
 		color: #fff;
 	}


  /*  abnormalData_table  */
  #abnormalData_table {
    padding: 30px 20px 30px 20px;
    background: #fff;
  }

 
	/*    abnormalData_page    */
	#abnormalData_page {
		/*width: 100%;*/
		/*height: 80px;*/
    padding: 0 20px 0 20px;
    padding-bottom: 100px;
    background: #fff;
	}

	#abnormalData_page el-pagination {
		float: left;
		margin-left: -10px;
	}

	#abnormalData_page>.el-pagination {
    white-space: nowrap;
    /* padding: 2px 5px; */
    color: #48576a;
    margin-left: -5px;
	}

</style>

<script>
const cityOptions = ['2天以上没有消费数据', '行驶速度超过标准速度', '有骑行数据但没有计费的', '扫码失败次数5次以上', '车辆不在运营范围内的']

export default {
  data () {
    return {
      tableData: [{
        licensePlateNumber: '1001',
        number: '6815010000555030',
        time: '2017-01-01 10:01:01',
        abnormalData: '2天以上没有消费数据',
        readAlready: true
      }, {
        licensePlateNumber: '1001',
        number: '6815010000555030',
        time: '2017-01-01 10:01:01',
        abnormalData: '2天以上没有消费数据',
        readAlready: false
      }, {
        licensePlateNumber: '1001',
        number: '6815010000555030',
        time: '2017-01-01 10:01:01',
        abnormalData: '2天以上没有消费数据',
        readAlready: true
      }, {
        licensePlateNumber: '1001',
        number: '6815010000555030',
        time: '2017-01-01 10:01:01',
        abnormalData: '2天以上没有消费数据',
        readAlready: false
      }, {
        licensePlateNumber: '1001',
        number: '6815010000555030',
        time: '2017-01-01 10:01:01',
        abnormalData: '2天以上没有消费数据',
        readAlready: true
      }, {
        licensePlateNumber: '1001',
        number: '6815010000555030',
        time: '2017-01-01 10:01:01',
        abnormalData: '2天以上没有消费数据',
        readAlready: true
      }, {
        licensePlateNumber: '1001',
        number: '6815010000555030',
        time: '2017-01-01 10:01:01',
        abnormalData: '2天以上没有消费数据',
        readAlready: true
      }, {
        licensePlateNumber: '1001',
        number: '6815010000555030',
        time: '2017-01-01 10:01:01',
        abnormalData: '2天以上没有消费数据',
        readAlready: true
      }, {
        licensePlateNumber: '1001',
        number: '6815010000555030',
        time: '2017-01-01 10:01:01',
        abnormalData: '2天以上没有消费数据',
        readAlready: true
      }, {
        licensePlateNumber: '1001',
        number: '6815010000555030',
        time: '2017-01-01 10:01:01',
        abnormalData: '2天以上没有消费数据',
        readAlready: true
      }],
      currentPage: 3,
      checkAll: true,
      checkedCities: ['上海', '北京'],
      cities: cityOptions,
      isIndeterminate: true,
      // 时间段选择
      pickerOptions2: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      value6: '',
      value7: ''
    }
  },
  methods: {
    handleCheckAllChange (event) {
      this.checkedCities = event.target.checked ? cityOptions : []
      this.isIndeterminate = false
    },
    handleCheckedCitiesChange (value) {
      let checkedCount = value.length
      this.checkAll = checkedCount === this.cities.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
    }
  }
}
</script>
