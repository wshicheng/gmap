<template>
<div>
	<div style="padding:18px; background:#fff;">
		<div id="settleRed_header">
			<h2>
				<p>本次待结算金额：</p><span>10000</span><span>元</span>
			</h2>
			<button>申请结算</button>
			<span>*每月结算一次</span>
			<h3>
				<p>合计已结算金额：</p><span>30000</span><span>元</span>
			</h3>
		</div>	
	</div>

	<div id="settleRed_table">
		<el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="amount"
        label="结算金额"
        width="300">
      </el-table-column>
      <el-table-column
        prop="amountTime"
        label="计算时间"
        width="320">
      </el-table-column>
      <el-table-column
        prop="remark"
        label="备注">
      </el-table-column>
    </el-table>
	</div>

	<div id="settleRed_page">
				<el-pagination
		      :current-page.sync="currentPage"
		      :page-size="10"
		      layout="prev, pager, next, jumper"
		      :total="1000">
		    </el-pagination>
	</div>
</div>
</template>

<style scoped>
	#settleRed_header {
		width: 100%;
		height: 60px;
		line-height: 60px;
		padding: 10px 0;
		background: #fcfcd3;
		/*margin-bottom: 40px;*/
	}

	#settleRed_header h2,button,span {
		float: left;
	}

	#settleRed_header h2 {
		font-size: 10px;
		height: 60px;
	}

	#settleRed_header h2 p {
		float: left;
		margin-left: 10px;
		font-size: 16px;
		font-weight: 500;
	}

	#settleRed_header h2 span:nth-of-type(1) {
		color: red;
		font-size: 16px;
	}

	#settleRed_header h2 span:nth-of-type(2) {
		margin-left: 10px;
		font-size: 16px;
	}

	#settleRed_header button {
		width: 120px;
		height: 40px;
		margin:10px 0 0 10px;
		border: 1px solid #f9f9f9;
		background: rgba(255,153,0,0.8);
		color: #fff;
		border-radius: 6px;
		display: inline-block;
		outline: none;
	}

	#settleRed_header button:hover {
		background: rgba(255,153,0,1);
		cursor: pointer;
	}

	#settleRed_header button + span{
		color: #aaa;
		margin: 6px 0 0 5px;
		font-style: italic;
	}

	#settleRed_header h3 {
		font-size: 16px;
		height: 60px;
		float: right;
	}

	#settleRed_header h3 p {
		float: left;
		margin-left: 10px;
		font-weight: 500;
	}

	#settleRed_header h3 span:nth-of-type(1) {
		color: red;
	}

	#settleRed_header h3 span:nth-of-type(2) {
		margin-right: 10px;
	}

	#settleRed_table {
		padding: 10px 30px 30px 30px;
		background: #fff;
	}

	#settleRed_page {
		background: #fff;
		padding: 20px;
    padding-bottom: 200px;
	}
</style>

<script>
export default {
  data () {
    return {
      tableData: [{
        amount: '100.00',
        amountTime: '2017-01-01 10:01:01',
        remark: '这里是备注'
      }, {
        amount: '100.00',
        amountTime: '2017-01-01 10:01:01',
        remark: '这里是备注'
      }, {
        amount: '100.00',
        amountTime: '2017-01-01 10:01:01',
        remark: '这里是备注'
      }, {
        amount: '100.00',
        amountTime: '2017-01-01 10:01:01',
        remark: '这里是备注'
      }, {
        amount: '100.00',
        amountTime: '2017-01-01 10:01:01',
        remark: '这里是备注'
      }, {
        amount: '100.00',
        amountTime: '2017-01-01 10:01:01',
        remark: '这里是备注'
      }, {
        amount: '100.00',
        amountTime: '2017-01-01 10:01:01',
        remark: '这里是备注'
      }, {
        amount: '100.00',
        amountTime: '2017-01-01 10:01:01',
        remark: '这里是备注'
      }, {
        amount: '100.00',
        amountTime: '2017-01-01 10:01:01',
        remark: '这里是备注'
      }, {
        amount: '100.00',
        amountTime: '2017-01-01 10:01:01',
        remark: '这里是备注'
      }],
      currentPage: 3
    }
  }
}
</script>
