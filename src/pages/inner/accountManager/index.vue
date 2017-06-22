<template>
	<div style="margin-right:20px;">
		<div id="am_search">
			<label>
				<span>关键字</span>
				<el-input class='am_input' v-model="input" placeholder="姓名\用户名"></el-input>
			</label>
			<label>
				<span>联系方式</span>
				<el-input class='am_input' v-model="input" placeholder="手机号\邮箱"></el-input>
			</label>

			
			<button type="submit">查询</button>
		</div>


		<!-- account -->
		<div class="account">
			<h1>
				<button type="button" @click="$router.push({path:'/index/addaccount'})">添加新账号</button>
			</h1>

			<!-- 表单 -->
			<el-table :data="tableData" style="width: 100%;">
		      <el-table-column prop="user" label="用户名" width="140"></el-table-column>
		      <el-table-column prop="tel" label="手机号" width="160"></el-table-column>
		      <el-table-column prop="email" label="邮箱" width="240"></el-table-column>
		      <el-table-column prop="name" label="姓名" width="100"></el-table-column>
		      <el-table-column prop="type" label="类别" width="160"></el-table-column>
		      <el-table-column prop="status" label="状态" width="120">
		      	<template scope="scoped">
			        	<el-switch
			        		v-model='tableData[0].status'
								  on-color="#13ce66"
								  on-text="已开启"
								  off-text="已冻结"
								  off-color="#ff4949"
								  myIndex='tableData.index'>
								</el-switch>
			      </template>
		      </el-table-column>
		      <el-table-column prop="del" label="操作">
		      	<template scope="scope">
			        	<a href="javascript:;"></a><i class="el-icon-edit" style="margin-right:10px;"></i></a>
			        	<i class="el-icon-close"></i>
			      </template>
		      </el-table-column>
		    </el-table>	
		</div>

    <div id="account_page">
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
  html,body,h1,h2,h3,h4,h5,h6,td,tr,th,table,thead,tbody,dl,dt,dd,p,span,ul,li,ol {
  	margin: 0;
  	padding: 0;
  }

  body {
  	background: #f2f2f2;
  	font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }

  div.account {
    /* width: 100%; */
    padding: 0 20px 30px 20px;
    background: #fff;
    margin-top: 20px;
    padding-left: 28px;
    padding-right: 28px;
    padding-top: 27px;
    /* padding-bottom: 100%; */
  }

  div.account>h1 button {
    width: 120px;
    height: 40px;
    line-height: 40px;
    border: none;
    border-radius: 5px;
    outline: none;
    color: #fff;
    background: rgb(255, 153, 0);
    margin-bottom: 30px;
  }

  div.account>h1 button:hover {
    background: rgba(255, 153, 0,0.9);
    cursor: pointer;
  }

	#am_search {
        width: 100%;
        height: 100px;
        background: #fff;
	}

	#am_search label {
    /* width: 190px; */
        height: 90px;
        line-height: 90px;
        margin-right: 10px;
        margin-left: 40px;
        float: left;
	}

	#am_search label span {
		line-height: 90px;
		font-weight: bold;
		font-size: 16px;
		display: block;
		margin-right: 20px;
		float: left;
	}

	#am_search .am_input {
		max-width: 190px;
		display: block;
		float: left;
		outline: none;
		/*border: 1px solid #444 !important;*/
	}

	#am_search .am_input input {
		border: 1px solid #444 !important;

	}

	#am_search button {
    display: block;
    float: right;
    color: #fff;
    width: 100px;
    margin-top: 20px;
    padding: 9px 0px;
    border: none;
    outline: none;
    border-radius: 3px;
    margin-right: 65px;
    background: #6ad7d1;
    margin-top: 27px;
	}

	#am_search button:hover {
		background: rgba(106,215,209,0.8);
	}

	.el-table__body, .el-table__footer, .el-table__header {
		border: 2px solid red;
	}

	#account_page {
    padding: 20px;
    padding-bottom: 100px;
    background: #fff;
	}
</style>

<script>
export default {
  data () {
    return {
      input: '',
      tableData: [{
        user: '老司机',
        tel: '15642657777',
        email: 'wangqqiuaw@163.com',
        name: '胡经华',
        type: '管理员',
        status: true,
        index: 0
      }, {
        user: '老司机',
        tel: '15642657777',
        email: 'wangqqiuaw@163.com',
        name: '胡经华',
        type: '管理员',
        status: false,
        index: 1
      }, {
        user: '老司机',
        tel: '15642657777',
        email: 'wangqqiuaw@163.com',
        name: '胡经华',
        type: '管理员',
        status: true,
        index: 2
      }, {
        user: '老司机',
        tel: '15642657777',
        email: 'wangqqiuaw@163.com',
        name: '胡经华',
        type: '管理员',
        status: false
      }, {
        user: '老司机',
        tel: '15642657777',
        email: 'wangqqiuaw@163.com',
        name: '胡经华',
        type: '管理员',
        status: false
      }, {
        user: '老司机',
        tel: '15642657777',
        email: 'wangqqiuaw@163.com',
        name: '胡经华',
        type: '管理员',
        status: true
      }, {
        user: '老司机',
        tel: '15642657777',
        email: 'wangqqiuaw@163.com',
        name: '胡经华',
        type: '管理员',
        status: true
      }, {
        user: '老司机',
        tel: '15642657777',
        email: 'wangqqiuaw@163.com',
        name: '胡经华',
        type: '管理员',
        status: true
      }, {
        user: '老司机',
        tel: '15642657777',
        email: 'wangqqiuaw@163.com',
        name: '胡经华',
        type: '管理员',
        status: true
      }, {
        user: '老司机',
        tel: '15642657777',
        email: 'wangqqiuaw@163.com',
        name: '胡经华',
        type: '管理员',
        status: true
      }]
    }
  }
}
</script>
