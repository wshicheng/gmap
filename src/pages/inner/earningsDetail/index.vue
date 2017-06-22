<template>
	<div>
		<div id="earD_header">
			<button class="active">所有明细</button>
			<button>本月明细</button>
			<button>今日明细</button>
			<button>制定时间段明细</button>
		</div>

		<div style="padding:10px 10px 10px 10px; background:#fff;">
			<div id="earD_all">
				<h1>
					<p>合计：<span>30000元</span></p>
					<p>导出明细到Excel</p>
				</h1>
			</div>
		</div>

		<div id="earD_body">
			<el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="monetary"
        label="金额"
        width="300">
      </el-table-column>
      <el-table-column
        prop="number"
        label="消费车辆编号"
        width="320">
      </el-table-column>
      <el-table-column
        prop="time"
        label="消费时间">
      </el-table-column>
    </el-table>
		</div>

		<div id="earD_page">
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

	#earD_header {
		width: 100%;
		height: 60px;
		padding: 10px 0;
		line-height: 60px;
		background: #fff;
	}

	#earD_header button {
		display: inline-block;
		width: 128px;
		height: 41px;
		border: 1px solid #ccc;
		background: #fff;
		font-family: "微软雅黑";
		border-radius: 5px;
		margin-left: 20px;
		outline: none;
	}

	#earD_header button:hover {
		background: rgba(255,153,0,0.8);
		color: #fff;
	}

	#earD_header button.active {
		background: #ff9900;
		color: #fff;
	}

	#earD_all {
		width: 100%;
		height: 40px;
		background: #fcfcd3;
		margin-top: 20px;
		margin-bottom: 10px;
	}

	#earD_all h1 {
		width: 100%;
		line-height: 40px;
		height: 40px;
	}

	#earD_all h1 p:nth-of-type(1) {
		float: left;
		margin-left: 10px;
		font-size: 12px;
		color: #868671;
	}

	#earD_all h1 p:nth-of-type(2) {
		float: right;
		font-size: 12px;
		margin-right: 10px;
		color: #ff9900;
	}

	#earD_all h1 p:nth-of-type(2):hover {
		text-decoration: underline;
	}

	#earD_page {
    padding: 20px;
		background: #fff;
		padding-bottom: 100px;
	}

	#earD_page el-pagination {
		float: left;
		margin-left: -10px;
	}

	#earD_page>.el-pagination {
    white-space: nowrap;
    /* padding: 2px 5px; */
    color: #48576a;
    margin-left: -5px;
	}

	#earD_body {
		padding: 10px 20px 30px 20px;
		background: #fff;
	}

</style>

<script>
export default {
  data () {
    return {
      tableData: [{
        monetary: '100.00',
        number: '6815010000555030',
        time: '2017-01-01 10:01:01'
      }, {
        monetary: '100.00',
        number: '6815010000555030',
        time: '2017-01-01 10:01:01'
      }, {
        monetary: '100.00',
        number: '6815010000555030',
        time: '2017-01-01 10:01:01'
      }, {
        monetary: '100.00',
        number: '6815010000555030',
        time: '2017-01-01 10:01:01'
      }, {
        monetary: '100.00',
        number: '6815010000555030',
        time: '2017-01-01 10:01:01'
      }, {
        monetary: '100.00',
        number: '6815010000555030',
        time: '2017-01-01 10:01:01'
      }, {
        monetary: '100.00',
        number: '6815010000555030',
        time: '2017-01-01 10:01:01'
      }, {
        monetary: '100.00',
        number: '6815010000555030',
        time: '2017-01-01 10:01:01'
      }, {
        monetary: '100.00',
        number: '6815010000555030',
        time: '2017-01-01 10:01:01'
      }, {
        monetary: '100.00',
        number: '6815010000555030',
        time: '2017-01-01 10:01:01'
      }, {
        monetary: '100.00',
        number: '6815010000555030',
        time: '2017-01-01 10:01:01'
      }],
      currentPage: 3
    }
  }
}
</script>
