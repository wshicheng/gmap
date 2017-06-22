<template>
<div style="margin-right:20px;">
	<div id="partner_header">
		<label>
			<span>关键字：</span>
			<el-input placeholder="请输入内容" style='width:60%;'></el-input>
		</label>
		<label>
			<span>联系方式：</span>
			<el-input placeholder="手机号/邮箱" style='width:60%;'></el-input>
		</label>
		<label>
			<span>认购车辆数：</span>
			<el-select v-model="value" style='width:33%;'>
			    <el-option
			      v-for="item in options"
			      :key="item.value"
			      :label="item.label"
			      :value="item.value">
			    </el-option>
		  </el-select>
			<el-input placeholder="数量" style='width:19%;'></el-input>
		</label>

		<button>查&nbsp;&nbsp;询</button>
	</div>

	<div id="partner_table">
    <div id="partner_add">
      <button @click="$router.push({path:'/index/addpartner'})">添加合伙人</button>
    </div>
		<el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="姓名"
        width="100">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别"
        width="100">
      </el-table-column>
      <el-table-column
        prop="IDcard"
        label="证件号码"
        width="200">
      </el-table-column>
      <el-table-column
        prop="tel"
        label="手机号码"
        width="160">
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮箱"
        width="200">
      </el-table-column>
      <el-table-column
        prop="cars"
        label="认购车辆数"
        width="140">
      </el-table-column>
      <el-table-column
        label="操作"
        prop="del">
	      <template scope="scope">
	      	<a href="/index/checkpartner" style="color:#444; margin-right:10px;" title="查看"><i class="el-icon-document"></i></a>
	      	<a href="javascript:;" style="color:#444; margin-right:10px;" title="编辑"><i class="el-icon-edit"></i></a>
	      	<a href="javascript:;" style="color:#444; margin-right:10px;" title="删除"><i class="el-icon-close"></i></a>
	      </template>
      </el-table-column>
    </el-table>
	</div>

	<div id="partner_page">
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
	#partner_header {
		/*width: 100%;*/
		height: 60px;
    margin-bottom: 20px;
		line-height: 60px;
    padding: 20px;
		background: #fff;
	}

	#partner_header label {
		float: left;
		width: 30%;
	}

	#partner_header button {
		width: 80px;
		display: inline-block;
		height: 36px;
		border-radius: 5px;
		outline: none;
		background: #868686;
		border: 1px solid #818181;
		color: #fff;
	}

  #partner_table {
    padding: 30px 20px 30px 20px;
    background: #fff;
  }

  #partner_add {
    margin-bottom: 10px;
  }

  #partner_add button {
    width: 110px;
    height: 40px;
    line-height: 40px;
    outline: none;
    border: none;
    background: rgb(255, 153, 0);
    color: #fff;
    border-radius: 4px;
  }

  #partner_add button:hover {
    background: rgba(255, 153, 0, 0.9);
    cursor: pointer;
  }

	#partner_header button:hover {
		background: rgba(134,134,134,0.8);
	}

	#partner_header label el-input {
		max-width: 100px;
		width: 100px;
	}
	
	#partner_page {
    padding: 20px;
    padding-bottom: 140px;
    background: #fff;
	}
</style>

<script>
export default {
  data () {
    return {
      tableData: [{
        name: '胡经华',
        sex: '女',
        IDcard: '681501000555030',
        tel: '13056426666',
        email: 'hujinghua@163.com',
        cars: 300,
        del: ''
      }, {
        name: '胡经华',
        sex: '女',
        IDcard: '681501000555030',
        tel: '13056426666',
        email: 'hujinghua@163.com',
        cars: 300,
        del: ''
      }, {
        name: '胡经华',
        sex: '女',
        IDcard: '681501000555030',
        tel: '13056426666',
        email: 'hujinghua@163.com',
        cars: 300,
        del: ''
      }, {
        name: '胡经华',
        sex: '女',
        IDcard: '681501000555030',
        tel: '13056426666',
        email: 'hujinghua@163.com',
        cars: 300,
        del: ''
      }, {
        name: '胡经华',
        sex: '女',
        IDcard: '681501000555030',
        tel: '13056426666',
        email: 'hujinghua@163.com',
        cars: 300,
        del: ''
      }, {
        name: '胡经华',
        sex: '女',
        IDcard: '681501000555030',
        tel: '13056426666',
        email: 'hujinghua@163.com',
        cars: 300,
        del: ''
      }, {
        name: '胡经华',
        sex: '女',
        IDcard: '681501000555030',
        tel: '13056426666',
        email: 'hujinghua@163.com',
        cars: 300,
        del: ''
      }, {
        name: '胡经华',
        sex: '女',
        IDcard: '681501000555030',
        tel: '13056426666',
        email: 'hujinghua@163.com',
        cars: 300,
        del: ''
      }, {
        name: '胡经华',
        sex: '女',
        IDcard: '681501000555030',
        tel: '13056426666',
        email: 'hujinghua@163.com',
        cars: 300,
        del: ''
      }, {
        name: '胡经华',
        sex: '女',
        IDcard: '681501000555030',
        tel: '13056426666',
        email: 'hujinghua@163.com',
        cars: 300,
        del: ''
      }],
      currentPage: 3,
      options: [{
        value: '1',
        label: '100'
      }, {
        value: '2',
        label: '200'
      }, {
        value: '3',
        label: '300'
      }, {
        value: '4',
        label: '400'
      }, {
        value: '5',
        label: '500'
      }, {
        value: '6',
        label: '600'
      }, {
        value: '7',
        label: '700'
      }, {
        value: '8',
        label: '800'
      }, {
        value: '9',
        label: '900'
      }],
      value: ''
    }
  }
}
</script>
