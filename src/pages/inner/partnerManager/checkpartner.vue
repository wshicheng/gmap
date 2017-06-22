<template>
	<div id="addpartner_form">
				<h1 id="addpartner_title">查看合伙人</h1>
			<el-form :model="form" ref="rule" label-width="80px">
			  <el-form-item label="姓名">
			    <el-input v-model="form.name" readonly="readonly" ></el-input>
			  </el-form-item>
			  <el-form-item label="性别">
			    <el-radio-group v-model="form.sex" disabled="disabled">
			      <el-radio label="男"></el-radio>
			      <el-radio label="女"></el-radio>
			    </el-radio-group>
			  </el-form-item>
			  <el-form-item label="证件类别">
			    <el-select v-model="form.IDtype" disabled placeholder="请选择证件类型">
			      <el-option label="居民身份证" value="居民身份证"></el-option>
			      <el-option label="护照" value="护照"></el-option>
			    </el-select>
			  </el-form-item>
			  <el-form-item label="证件号码">
			    <el-input v-model="form.IDcard" readonly="readonly"></el-input>
			  </el-form-item>
			  <el-form-item label="手机号">
			    <el-input v-model="form.tel" readonly="readonly"></el-input>
			  </el-form-item>
			  <el-form-item label="车辆数">
			    <el-input v-model="form.car" readonly="readonly"></el-input>
			  </el-form-item>
			  <el-form-item label="邮箱">
			    <el-input v-model="form.email" readonly="readonly"></el-input>
			  </el-form-item>	  
			  <el-form-item label="通讯地址">
			    <el-input v-model="form.address" readonly="readonly"></el-input>
			  </el-form-item>
			  <el-form-item>
			    <el-button class='addpartner_button' type="primary" @click="onSubmit">返回</el-button>
			  </el-form-item>
			</el-form>
	</div>
</template>
<style scoped>
	#addpartner_form {
		background: #fff;
		padding: 140px 339px 266px 200px;
		margin-right: 20px;
		overflow: hidden;
	}

	.addpartner_button:nth-of-type(1) {
		background: #f87e2b;
		border: none;
	}

	.addpartner_button:nth-of-type(1):hover {
		background: rgba(248,126,43,0.9);
	}

	.addpartner_button {
		width: 120px;
		height: 50px;
	}

	#addpartner_title {
		position: absolute;
		left: 0px;
		top: 10px;
		padding-left: 20px;
		width: 98%;
		height: 80px;
		font-size: 20px;
		overflow-x: hidden;
		line-height: 72px;
		color: #444;
		border-bottom: 20px solid #f3f3f5;
	}
</style>
<script>
export default {
  data () {
    return {
      form: {
        name: '胡经华',
        sex: '女',
        IDtype: '居名身份证',
        IDcard: '34324342424334888',
        tel: '13227892222',
        car: '186',
        email: 'jinghua@163.com',
        address: '大山里'
      }
    }
  },
  methods: {
    onSubmit () {
      this.$router.push('/index/partnerManager')
    }
  }
}
</script>
