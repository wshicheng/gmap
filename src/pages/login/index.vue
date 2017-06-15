<template>
  <div id="login">
    <div class="content">
      <header>
        <h3>蜜蜂出行加盟商管理平台</h3>
      </header>
      <div class="loginForm">
        <el-form  label-width="80px" :model="formLabelAlign">
          <el-input v-model="formLabelAlign.username" placeholder="请输入用户名"></el-input>
          <el-input v-model="formLabelAlign.password" type="password" placeholder="请输入密码"></el-input>
          <div class="button-group">
            <el-button class="login" type="primary" name="username" @click="handleSubmit">登录</el-button>
            <el-button class="forget_psd" type="danger" name="password">忘记密码</el-button>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
  import request from 'superagent'
  export default {
    data () {
      return {
        formLabelAlign: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      handleSubmit () {
        request
          .post('http://localhost:3000/login')
          .send({ 'username': this.formLabelAlign.username, 'password': this.formLabelAlign.password })
          .end((error, res) => {
            if (error) {
              console.log('error:', error)
            } else {
              if (res.text.trim() === '登录成功') {
                this.$router.push('/index')
              }
            }
          })
      }
    }
  }
</script>
<style>
  div#login{width:100%;height:100%;background:#f7cd36;position:absolute;left:0;top:0;bottom:0;right:0;overflow:hidden;}
  div#login div.content {width:100%;height:100%;}
  div#login div.content header {width:100%;height:40px;line-height: 40px;margin-bottom:20px;margin-top:10%;}
  div#login div.content header h3{width:400px;margin:0 auto;color:#fffaea;text-align: center;font-size:30px;}
  div#login div.content div.loginForm{width:400px;margin:0 auto;color:#fff;}
  div#login div.content div.loginForm form.el-form{height:100%;background:#292626;padding:40px;border-radius:5px;box-shadow:2px -1px 6px 2px rgba(0,0,0,.6)}
  div#login div.content div.loginForm form.el-form input{margin-bottom:30px;border:1px solid #fbfdff}
  .el-button--primary{color: #fff;
    background-color: #292626;
    border-color: #ffffff;}
  .el-button--primary:hover{background:#f7cd36;border:1px solid #f7cd36;color:#222}  
  button.forget_psd{float:right;}
</style>

