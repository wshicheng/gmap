<template>
	<div id="addaccount_form">
				<h1 id="addaccount_title">添加合伙人</h1>
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				  <el-form-item label="姓名" prop="username">
				    <el-input v-model="ruleForm.username" placeholder='请输入用户名'></el-input>
				  </el-form-item>
				  <el-form-item label="密码" prop="password">
				    <el-input v-model="ruleForm.password" placeholder='请输入密码'></el-input>
				  </el-form-item>
				  <el-form-item label="所属角色" prop="role">
				    <el-select v-model="ruleForm.role" placeholder="选择角色类型">
				      <el-option label="管理员" value="管理员"></el-option>
				      <el-option label="加盟商" value="加盟商"></el-option>
				      <el-option label="合伙人" value="合伙人"></el-option>
				    </el-select>
				  </el-form-item>
				  <el-form-item label="姓名" prop="name">
				    <el-input v-model="ruleForm.name" placeholder='请输入姓名'></el-input>
				  </el-form-item>
				  <el-form-item label="手机号" prop="tel">
				    <el-input v-model="ruleForm.tel" placeholder='请输入手机号'></el-input>
				  </el-form-item>
				  <el-form-item label="邮箱" prop="eamil">
				    <el-input v-model="ruleForm.eamil" placeholder='请输入邮箱'></el-input>
				  </el-form-item>
				  <el-form-item label="备注">
				    <el-input type="textarea"></el-input>
				  </el-form-item>
				  <el-form-item>
				    <el-button class='addaccount_button' type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
				    <el-button class='addaccount_button' @click="$router.push({path:'/index/accountManager'})">取消</el-button>
				  </el-form-item>
				</el-form>
	</div>
</template>
<style scoped>
	#addaccount_form {
		background: #fff;
		padding: 140px 339px 190px 200px;
		margin-right: 20px;
		overflow: hidden;
	}

	.addaccount_button:nth-of-type(1) {
		background: #f87e2b;
		border: none;
	}

	.addaccount_button:nth-of-type(1):hover {
		background: rgba(248,126,43,0.9);
	}


	.addaccount_button:nth-of-type(2):hover {
		border: 1px solid rgb(248,126,43);
		color: rgb(248,126,43);
	}

	.addaccount_button {
		width: 120px;
		height: 50px;
	}

	#addaccount_title {
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
      ruleForm: {
        username: '',
        password: '',
        role: '',
        name: '',
        tel: '',
        eamil: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { min: 2, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请填写密码', trigger: 'blur' },
          { min: 6, message: '密码应不少于6位', trigger: 'blur' }
        ],
        role: [
          { required: true, message: '请选择角色类型', trigger: 'change' }
        ],
        name: [
          { type: 'array', required: true, message: '请输入姓名', trigger: 'blur' },
          { min: 2, max: 5, message: '请输入正确的姓名', trigger: 'blur' }
        ],
        tel: [
          { type: 'number', required: true, message: '请填写手机号', trigger: 'blur' },
          { min: 11, message: '请输入正确的手机号', trigger: 'blur' }
        ],
        eamil: [
          { message: '请填写正确邮箱', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>
