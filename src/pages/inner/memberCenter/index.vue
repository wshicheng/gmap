<template>
	<div>
		<div style="padding:20px; background:#fff;">
			<div id="home_header">
				<h1>
					<img src="../../../assets/homepage/2.jpg">
				</h1>
				<div class="homepage_info">
					<h2>张菲</h2>
					<p>zhangfei</p>
					<h3>管理员</h3>
				</div>
			</div>			
		</div>

		<div class="homepage_select">
			<h1>账户信息<i class="el-icon-arrow-down"></i></h1>

			<el-table :data="tableData" style="width: 100%">
	      <el-table-column prop="date" label="日期" width="100%">
	      </el-table-column>
	      <el-table-column
	        prop="name"
	        label="姓名"
	        width="180">
	      </el-table-column>
	      <el-table-column
	        prop="address"
	        label="地址">
	      </el-table-column>
	    </el-table>
		</div>
	</div>
</template>

<style scoped>
  html,body,h1,h2,h3,h4,h5,h6,td,tr,th,table,thead,tbody,dl,dt,dd,p,span,ul,li,ol {
  	margin: 0;
  	padding: 0;
  }

  body {
  	font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }

	#home_header {
		height: 200px;
		width: 100%;
		background: #efcfa8;
	}

	#home_header div {
		width: 200px;
		float: left;
	}

	#home_header h1 {
		float: left;
    margin-left: 108px;
		border-radius: 50%;
		margin-top: 0;
	}

	#home_header h1 img {
		display: block;
		margin-top: 10px;
		width: 90%;
		height: 180px;
		border-radius: 50%;
	}

 	.homepage_info {   
 		margin-left: 60px;
 		position: relative;
 	}

 	.homepage_info h2 {
 		float: left;
    height: 30px;
    text-align: left;
    width: 80px;
    line-height: 30px;
    margin-top: 25px;
 	}

 	.homepage_info p {
 		float: left;
    height: 30px;
    text-align: left;
    width: 80px;
    line-height: 30px;
    margin-top: 25px;
 	}

 	.homepage_info h3 {
 		position: absolute;
 		color: #009900;
 		padding: 5px;
 		padding-top: 2px;
 		padding-bottom: 2px;  
 		border: 1px solid #009900;
 		left: 0;
 		top: 100px;
 	} 

 	/* homepage_select */
 	.homepage_select {
 		/*width: 100%;*/
 		height: 60px;
 		padding: 40px 20px 600px 20px;
 		background: #fff;
 		line-height: 60px;
 	}

 	.homepage_select h1 {
 		border-bottom: 2px solid #444;
 		text-align: left;
 		width: 100%;
 		height: 60px;
 	}

 	.homepage_select i {
 		margin-top: 10px;
 		margin-left: 20px;
 	}
</style>

<script>
export default {
  name: 'HomePage',
  methods: {}
}
</script>

